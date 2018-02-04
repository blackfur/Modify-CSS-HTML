document.addEventListener('mouseup',function(event){
    var sel = window.getSelection().toString();

    if(sel.length){
        chrome.extension.sendMessage({'speak-txt':sel}
            //,function(response){}
        );
    }
});
