const URL_REGEXP = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
chrome.contextMenus.create({"title": 'Download link', "contexts":['selection'], "onclick": onclick});
function onclick(info,tab){
	if(info && info.pageUrl && URL_REGEXP.test(info.pageUrl) ){
		chrome.downloads.download({url: info.pageUrl}, null);
	} else{
		alert('Not a valid URL.');
	};
}