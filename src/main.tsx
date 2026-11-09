import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";
import "./i18n";

const container = document.getElementById("root")!;
const application = (
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

if (container.hasChildNodes()) hydrateRoot(container, application);
else createRoot(container).render(application);
