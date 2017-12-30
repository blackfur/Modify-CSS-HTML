const filter = /母鸡|又偷|鲜奶|偷奶/;
const danmakuObserver = new MutationObserver(onDanmakuChange);
const bilibiliPlayerObserver = new MutationObserver(onPlayerChange);
const config = { childList: true };
var bilibili_player_video_danmaku;

window.addEventListener('load',function(){
	//console.log('window-load');
	const bilibiliPlayer = document.querySelector('.bilibiliHtml5Player').contentDocument.getElementById('bilibiliPlayer');
	bilibiliPlayer && bilibiliPlayerObserver.observe(bilibiliPlayer,config);
	//manually observe danmaku,because bilibiliPlayerObserver can not observe change at first time.
	onPlayerChange();
});

function onDanmakuChange(mutationRecords,observerInstance){
	//console.log('onDanmakuChange');
	const children = bilibili_player_video_danmaku.children;
	const j = children.length;
	for(var i=0;i<j;i++){
		const child = children[i];
		if(child.style.display!='none' && filter.test(child.innerHTML)) {
			console.log(child.innerHTML);
			child.style.display= 'none';
		}
	}
}

function onPlayerChange(){
	//console.log('onPlayerChange')
	bilibili_player_video_danmaku =document.querySelector('.bilibiliHtml5Player').contentDocument.querySelector('.bilibili-player-video-danmaku');
	bilibili_player_video_danmaku && danmakuObserver.observe(bilibili_player_video_danmaku,config);
}