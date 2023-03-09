const path = require('path')
const {app, BrowserWindow} = require('electron')

app.allowRendererProcessReuse = false
app.on('ready', () => {
  let browser = new BrowserWindow({
    width: 900, height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    }}
  )
  browser.loadURL(path.join('file://', __dirname, '/index.html'))
})
