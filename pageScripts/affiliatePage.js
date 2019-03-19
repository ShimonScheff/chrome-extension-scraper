( function  () {
    let helper;

    try {
        helper = new Helper();
    } catch (e) {
        
    }

    const loginButton =  document.getElementsByClassName('a-button-text');
    helper.clickOnElement(loginButton[0]);

    const message = {
        currentPage: 'loginPage'
    };

    if (window.location.href === 'https://affiliate-program.amazon.com/home') {
        message.userLoggedIn = true
    }

    chrome.runtime.sendMessage(message, function (response) {
    });

})();