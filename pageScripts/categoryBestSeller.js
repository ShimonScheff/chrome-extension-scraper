(async function  () {
    console.log('category');
    let helper;

    try {
        helper = new Helper();
    } catch (e) {

    }

    // TODO: get url

    // TODO: get title

    // TODO: get boolets

    // TODO: get asin

    // TODO: get images

    helper.clickOnElement(bestSeller);

    const message = {
        nextPage: 'categoryBestSeller',
        categoryName
    };

    chrome.runtime.sendMessage(message, function (response) {
    });

})();