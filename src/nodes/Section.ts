import { DocNode } from "../interfaces/DocNode";
import { DocRenderer } from "../interfaces/DocRenderer";
import { RenderEventPublisher } from "../RenderEventPublisher";
import { RenderContext } from "../interfaces/RenderContext";

export class Section implements DocNode {
  constructor(
    private title: string,
    private renderer: DocRenderer,
    private children: DocNode[] = [],
    private level: number = 1
  ) {}

  add(child: DocNode): void {
    this.children.push(child);
  }

  render(): string {
    const start = Date.now();

    const renderedTitle = this.renderer.renderHeader(this.level, this.title);
    const renderedChildren = [];
    for (const child of this.children) {
      renderedChildren.push(child.render());
    }
    const output = renderedTitle + '\n' + renderedChildren.join('\n');
    const end = Date.now();
    const context: RenderContext = {
      type: "Section",
      content: this.title,
      level: this.level,
      renderTime: end - start,
    };
    RenderEventPublisher.notify(context);
    return output;
  }
}
