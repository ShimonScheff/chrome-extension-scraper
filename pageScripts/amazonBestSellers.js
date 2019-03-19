(async function  () {
    console.log('amazonBestSellers');
    const mainList = document.getElementById('zg_browseRoot');

    console.log(mainList);

    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            console.log(request)
        });
/*    const message = {
        currentPage: 'affiliatePage'
    };

    chrome.runtime.sendMessage(message, function (response) {
    });*/
})();