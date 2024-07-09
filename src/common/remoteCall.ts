export const messageType = 'remote-call';

export const outbound = () => parent.postMessage({ pluginMessage: { type: messageType } }, '*');

export const pluginHandler = async () => {
  const response = await fetch('https://httpbin.org/get?success=true');
  const json = await response.json();

  const textNode = figma.createText();
  await figma.loadFontAsync(textNode.fontName as FontName);

  // success=true!
  textNode.characters = JSON.stringify(json.args, null, 2);

  figma.closePlugin();
};
