/* ========================================================
 *  JS used on productDetail.aspx 
 * ======================================================== */

function ChangeDropDown(color) { //changes dropdown selection when swatch is clicked
			
	var pullDownSize = document.CartForm.buyPull.length; // number of items in our pulldown
	
	// so we stop on the FIRST size of a matching color, not the last
	var stopBit = 0;
	
	// step through each;
	for( var i=0; i<document.CartForm.buyPull.length; i++ )
	{
		// pullDownItem[0] should contain our color name (all caps)
		var pullDownItem = document.CartForm.buyPull.options[i].text.split(" - ")
		
		if( pullDownItem[0] == color )
		{
			if( stopBit == 0)
			{
				
				document.CartForm.buyPull.selectedIndex = i;
			}
			
			stopBit = 1;
		}
	}
	
}
	window.productDetails2_jso={
	    showPopup: function(o, e, s){
	        var d=document.getElementById(s);
	        d.style.display='block';
	    },
	    
	    hidePopup: function(o, e, s){
	        var d=document.getElementById(s);
	        d.style.display='none';
	    },
	    
	    'end':'end'
	};
function nogo() { ; }

function OpenWindow(url, name, width, height, scroll) {
	popupWin = window.open(url, name, 'status=no,menubar=no,toolbar=no,scrollbars=' + scroll +',resizable=no,width=' + width +',height=' + height + ',screenX=0,screenY=0,top=0,left=0')
}
/*

function validate() {
	createCookie('returnUrl',document.location.href,0);
	
	if( document.CartForm.buyPull.options[0].selected ) {
			alert('Please select a size and color.');
		return false;
		}
	return shipInfo();
}

function shipInfo(){
	if(!window.Site_jsO.siteisdomestic)return true;
	return window.confirm('Please Note: Due to unforseen circumstances, we are currently unable to ship any orders at this time. We will resume shipping orders on January 25th. We sincerely apologize for any inconvenience that this may cause.');
}

*/
function validate() {
	createCookie('returnUrl',document.location.href,0);

	if( document.CartForm.buyPull.selectedIndex == 0 ) {
		alert('Please select a size and color.');
	    return false;
	}
	return true;
}

function MM_reloadPage(init) {  //reloads the window if Nav4 resized
	if (init==true) with (navigator){
		if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
			document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; 
			}
		}
		else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
	}
MM_reloadPage(true);

function MM_findObj(n, d) { //v4.01
	var p,i,x;  
	if(!d) d=document; 
	if((p=n.indexOf("?"))>0&&parent.frames.length) {
		d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
		if(!(x=d[n])&&d.all) x=d.all[n]; 
		for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
		for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
	if(!x && d.getElementById) x=d.getElementById(n); return x;
	}

function P7_ShowPic(a,b) { //v2.0 by PVII
	var g,gg,d,dd,ic,im;
 	if((g=MM_findObj(b))!=null){
 		if(!document.P7ShowPic){
 			document.P7ShowPic=true;
	}
	else{
 		if((d=MM_findObj(document.P7SPlay))!=null){
			dd=(document.layers)?d:d.style;dd.visibility="hidden";
			}
		}
		document.P7SPlay=b;gg=(document.layers)?g:g.style;im=b+"im";
		if((ic=MM_findObj(im))!=null){ic.src=a;gg.visibility="visible";
		}
	}
}
//This is the Javascript to do the acordian for the product details

//this is javascript to do the acordian 

window.accordionProd_jso = {
        ContentHeight: 220,
        TimeToSlide: 250.0,
        openAccordion: '',
        _lastClicked: null,

        runAccordion: function(index, divo, doanim)
        {

          var nID = "prod" + index + "Content";
          if(window.accordionProd_jso.openAccordion == nID)
            nID = '';
           
          if ( doanim == null || doanim != false )
            setTimeout("window.accordionProd_jso.animate("
              + new Date().getTime() + "," + window.accordionProd_jso.TimeToSlide + ",'"
              + window.accordionProd_jso.openAccordion + "','" + nID + "')", 33);
         
          window.accordionProd_jso.openAccordion = nID;
          
          var d = document.getElementById("plus"+index);
          if(window.accordionProd_jso._lastClicked != null && d != window.accordionProd_jso._lastClicked) 
                window.accordionProd_jso._setImage(window.accordionProd_jso._lastClicked, 1);
         
          window.accordionProd_jso._setImage(d);
          window.accordionProd_jso._lastClicked = d;
        },

        animate: function(lastTick, timeLeft, closingId, openingId)
        { 
          var curTick = new Date().getTime();
          var elapsedTicks = curTick - lastTick;
         
          var opening = (openingId == '') ?
              null : document.getElementById(openingId);
          var closing = (closingId == '') ?
              null : document.getElementById(closingId);
         
          if(timeLeft <= elapsedTicks)
          {
            if(opening != null)
              opening.style.height = window.accordionProd_jso.ContentHeight + 'px';
           
            if(closing != null)
            {
              closing.style.display = 'none';
              closing.style.height = '0px';
            }
            return;
          }
         
          timeLeft -= elapsedTicks;
          var newClosedHeight =
              Math.round((timeLeft/window.accordionProd_jso.TimeToSlide) * window.accordionProd_jso.ContentHeight);

          if(opening != null)
          {
            if(opening.style.display != 'block')
              opening.style.display = 'block';
            opening.style.height =
                (window.accordionProd_jso.ContentHeight - newClosedHeight) + 'px';
          }
         
          if(closing != null)
            closing.style.height = newClosedHeight + 'px';

          setTimeout("window.accordionProd_jso.animate(" + curTick + "," + timeLeft + ",'"
              + closingId + "','" + openingId + "')", 33);
        },
        
        _setImage: function (o, force){
         if(o.getAttribute("Xstate") == "opened" || force == 1){

                o.src=o.src.replace(/_open\.gif/,'_closed.gif');
                o.setAttribute("Xstate","closed");
               }
          else{
               o.src=o.src.replace(/_closed\.gif/,'_open.gif');
               o.setAttribute("Xstate","opened");
              }
         }

}

