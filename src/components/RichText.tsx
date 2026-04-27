import { Fragment, type ReactNode } from "react";

interface RichTextProps {
  /**
   * Raw translated text. Supports `**bold**` markers which are rendered as
   * <strong> elements. No HTML is parsed — markers are split safely in JS so
   * the dictionary stays free of HTML and we never use dangerouslySetInnerHTML.
   */
  text: string;
  className?: string;
  as?: "span" | "p" | "h2" | "h3" | "h4" | "li" | "div";
}

/**
 * Renders text with **bold** segments as real <strong> nodes.
 * Safe by construction: input is treated as plain text, never as HTML.
 */
const RichText = ({ text, className, as: Tag = "span" }: RichTextProps) => {
  if (!text) return null;

  // Split on `**...**` while preserving the captured inner text.
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  const nodes: ReactNode[] = parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return <Fragment key={i}>{part}</Fragment>;
  });

  return <Tag className={className}>{nodes}</Tag>;
};

export default RichText;
