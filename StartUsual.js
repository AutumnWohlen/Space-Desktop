/*
--App Name : Space Desktop
--App Version : v 0.99
--Author : Vasilenko (Kaydalovskiy) Artem Oleksiyovych
--GitHub : https://github.com/AutumnWohlen/Space-Desktop
--Facebook : https://www.facebook.com/Space-Desktop-2317974875140362
--Website : https://www.space-desktop.com
--License : MIT License
*/

/*
  MIT License
*/

/*
  ATTENTION
StartUsual.js
It is a mail file to start application.
It runs application WITHOUT Theme and uses default windows settings for application on current OS.
You can change main window in BrowserWindow() settings down there.

With default settings it runs your index.php file in /desktop directory.
Use need to use /desktop directory to save your PHP application.
Copy your PHP application with index.php and put them all in /desktop.

  IMPORTANT
You can use two versions of php.ini
One is your own in /php folder. You can modify it with any needs
Another one is custom-generated in /customphpini folder. It gives you an opportunity to use relative pathes in your php.ini
If you want to modify custom-generated php.ini, you need to open /customphpini/generateini.js file and edit settings there.
Also you can switch between php.ini versions in php() function settings down there.
*/



// Included npm modules and dependencies:
const { app, BrowserWindow } = require('electron')
// To start PHP Server
var express = require('express');
var php = require('php-proxy-middleware');
// To create custom-generated php.ini
var iniCompileFunction = require('./generateini.js');



// Functions for external using
// Link for launching a theme
function IndexHTML () {
  var themename = 'Usual';
  var linklocal = './themes/' + themename + '/index.html';
  return linklocal;
};
// Link for launching index.php
function IndexPHP () {
  var linkexternal = 'http://localhost:8000/index.php';
  return linkexternal;
};



//FIXED SHOW WHEN LOAD
function createWindow () {
  // This function creates custom-generated php.ini
  iniCompileFunction(function() {
    console.log('Make php.ini');
  });  
  
  
  // Place for Express functions, if you need them...
  var appser = express();
  
  // add routes to be handled by express here
  // ...


  // Settings for PHP Local Server
  appser.use (php({
    execPath: __dirname + '/php/php.exe', // Path to php.exe
    // If none of "iniFile" selected, PHP Local Server will use default settings
    iniFile: __dirname + '/php/php.ini', // Select php.ini from /php Folder
    //iniFile: 'D:/Electron/Space-Desktop/phpini/php.ini', // Select custom-generated php.ini from /phpini Folder
    root: __dirname + '/desktop', // Folder to your php application and index.php
    address: '127.0.0.1', // Address interface for PHP Local Server
    port: '8000', // Port for PHP Local Server ---------------------------------------- will auto-detect a free port otherwise
    //ini: { max_execution_time: 60, error_log: '...' } // Show logs in Command line  
  }));
  

  // Select index.html from a theme
  var StartThemeHTML = IndexHTML();
  // Select index.php from /desktop Folder
  var StartIndexPHP = IndexPHP();

  // Application window settings
  // Uses Electron BrowserWindow options from https://electronjs.org/docs/api/browser-window
  mainWindow = new BrowserWindow({
	titleBarStyle: 'hidden',
    useContentSize: true,
	//width: 800, 
	//height: 550,
	minWidth: 400,
    minHeight: 450,
	//frame: false,
    show: false
  });

  // Opens index.html from the selected theme
  //mainWindow.loadFile(StartThemeHTML);
  
  // Opens index.php from /desktop Folder
  mainWindow.loadURL(StartIndexPHP);
  
  //This shows the application window after page loading
  //If your application is too heavy, it can take some time 
  mainWindow.once('ready-to-show', () => {
  	mainWindow.show()
  });
};



// Open the application
app.on('ready', createWindow);
// Close the application and external processes
app.on('window-all-closed', () => {
  app.quit();
});