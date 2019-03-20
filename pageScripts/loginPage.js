// Some of the fields might be missing if the user is already logged in or was before
function login(helper) {
    try {
        document.getElementById('ap_password').value = 'w2WlyYdX149Z';

    } catch (e) {

    }
    // insert user data

    // login
    try {
        document.getElementById('ap_email').value = 'checkspoint+2019@gmail.com';

    } catch (e) {
        console.log('No Button')
    }


    try {
        const loginButton =  document.getElementById('signInSubmit');
        helper.clickOnElement(loginButton);
    } catch (e) {

    }
}


(async function  () {
    console.log('loginPage');
    let helper;

    try {
        helper = new Helper();
    } catch (e) {
        console.log('helper already exists')
    }

    login(helper);

    // update state
    const message = {
        nextPage: 'amazonAffiliateCrm'
    };

    chrome.runtime.sendMessage(message, function (response) {
    })
})();