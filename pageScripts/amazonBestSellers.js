(async function  () {
    console.log('amazonBestSellers');
    const mainList = document.getElementById('zg_browseRoot').getAttribute("ul");

    console.log(mainList);

    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            console.log(request)

            // TODO: get the right category

            // TODO: Click on the category

            // TODO: Send message 'categoryData'
        });
/*    const message = {
        currentPage: 'affiliatePage'
    };

    chrome.runtime.sendMessage(message, function (response) {
    });*/
})();