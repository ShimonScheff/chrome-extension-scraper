(async function  () {
    const helper = new Helper();

    await helper.waitForElement('.a-button-text');

    const loginButton =  document.getElementsByClassName('a-button-text');
    helper.clickOnElement(loginButton[0]);

    const message = {
        currentPage: 'loginPage'
    };
    chrome.runtime.sendMessage(message, function (response) {
    });

})();