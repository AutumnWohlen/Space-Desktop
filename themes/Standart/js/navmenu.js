/*
Theme name: Standart
File: JS Options
Version: 1.0.0
Author: Vasilenko (Kaydalovskiy) Artem Oleksiyovych
GitHub: https://github.com/AutumnWohlen/Space-Desktop
Facebook: https://www.facebook.com/Space-Desktop-2317974875140362
Website: https://www.space-desktop.com
*/

// YOU NEED TO USE <webview> TAG OPTIONS ------------------------------------------
// IT IS SPECIAL TAG AND IT IS BASED ON Chromium Engine ---------------------------
// YOU CAN FIND OPTIONS HERE https://electronjs.org/docs/api/webview-tag ----------
const { remote, ipcRenderer } = require('electron')

// Simple window options ----------

function Minimize(){
  remote.getCurrentWindow().minimize()
}

function MinMax(){
  const currentWindow = remote.getCurrentWindow()
  if(currentWindow.isMaximized()) {
    currentWindow.unmaximize()
  } else {
    currentWindow.maximize()
  }
}

function Close(){
  remote.app.quit()
}