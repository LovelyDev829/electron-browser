const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

// require("update-electron-app")({
//   repo: "kitze/react-electron-example",
//   updateInterval: "1 hour",
// });

function isDev() {
  console.log("Is Packaged:", app.isPackaged);
  return !app.isPackaged;
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    webPreferences: { 
      nodeIntegration: true,
      // devTools: isDev()
    },
    show: false,
  });

  // if (isDev()) {
  //   mainWindow.loadURL("http://localhost:3000/");
  // } else {
  //   loadURL(mainWindow);
  // }

  mainWindow.loadURL("https://electron-custom-browser.netlify.app/")

  // mainWindow.loadFile("../build/index.html")

  if (!isDev()) {
    mainWindow.webContents.on("devtools-opened", () => {
      mainWindow.webContents.closeDevTools(true);
    });
  }

  mainWindow.on('closed',function(){
    mainWindow = null
  })

  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
