console.log('Hello from preload.js file!');

const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    saveProject: (project) => ipcRenderer.send('save-project', project),
    loadProject: () => ipcRenderer.invoke('load-project')
})