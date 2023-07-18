const path = require('path')
const {app, BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        width: 900,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
            contextIsolation: false,
        },
    });
    win.loadFile('./src/index.html');
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});


//const exportsPath = path.join(__dirname, 'exports');
// console.log("PATHS", require('module').globalPaths)
// require('module').globalPaths.push(exportsPath);
// console.log("EXP", exportsPath)

// console.log("ATOM", require('atom'))
//app.on('ready', () => {
//  let browser = new BrowserWindow({
//    width: 900, height: 600,
//    webPreferences: {
//      nodeIntegration: true,
//      contextIsolation: false,
//    }}
//  )
//  browser.loadURL(path.join('file://', __dirname, '/src/index.html'))
//})