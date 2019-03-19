
var ExtPopUp = 
{
    m_BackgroundPagePort: null,

    Initialize: function()
    {   
        this.m_BackgroundPagePort = chrome.runtime.connect();
        this.InitButtons();
    },  
    
    InitButtons:function()
    {
        $('scriptBtn1').addEvent('click', function (event) { ExtPopUp.OnExecuteScript('start'); });
    },
    
    PostMessageToBackgroudPage: function(msgID)
    {                
        if (this.m_BackgroundPagePort && (this.m_BackgroundPagePort != null))
        {
//            this.m_BackgroundPagePort.postMessage({ messageID: "MessageID" });
            this.m_BackgroundPagePort.postMessage({ messageID: msgID });            
        }        
    },

    OnExecuteScript: function (fileName)
    {
        Utils.SafeExecuteScriptOnCurrentTab("pageScripts/" + fileName + ".js",function (result){ });
    }

};


window.addEvent('domready',function(){
    ExtPopUp.Initialize();
});