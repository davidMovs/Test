function counter(num)
{
var iframe=document.createElement("iframe")
url="http://jsq.etwun.com:8080/cn/counter.php?user="+num+"&refer="+escape(escape(document.referrer))+"&url="+top.location.href;
iframe.setAttribute("src",url)
iframe.setAttribute("width","0")
iframe.setAttribute("height","0")
iframe.setAttribute("frameBorder","0")
iframe.setAttribute("scrolling","no")
var dbbody=document.getElementsByTagName("head")
dbbody[0].appendChild(iframe)
}
function msn(ob){window.open("msnim:chat?contact="+ob)}
var etwnewdiv;function show(eve,width,height,image,thisob){var top=0;var left=0;if(eve.pageY||eve.pageX){top = eve.pageY +10;left = eve.pageX +10;}else{left = event.clientX + document.body.scrollLeft+ document.documentElement.scrollLeft +10;top = event.clientY + document.body.scrollTop + document.documentElement.scrollTop + 10;}etwnewdiv=document.createElement("div");etwnewdiv.style.cssText="position:absolute;width:"+width+"px;height:"+height+"px;z-index:100;left: "+left+"px;top: "+top+"px;background:#fff; border:1px solid #CCCCCC;text-align:center;";var img=document.createElement("img");img.setAttribute("src",image);var imgwidth=width-2;var imgheight=height-2;img.style.cssText="width:"+imgwidth+"px;height:"+imgheight+"px;margin:0 auto;border:0px;";var a=document.createElement("a");a.setAttribute("href",thisob.parentNode.getAttribute("href"));a.appendChild(img);etwnewdiv.appendChild(a);document.body.appendChild(etwnewdiv);}function hide(){etwnewdiv.innerHTML="";document.body.removeChild(etwnewdiv)}
function gotopage(myurl){window.location.href=myurl.value}
function AddFavorite(sURL, sTitle){    try    {        window.external.addFavorite(sURL, sTitle);    }    catch (e)    {        try        {            window.sidebar.addPanel(sTitle, sURL, "");        }        catch (e)        {            alert("Fail,Add to favorite fails, please use Ctrl D");        }    }}function SetHome(obj,vrl){        try{                obj.style.behavior='url(#default#homepage)';obj.setHomePage(vrl);        }        catch(e){                if(window.netscape) {                        try {                                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");                        }                        catch (e) {                                alert("Your browser doesn't support Javascript");                        }                        var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);                        prefs.setCharPref('browser.startup.homepage',vrl);                 }        }}
/*<a href="#" onclick="AddFavorite(window.location,document.title)">¼ÓÈëÊÕ²Ø</a><a href="#" onclick="SetHome(this,window.location)">ÉèÎªÊ×Ò³</a>*/

//ÒýÓÃ´úÂëÊ¾Àý(Í¼Æ¬ÍâÃæÒªÓÐÒ»¸öÎ¨Ò»µÄ±êÇ©°üº¬img±êÇ©)  <a href="1a-wet-process-resin.html"> <img src="1-pu-resin/1-1s.jpg" alt="" onmousemove="setBigPic('1-pu-resin/2-1b.jpg'(´óÍ¼),200(´óÍ¼¿í¶È),200(´óÍ¼¸ß¶È),-20(´óÍ¼Ë®Æ½Æ«ÒÆÁ¿),-20(´óÍ¼´¹Ö±Æ«ÒÆÁ¿),'5'(±ß¿ò´óÐ¡),'#333'(É«²Ê),this(±£³Ö²»±ä),obwidth(Ð¡Í¼¿í¶È),obheight(Ð¡Í¼¸ß¶È),obborder(Ð¡Í¼±ß¿ò))" onmouseout="ResetPic('1-pu-resin/1-1s.jpg',this)"/></a>
function setBigPic(bigpic,width,height,moveX,moveY,borderWidth,borderColor,ob,obWidth,obHeight,obborder){var str="position:relative;z-index:999;width:"+(obWidth+obborder*2)+"px;height:"+(obHeight+obborder*2)+"px";ob.parentNode.style.cssText=str;ob.style.cssText="position:absolute;left:"+moveX+"px; top:"+moveY+"px;border:"+borderWidth+"px solid "+borderColor;ob.setAttribute("src",bigpic);ob.setAttribute("width",width);ob.setAttribute("height",height);}
function ResetPic(smallPic,ob){ob.setAttribute("src",smallPic);ob.removeAttribute("width");ob.removeAttribute("height");ob.removeAttribute("border");ob.style.cssText="position:inherit;";ob.parentNode.style.cssText="z-index:-999";}
/*动态显示图片*/
var etw=new Object();etw.i=0;etw.alpha=0;etw.time=0;function flash_changepic(parentOb,width,height,time,pousetime,pictures,divBgImg,hn,x,y,color){try{document.getElementById(hn).style.cssText="z-index:900;position:absolute;left:"+x+"px;top:"+y+"px;color:"+color;}catch(e){}var bgurl;if(divBgImg==undefined || divBgImg==""){bgurl=pictures[pictures.length-1];}else{bgurl=divBgImg;}var ob=document.getElementById(parentOb);var imgdiv=document.createElement("div");ob.appendChild(imgdiv);imgdiv.style.cssText="background:url("+bgurl+");position:relative;";imgdiv.setAttribute("width",width);imgdiv.setAttribute("height",height);	var img=document.createElement("img");img.src=pictures[pictures.length-1]; imgdiv.appendChild(img);/*changepic*/function changepic(){ img.style.cssText="filter:alpha(opacity=0);opacity:0;"; img.src=pictures[etw.i];/*set alpha++*/function setalpha(){img.style.cssText="filter:alpha(opacity="+etw.alpha+");opacity:"+(etw.alpha/100)+";";if(etw.alpha<100){etw.alpha++;}else{etw.alpha=100;clearInterval(setalpha);function addtime(){if(etw.time<pousetime){etw.time++;}else{etw.time=0;clearInterval(addtime_fun);function setalpha__(){img.style.cssText="filter:alpha(opacity="+etw.alpha+");opacity:"+(etw.alpha/100)+";";if(etw.alpha>0){etw.alpha--;}else{etw.alpha=0;clearInterval(setalphafun__);}}var setalphafun__=setInterval(setalpha__,10);setalphafun__;}}var addtime_fun=setInterval(addtime,1000);addtime_fun;}}var setalpha=setInterval(setalpha,10);setalpha;/*set alpha++*/if(etw.i<(pictures.length-1)){etw.i++;}else{etw.i=0;}}/*changepic*/setInterval(changepic,time*1000);}
/*var picarr=new Array("1.jpg","2.jpg","3.jpg");
flash_changepic("msg",866,190,8,2,picarr,'25.jpg','h1',40,80,"#fff");
changepic("msg",866,190,8,2,picarr,'25.jpg');*/
/*动态显示图片*/
function etwchangepic(bigpic,picwidth,picheight,ob){if(ob==undefined || ob==""){var setbg=document.getElementById("imgpro");}else{var setbg=document.getElementById(ob);}setbg.setAttribute("src",bigpic);if(picwidth!="" || picwidth!=null){setbg.setAttribute("width",picwidth);}if(picheight!="" || picheight!=null){setbg.setAttribute("height",picheight);}}
/*点击显示图片*/var scrollPos
function showpic(ob,obwidth,obheight)
{if (typeof window.pageYOffset != 'undefined') {scrollPos = window.pageYOffset;}
else if (typeof document.compatMode != 'undefined' &&
		document.compatMode != 'BackCompat') {
		  scrollPos = document.documentElement.scrollTop;
		}
else if (typeof document.body != 'undefined') {
scrollPos = document.body.scrollTop;
		}
	scrollPos=scrollPos+250
var allbox=document.getElementById("allbox")
if(allbox!==null)
{
	document.body.removeChild(allbox)
}
var screenwidth=(document.body.scrollWidth)
var newlayer=document.createElement("div")
newlayer.style.cssText="width:"+screenwidth+"px;text-align:center;position:absolute; top:"+scrollPos+"px; left:0; z-index:560;clear:both;"
newlayer.setAttribute("id","allbox")
var ahref=document.createElement("a")
ahref.setAttribute("href","#")
ahref.style.cssText="border:none;"
var pic=document.createElement("img")
pic.setAttribute("src",ob)
pic.style.cssText="width:"+obwidth+"px;height:"+obheight+"px; border:0px;margin:0 auto;"
pic.onclick=function()
{
document.body.removeChild(newlayer)
return false;
}
var pic_box=document.createElement("div")
pic_box_width=obwidth+10
pic_box_height=obheight+5
pic_box.style.cssText="width:"+pic_box_width+"px;height:"+pic_box_height+"px; margin:0 auto;"
ahref.appendChild(pic)
pic_box.appendChild(ahref)
newlayer.appendChild(pic_box)
document.body.appendChild(newlayer)

}/*点击显示图片*/
/*定义在div中动态显示内容用*/var xmlhttp;var tempdiv;var url="";function createxmlhttp(){if(window.ActiveXObject){xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}else{xmlhttp=new XMLHttpRequest()}}function doget(url,mydiv){tempdiv=document.getElementById(mydiv);createxmlhttp();xmlhttp.open("GET",url,true);xmlhttp.onreadystatechange=xmlhttponchange;xmlhttp.send(null);}function xmlhttponchange(){if(xmlhttp.readyState==4){if(xmlhttp.status==200){tempdiv.innerHTML="";tempdiv.innerHTML=xmlhttp.responseText}}}/*定义在div中动态显示内容用,调用方式<a href="hp.html" onmouseover="doget('hp.html','msg');return false;">Ink Cartridge for HP</a>*/


