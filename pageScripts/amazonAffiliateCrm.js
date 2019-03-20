(async function  () {
    console.log('amazonAffiliateCrm');
    const message = {
        nextPage: 'amazonBestSellers'
    };

    chrome.runtime.sendMessage(message, function (response) {
    });
})();