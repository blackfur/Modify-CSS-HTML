const URL_REGEXP = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
var link,warning;

window.onload=function(){
	link = document.getElementById('link');
	warning= document.querySelector('label.warning');
	warning.hidden = true;
	const download_link = document.getElementById('download_link');
	download_link.onclick=onclick;
};
function onclick(){
	if(link.value && URL_REGEXP.test(link.value)){
		chrome.downloads.download({url: link.value}, null);	
		!warning.hidden && (warning.hidden = true);
	} else{
		warning.textContent = 'Not a valid URL.';
		warning.hidden && (warning.hidden = false);
	};
}