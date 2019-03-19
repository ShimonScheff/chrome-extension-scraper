
function waitForElement(element) {
    return new Promise((resolve) => {
         const searchInterval = setInterval(() => {
             console.log('Interval');
              const loginButton = document.querySelector(element);
              console.log(loginButton);
              if (loginButton) {
                  clearInterval(searchInterval);
                  resolve();
              }
          },500)  
      })
}

function clickOnElement(element) {
  const mouseClick =  new MouseEvent('click', {
		bubbles: true,
		cancelable: true,
		view: window
    });

    element.dispatchEvent(mouseClick)
}


(async function () {
    alert('Start!');
    chrome.runtime.onMessage.addListener(message);
    // connect to affiliate program
      // window.location.replace();
     // await chrome.tabs.create({url: });
/*    chrome.runtime.onMessage.addListener(message);
      await waitForElement('.a-button-text');
    
    const loginButton =  document.getElementsByClassName('a-button-text');
    clickOnElement(loginButton[0]);
    alert('Hello!')*/


})();


function message(message, sender, sendRes) {

}