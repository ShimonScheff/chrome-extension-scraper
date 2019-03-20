const appState = {
    nextPage: null,
    injectScript: false,
    message: {
        send: false,
        data: null
    },
    currentCategory: -1,
    excelData: []
};

var BackgroundManager =
    {
        injectScripts: function (state) {
            Utils.SafeExecuteScriptOnCurrentTab('pageScripts/helper.js', function (result) {
            });
            Utils.SafeExecuteScriptOnCurrentTab('pageScripts/' + state.nextPage + '.js', function (result) {
            });
        },
        OnDomReady: function () {

            chrome.runtime.onConnect.addListener(function (port) {
                console.log('onConnect');
                BackgroundManager.ConnectToPort(port);
            });
        },
        IsSenderMyPopup: function (sender) {
            try {
                if (typeof (sender) == 'undefined')
                    return false;

                if (!sender.id || (sender.id != chrome.runtime.id))
                    return false;

                if (!sender.url || (sender.url.indexOf('popup.html') == -1))
                    return false;

                return true;
            } catch (e) {
            }
            return false;
        },
        ConnectToPort: function (port) {
            if (!port)
                return;

            if (!this.IsSenderMyPopup(port.sender))
                return;

            port.onMessage.addListener(function (msg) {
                console.log('onMessage');

                BackgroundManager.OnMessageFromPopUp(msg);
            });

            port.onDisconnect.addListener(function (msg) {
                console.log('onDisconnect');

                BackgroundManager.OnDisconnectFromPopUp(msg);
            });
        },
        OnMessageFromPopUp: function (msg) {
            console.log('msg', msg);
            if (!msg)
                return;

//        if (msg.messageID == 'MessageID')

        },
        OnDisconnectFromPopUp: function (port) {
            console.log('OnDisconnectFromPopUp');
            if (!port)
                return;

            if (!this.IsSenderMyPopup(port.sender))
                return;

            this.OnPopUpClosed();
        },

        OnPopUpClosed: function () {

        },
    }

window.addEvent('domready', function () {
    BackgroundManager.OnDomReady();
});


chrome.runtime.onMessage.addListener((req, sender, res) => {
    console.log(req);

    switch (req.nextPage) {
        case 'affiliatePage':
            appState.injectScript = true;
            chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
                chrome.tabs.update(tabs[0].id, {url: 'https://affiliate-program.amazon.com/'}, function () {
                    appState.nextPage = req.nextPage
                });

            });

            break;

        case 'loginPage':
            appState.nextPage = req.nextPage;
            console.log('loginPage');

            break;

            case 'amazonAffiliateCrm':
            // update current page but not running script
                appState.nextPage = req.nextPage;

            break;

        case 'amazonBestSellers':
            // TODO: Delete injectScript
            appState.injectScript = true;
            chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
                chrome.tabs.update(tabs[0].id, {url: 'https://www.amazon.com/gp/bestsellers/'}, function () {
                    appState.nextPage = req.nextPage;
                    appState.currentCategory++;
                    appState.message = {
                        send: true,
                        data: {
                            categoryNumber: appState.currentCategory
                        }
                    }
                });

            });

            break;

        case 'category':
            appState.nextPage = req.nextPage;
            addTitleName(req.categoryName);

            break;


        case 'categoryBestSeller':
            appState.nextPage = req.nextPage;
            break;



        default:
            appState.injectScript = false;
    }
});


chrome.tabs.onUpdated.addListener(function (tabId, info) {
    console.log('info:', info);
    if (info.status && info.status === 'complete' && appState.injectScript) {
        console.log('inject script:', appState.nextPage);
        BackgroundManager.injectScripts(appState);

        if (appState.message.send) {
            setTimeout(() => {
                chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
                    chrome.tabs.sendMessage(tabs[0].id, appState.message.data, function(response) {});
                });
            },1000);
        }


    }
});


// setters for excelData

function addTitleName(categoryName) {
    appState.excelData.push({categoryName})
}





