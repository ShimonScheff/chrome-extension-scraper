(async function  () {
    console.log('loginPage');
    let helper;

    try {
        helper = new Helper();
    } catch (e) {

    }
    // insert user data
    document.getElementById('ap_password').value = 'w2WlyYdX149Z';
    document.getElementById('ap_email').value = 'checkspoint+2019@gmail.com';

    // login
    const loginButton =  document.getElementById('signInSubmit');
    helper.clickOnElement(loginButton);

    // update state
    const message = {
        currentPage: 'amazonAffiliateCrm'
    };
    chrome.runtime.sendMessage(message, function (response) {
    })
})();