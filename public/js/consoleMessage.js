/* 
  # DESCRIPTION: Displays custom message in browser console. #
*/

if (!window.consoleMessage) {
  const consoleMessage = function displayConsoleMessage() {
    console.log('%cThanks for checking out my portfolio site!! 😄', 'font-family:sans-serif;font-size:18px;');
  };

  // * assign the function to the global window object *
  window.consoleMessage = consoleMessage;

  consoleMessage();
}
