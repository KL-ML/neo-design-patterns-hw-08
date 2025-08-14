import { BaseRenderer } from "./BaseRenderer";

export class MarkdownRenderer extends BaseRenderer {
  renderHeader(level: number, text: string): string {
    return `${"#".repeat(level)} ${text}\n`;
  }

  renderParagraph(text: string): string {
    return `${text}\n`;
  }

  renderList(items: string[]): string {
    let result = "";
    for (const item of items) {
      result += `- ${item}\n`;
    }
    return result;
  }
}
