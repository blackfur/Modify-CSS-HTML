chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    const txt = request['speak-txt'];
    if(txt) {
        chrome.tts.speak(txt
            //, {'rate':1.0}
        );
    } else{
        alert('Not valid text.');
    };
});
/*chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        title: 'Speak Text'
        ,id:'modify-css-html-speak-txt'
        , "contexts":['selection']
//"onclick": onSpeakTxtclick
    });
});
chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "modify-css-html-speak-txt") {
        if(info && info.selectionText ){
            chrome.tts.speak(info.selectionText 
                //, {'rate':1.0}
            );
        } else{
            alert('Not valid text.');
        };
    }
});*/
