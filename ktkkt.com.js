const selector = '#container,#ft_CFdivdlST_B_1,#ft_CFdivdlST_B_0,#cs_DIV_cscpvrich6253B,#fdsbarBox,#mvdiv_2169648_holder,#ifr2169648,#ft_CFdivdlST_B_0,#cs_DIV_cscpvrich6253B,#adfdiv,.logo,.top980';
var mo = new MutationObserver(onObserve);
mo.observe(document, {subtree:true, childList:true});
document.addEventListener('DOMContentLoaded', onDOMContentLoaded);

function onDOMContentLoaded(){
    mo.disconnect();
}

function onObserve(mutations){
    for (var i = 0; i < mutations.length; i++) {
        var nodes = mutations[i].addedNodes;
        for (var j = 0; j < nodes.length; j++) {
            var n = nodes[j];
            if (n.nodeType != 1) // only process Node.ELEMENT_NODE
                continue;
            if(n.matches(selector)){
                //console.log(n);
                n.remove();
            }else{
                removeMatches(n);
            }
        }
    }
}

window.onload = removeMatches.bind(null,document);

function removeMatches(elem){
    const matches = elem.querySelectorAll(selector);
    if(matches.length>0){
        if(matches.length>0){
            //console.log(matches);
            for(var k=0,l = matches.length;k<l;k++){
                matches[k].remove();
            }
        }
    }
}
