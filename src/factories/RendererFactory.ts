import { DocRenderer } from "../interfaces/DocRenderer";
import { HTMLRenderer } from "../renderers/HTMLRenderer";
import { MarkdownRenderer } from "../renderers/MarkdownRenderer";
import { PlainTextRenderer } from "../renderers/PlainTextRenderer";

export type RendererType = "html" | "markdown" | "plain";

export class RendererFactory {
  static create(type: RendererType): DocRenderer {
    if (type === "html") {
      return new HTMLRenderer();
    } else if (type === "plain") {
      return new PlainTextRenderer();
    } else {
      return new MarkdownRenderer();
    }
  }

  static getSupportedFormats(): RendererType[] {
    return ["html", "markdown", "plain"];
  }
}
