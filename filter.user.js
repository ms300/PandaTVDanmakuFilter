// ==UserScript==
// @name         PandaTVDanmakuFilter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Filter the Danmaku!
// @author       Ms300
// @match        http://www.panda.tv/*
// @grant none
// ==/UserScript==
var Injected=0;

 Injected=setInterval(function(){Inject();},500);



function Inject(){
    console.__originLog('初始化弹幕过滤器.');
    var danmaku=document.getElementById('room-player-video-danmu');
    if(danmaku!=null){
        console.__originLog(danmaku);
        danmaku.addEventListener('DOMNodeInserted', updateDiv, false);
        function updateDiv() {
            console.__originLog('Changed');
            var cmt=document.getElementsByClassName("cmt");
            for(var item in cmt){
                //console.__originLog(item.innerHTML);
                applyFilter(cmt[item]);
            }
        }   
        clearInterval(Injected);
    }else{
        
    }
}


function applyFilter(item){
    lst=["脑残","垃圾","666"];
    for (var idx in lst){
        if(item.innerHTML.indexOf(lst[val])>=0){
            item.parentNode.removeChild(item);
            //item.style.color = "yellow";
        }
    }
}


