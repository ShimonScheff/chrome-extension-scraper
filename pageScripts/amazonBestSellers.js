(async function  () {
    let helper;

    try {
        helper = new Helper();
    } catch (e) {

    }
    console.log('amazonBestSellers');
    const categoryList = document.getElementById('zg_browseRoot').children[1];

    console.log(categoryList);

    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            console.log(request);

            // get current category url
            const category = categoryList.children[0].children[0];
            console.log(category);
            // Click on the category
            helper.clickOnElement(category);

            const message = {
                nextPage: 'category'
            };

            chrome.runtime.sendMessage(message, function (response) {
            });
        });

})();