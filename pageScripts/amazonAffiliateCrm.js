(async function  () {
    console.log('amazonAffiliateCrm');
    const message = {
        currentPage: 'amazonBestSellers'
    };

    chrome.runtime.sendMessage(message, function (response) {
    });
})();