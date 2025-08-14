import { DocNode } from "../interfaces/DocNode";
import { DocRenderer } from "../interfaces/DocRenderer";
import { RenderEventPublisher } from "../RenderEventPublisher";
import { RenderContext } from "../interfaces/RenderContext";

export class List implements DocNode {
  constructor(private items: string[], private renderer: DocRenderer) {}

  render(): string {
    const start = Date.now();
    const output = this.renderer.renderList(this.items);
    const end = Date.now();

    const context: RenderContext = {
      type: "List",
      content: this.items.join(", "),
      items: this.items,
      renderTime: end - start,
    };

    RenderEventPublisher.notify(context);
    return output;
  }
}
