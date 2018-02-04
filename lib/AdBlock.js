const AdBlock = (function(){
    function removeMatches(elem,filter){
        const matches = elem.querySelectorAll(filter);
        if(matches.length>0){
            if(matches.length>0){
                //console.log(matches);
                for(var k=0,l = matches.length;k<l;k++){
                    matches[k].remove();
                }
            }
        }
    }
    /*function onDOMContentLoaded(mo){
        mo.disconnect();
    }*/
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
        document.addEventListener('DOMContentLoaded', MutationObserver.disconnect.bind(mo));
        document.addEventListener('load', removeMatches.bind(null,document,filter));
    }
    return AdBlock;
})();
