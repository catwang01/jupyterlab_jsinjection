import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
// import { MainAreaWidget } from '@jupyterlab/apputils';
// import { v4 as uuidv4 } from 'uuid';
// import { Widget } from '@lumino/widgets';

/**
 * Initialization data for the jupyterlab-jsinjection extension.
 */

// const getRandomId = uuidv4;
// const elementStr = `
// <div>
//   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/xterm@4.5.0/css/xterm.css" />
//   <script src="https://cdn.jsdelivr.net/npm/xterm@4.5.0/lib/xterm.js"></script>
// </div>
// `

// const createNode = (elementStr: string): HTMLElement => {
//     const node = document.createElement("div");
//     node.innerHTML = elementStr;
//     return node;
// }
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-jsinjection:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('test: JupyterLab extension jupyterlab-jsinjection is activated!');
    // const node = createNode(elementStr);
    // <link rel= href= />
    const link = document.createElement('link')
    link.rel = "stylesheet"
    link.href = "https://cdn.jsdelivr.net/npm/xterm@4.5.0/css/xterm.css"
    const script = document.createElement('script')
    script.src = "https://cdn.jsdelivr.net/npm/xterm@4.5.0/lib/xterm.js"
    document.head.appendChild(link);
    document.head.appendChild(script);
    // const widget = new Widget({
    //   node
    // });
    // widget.id = getRandomId();
    // app.shell.add(widget, 'main');
  }
};

export default plugin;
