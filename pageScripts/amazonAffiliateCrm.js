(async function  () {
    console.log('amazonAffiliateCrm');
    const message = {
        currentPage: 'affiliatePage'
    };

    chrome.runtime.sendMessage(message, function (response) {
    });
})();