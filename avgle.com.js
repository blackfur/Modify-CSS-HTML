/* ,
		{
			"js": ["avgle.com.js"],
			"matches": ["https://avgle.com/*"]
		} */
const arr = [
    //{f:'getElementById',attr:[]},
    {f:'querySelectorAll',attr:[
        //'.pblf-banner','.container','img','#sfqaqy','center','div.col-md-4',
        'iframe',
        //'#blocked-if'
    ]}
];
window.onload = function(){
    var attr,f,attri,elem;
    for(var i = 0,l = arr.length;i<l;i++){
        f = arr[i].f;
        attr = arr[i].attr;
        for(var j=0,len = attr.length;j<len;j++){
            attri = attr[j];
            try{
                elem = (document[f])(attri);
                if(elem.length>0){
                    for(var k= 0,leng=elem.length;k<leng;k++){
                        elem[k].remove();
                    }
                }
            }catch(err){
                console.log(attri);
                console.log(err);
            }
        }
    }
}
