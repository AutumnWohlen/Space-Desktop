/*
--App Name : Space Desktop
--App Version : v 1.0.1
--Author : Vasilenko (Kaydalovskiy) Artem Oleksiyovych
--GitHub : https://github.com/AutumnWohlen/Space-Desktop
--Facebook : https://www.facebook.com/Space-Desktop-2317974875140362
--Website : https://www.space-desktop.com
--License : MIT License
*/

/*
  IMPORTANT
Here you need to select the start Mode
You can switch between 'StartUsual' and 'StartTheme'
'StartUsual' is for running an application WITHOUT Theme and uses default windows settings for application on current OS.
'StartTheme' is for running an application WITH a selected Theme and uses settings for application on current OS and from theme folder.
*/
 
var modalmode = './StartUsual.js';
// var modalmode = './StartTheme.js';
const myModule = require( modalmode );
let val = myModule.startappmode(); // Run the selected mode  