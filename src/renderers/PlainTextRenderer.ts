import { BaseRenderer } from "./BaseRenderer";

export class PlainTextRenderer extends BaseRenderer {
  renderHeader(level: number, text: string): string {
    return `${" ".repeat((level - 1) * 2)}${text.toUpperCase()}\n`;
  }

  renderParagraph(text: string): string {
    return `${text}\n`;
  }

  renderList(items: string[]): string {
    let result = "";
    for (const item of items) {
      result += `* ${item}\n`;
    }
    return result;
  }
}
