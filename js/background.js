const appState = {
    currentPage: null
}

var BackgroundManager =
    {
        injectScripts: function (state) {
            Utils.SafeExecuteScriptOnCurrentTab('pageScripts/helper.js', function (result) {
            });
            Utils.SafeExecuteScriptOnCurrentTab('pageScripts/' + state.currentPage + '.js', function (result) {
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
                if (typeof(sender) == 'undefined')
                    return false;

                if (!sender.id || (sender.id != chrome.runtime.id))
                    return false;

                if (!sender.url || (sender.url.indexOf('popup.html') == -1))
                    return false;

                return true;
            }
            catch (e) {
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
    Utils.SafeExecuteScriptOnCurrentTab("pageScripts/helper.js", function (result) {
    });

    switch (req.currentPage) {
        case 'affiliatePage':
            chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
                chrome.tabs.update(tabs[0].id, {url: 'https://affiliate-program.amazon.com/'}, function () {
                    appState.currentPage = req.currentPage
                });

            });

            break;

        case 'loginPage':
            appState.currentPage = req.currentPage;
            break;

            case 'amazonAffiliateCrm':
            appState.currentPage = req.currentPage;
            break;

    }
});


chrome.tabs.onUpdated.addListener(function (tabId, info) {
    if (info.status && info.status === 'complete') {
        BackgroundManager.injectScripts(appState)
    }
});





