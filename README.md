[![Space-Desktop Logo](http://www.space-desktop.com//logo-github.png)](http://www.space-desktop.com)

# SPACE-DESKTOP

Space desktop is an application for running php and python (in development) code on chromim engine with css, html, js support. You can create desktop software for Windows with php and python (in near future). Realeases for Mac and Linux will be in future updates.

## Important Links

* [Space-Desktop Website](http://www.space-desktop.com) - The official website of a framework and an application.
* [Facebook](https://---) - My Facebok page.
* [Patreon](https://---) - Patreon page. With patronage I will be able to buy more licences and external software for future Space-Desktop updates.

## Getting Started

Download the application from external link or from this github page. Unpack an archive in folder on Windows System or USB and run the space-desktop.exe (for Windows).

### Requirements

System settings and requirements:

```
Windows 10, 8, 7;
OS Windows 64bit;
USB or Hard Drive.
```

## Run Settings

You can run the application with custom theme or with standart UI OS window theme.
To change the settings for theme open the 'space-desktop-win32-x64\resources\app\package.json' and change current string:

```
"main": "StartTheme.js",
```

To this one:

```
"main": "StartUsual.js",
```

The result is a switched window's theme.

## Run Custom PHP code

Copy your php code to 'space-desktop-win32-x64\resources\app\desktop\' folder. You need to have there an 'index.php' or 'index.html' file.

### Change a PHP version

Go to [PHP Website](https://www.php.net/releases/index.php)
Select your version and download it.
Delete all files in 'space-desktop-win32-x64\resources\app\php\' folder.
Copy your downloaded version of PHP in 'space-desktop-win32-x64\resources\app\php\' folder.

### Edit 'php.ini'

This application can run php.ini settings with relative paths!
To do this you need to open the 'space-desktop-win32-x64\resources\app\generateini.js' file.
You will see examples for editing inside of this 'generateini.js' file.
But as an example you will get rows like this:

```
;;;;;;;;;;;;;;;;;;;
; About php.ini   ;
;;;;;;;;;;;;;;;;;;;
; PHP's initialization file, generally called php.ini, is responsible for
; configuring many of the aspects of PHP's behavior.
```

Last what you need to do is to open 'StartTheme.js' or 'StartUsual.js' files and find this strings:

```
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
```

You need to replace 'iniFile' string with commented one. The result is:

```
// Settings for PHP Local Server
appser.use (php({
execPath: __dirname + '/php/php.exe', // Path to php.exe
// If none of "iniFile" selected, PHP Local Server will use default settings
//iniFile: __dirname + '/php/php.ini', // Select php.ini from /php Folder
iniFile: 'D:/Electron/Space-Desktop/phpini/php.ini', // Select custom-generated php.ini from /phpini Folder
root: __dirname + '/desktop', // Folder to your php application and index.php
address: '127.0.0.1', // Address interface for PHP Local Server
port: '8000', // Port for PHP Local Server ---------------------------------------- will auto-detect a free port otherwise
//ini: { max_execution_time: 60, error_log: '...' } // Show logs in Command line  
}));
```

### Use standart 'php.ini'

If you want to use standart php.ini settings with none of Node.JS integrations, you don't need to edit 'StartTheme.js' or 'StartUsual.js' files. Just open the 'space-desktop-win32-x64\resources\app\php\' folder and edit local 'php.ini' file there.

## License

Please read a [License](https://---) on a GitHub page (MIT).
Or read a [License](https://---) on a Space-Desktop Website page (MIT).

## Versioning

The most current version will be posted here on the GitHub page.
To download another versions or themes go to [Space-Desktop Website](http://www.space-desktop.com).

## Author

**Vasilenko (Kaydalovskiy) Artem Oleksiyovych** - *The developer*

## Questions and suggestions

If you have a question or proposition, mail me to this address [SpaceDesktopMail@gmail.com](SpaceDesktopMail@gmail.com).
You can also send me a mail letter on legal issues. If you noticed that some laws were been violated, write me describe an issue.

