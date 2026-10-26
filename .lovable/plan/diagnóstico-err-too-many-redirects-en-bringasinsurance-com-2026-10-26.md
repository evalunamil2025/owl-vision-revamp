# Diagnóstico: ERR_TOO_MANY_REDIRECTS en bringasinsurance.com

## Qué está pasando ahora mismo (medido hoy, 10-sep-2026, 17:09 UTC)

El sitio **no se está sirviendo desde Lovable**. Los dominios están apuntando al
servicio de **reenvío (Domain Forwarding) de GoDaddy**, que se redirige a sí mismo
en bucle infinito.

Cadena HTTP real:

```text
http://bringasinsurance.com/   -> 301 Location: https://www.bringasinsurance.com
https://bringasinsurance.com/  -> 301 Location: https://www.bringasinsurance.com
https://www.bringasinsurance.com/ -> 301 Location: https://www.bringasinsurance.com   <-- bucle
```

`www` se redirige a `www`, indefinidamente: eso es exactamente
ERR_TOO_MANY_REDIRECTS. El apex tampoco funciona: solo salta al `www` roto.

DNS observado en público:

| Registro | Valor actual | Valor correcto |
| --- | --- | --- |
| NS | ns31/ns32.domaincontrol.com (GoDaddy) | Cloudflare (según la migración previa) — hoy está de vuelta en GoDaddy |
| A `@` | 15.197.225.128 / 3.33.251.168 (reenvío GoDaddy) | 185.158.133.1 (Lovable) |
| `www` | CNAME → apex (reenvío GoDaddy) | A 185.158.133.1 (Lovable) |
| TXT `_lovable` | **ausente** | token de verificación de Lovable |
| MX | **ausente** | `0 bringasinsurance-com.mail.protection.outlook.com` |
| SPF | **ausente** | `v=spf1 include:spf.protection.outlook.com -all` |
| autodiscover | **ausente** | CNAME `autodiscover.outlook.com` |
| DMARC | presente | sin cambios |

Cabeceras de las respuestas 301 (`server: ip-100-74-x-x.eu-west-2.compute.internal`,
`x-request-id`) corresponden al reenvío de dominios de GoDaddy, no a Lovable ni a
Cloudflare. El origen de Lovable (`owl-vision-revamp.lovable.app`) responde 200
correctamente: la aplicación está sana, el problema es 100% de DNS/registrador.

Lovable confirma el mismo diagnóstico: ambos dominios figuran como **drifted**
("los registros DNS fueron cambiados o eliminados"), no como Live.

## Causa más probable

La zona DNS se restableció en GoDaddy: los nameservers volvieron de Cloudflare a
GoDaddy y la zona quedó con la plantilla por defecto + **Domain Forwarding
activado hacia `www`**, borrando los registros de Lovable y los de correo.
Esto suele ocurrir al usar "Connect domain / Domain Connect" o al cancelar la
delegación a Cloudflare desde el panel de GoDaddy.

**Alerta aparte, igual de urgente:** al desaparecer MX y SPF, **el correo de
Microsoft 365 está caído**: todo el correo entrante rebota desde este momento.

## Pasos exactos y mínimos para corregirlo

Todo se hace en el panel DNS de **GoDaddy** (la zona activa hoy).

1. **Desactivar el reenvío.** GoDaddy → Dominio → *Forwarding* → borrar el
   reenvío del dominio y del subdominio `www`. Es la causa directa del bucle.
2. **Restaurar el sitio (Lovable).**
   - A `@` → `185.158.133.1` (TTL 600). Eliminar los A `15.197.225.128` y
     `3.33.251.168`.
   - Eliminar el CNAME `www` → apex; crear A `www` → `185.158.133.1`.
3. **Restaurar la verificación de Lovable.** Añadir los TXT que muestra
   Settings → Domains para cada dominio, p. ej.
   `_lovable.www` = `lovable_verify=4f194b35d8f3320d44ab5bf883b6041c0fb68673e091d7f893f5adff0447d3a6`
   (copiar el valor exacto que muestre el panel para apex y para www).
4. **Restaurar el correo (prioridad máxima).**
   - MX `@` prioridad 0 → `bringasinsurance-com.mail.protection.outlook.com`
   - TXT `@` → `v=spf1 include:spf.protection.outlook.com -all`
   - CNAME `autodiscover` → `autodiscover.outlook.com`
   - Dejar el `_dmarc` existente tal cual.
5. **Verificar** con las pruebas de la sección técnica; después, en Lovable
   Settings → Domains, pulsar *Retry / Verify* hasta que ambos pasen a Active.
6. **Decidir el canónico**: marcar el apex como *Primary* en Lovable para que
   `www` redirija una sola vez al apex (así es como está el sitemap y los
   canonicals del sitio). No crear ningún reenvío en GoDaddy.

### Si se quiere recuperar Cloudflare (reglas 301/410 de SEO)

Ese trabajo (Bulk Redirects + WAF 410, documentado en `docs/edge-redirects.md`)
depende de que los nameservers vuelvan a Cloudflare. **Hacerlo después**, no en
la misma ventana: primero el sitio y el correo arriba con GoDaddy, verificados;
luego, en la zona de Cloudflare ya existente, comprobar que están los 7 registros
anteriores y recién entonces cambiar los NS en el registrador.

## Impacto en SEO y correo

- **Correo:** los pasos 4 lo restauran; sin ellos sigue rebotando todo.
- **SEO:** el bucle hace que Googlebot no pueda rastrear nada. Cuanto antes se
  deshaga, menor el daño; no hace falta ningún cambio de contenido ni de código.
- Los canonicals y el sitemap del proyecto ya son correctos y no se tocan.

## Detalles técnicos / verificación

No se modificó ningún archivo ni configuración en este diagnóstico. Comandos de
comprobación tras aplicar los cambios:

```sh
curl -sI https://bringasinsurance.com/ | head -5
curl -sIL -o /dev/null -w '%{http_code} %{url_effective} redirs=%{num_redirects}\n' \
  https://www.bringasinsurance.com/
dig +short bringasinsurance.com A www.bringasinsurance.com A
dig +short bringasinsurance.com MX
```

Esperado: apex `200`, `www` un único `301` al apex y luego `200`, A = `185.158.133.1`,
MX = `bringasinsurance-com.mail.protection.outlook.com`. El script
`scripts/verify-seo-status.mjs` sirve para la comprobación completa posterior.
