
function login(helper) {
    document.getElementById('ap_password').value = 'w2WlyYdX149Z';
    // insert user data

    // login
    try {
        document.getElementById('ap_email').value = 'checkspoint+2019@gmail.com';

    } catch (e) {
        console.log('No Button')
    }


    const loginButton =  document.getElementById('signInSubmit');
    helper.clickOnElement(loginButton);


    return
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
        currentPage: 'amazonAffiliateCrm'
    };

    chrome.runtime.sendMessage(message, function (response) {
    })
})();