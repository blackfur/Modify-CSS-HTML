const URL_REGEXP = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;

chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        title: 'Download link'
        ,id:'modify-css-html-download-url'
        , "contexts":['selection']
    });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "modify-css-html-download-url") {
        if(info && info.pageUrl && URL_REGEXP.test(info.pageUrl) ){
            chrome.downloads.download({url: info.pageUrl}, null);
        } else{
            alert('Not a valid URL.');
        };
    }
});
