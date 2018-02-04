const AdBlock = (function(){
    function removeMatches(elem,filter){
        //console.log('removeMatches');
        const matches = elem.querySelectorAll(filter);
        //console.log(matches);
        if(matches.length>0){
            if(matches.length>0){
                //console.log(matches);
                for(var k=0,l = matches.length;k<l;k++){
                    matches[k].remove();
                }
            }
        }
    }
    function onObserve(filter,mutations){
        for (var i = 0; i < mutations.length; i++) {
            var nodes = mutations[i].addedNodes;
            for (var j = 0; j < nodes.length; j++) {
                var n = nodes[j];
                if (n.nodeType != 1) // only process Node.ELEMENT_NODE
                    continue;
                if(n.matches(filter)){
                    //console.log(n);
                    n.remove();
                }else{
                    removeMatches(n);
                }
            }
        }
    }
    function AdBlock(filter){
        const mo = new MutationObserver(onObserve.bind(null,filter));
        mo.observe(document, {subtree:true, childList:true});
        document.addEventListener('DOMContentLoaded', MutationObserver.prototype.disconnect.bind(mo));
        const reMatch = removeMatches.bind(null,document,filter);
        document.addEventListener('load', reMatch );
        if (window.addEventListener) {
            window.addEventListener('load', reMatch , false);
        } else if (window.attachEvent) {
            window.attachEvent('onload', reMatch);
        }
    }
    return AdBlock;
})();
