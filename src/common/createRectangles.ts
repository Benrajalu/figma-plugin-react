export const messageType = 'create-rectangles';

type CommonProps = { count: number };

export const outbound = (props: CommonProps) =>
  parent.postMessage({ pluginMessage: { type: messageType, count: props.count } }, '*');

export const pluginHandler = (props: CommonProps) => {
  const nodes: SceneNode[] = [];
  for (let i = 0; i < props.count; i++) {
    const rect = figma.createRectangle();
    rect.x = i * 150;
    rect.fills = [{ type: 'SOLID', color: { r: 1, g: 0.5, b: 0 } }];
    figma.currentPage.appendChild(rect);
    nodes.push(rect);
  }
  figma.currentPage.selection = nodes;
  figma.viewport.scrollAndZoomIntoView(nodes);
  figma.closePlugin();
};
