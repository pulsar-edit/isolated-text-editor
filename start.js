const path = require('path')
const {app, BrowserWindow} = require('electron')

const exportsPath = path.join(__dirname, 'exports');
// console.log("PATHS", require('module').globalPaths)
// require('module').globalPaths.push(exportsPath);
// console.log("EXP", exportsPath)

// console.log("ATOM", require('atom'))
app.on('ready', () => {
  let browser = new BrowserWindow({
    width: 900, height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }}
  )
  browser.loadURL(path.join('file://', __dirname, '/src/index.html'))
})
