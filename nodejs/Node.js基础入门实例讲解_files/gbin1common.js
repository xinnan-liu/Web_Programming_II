/*
Author: Terry li
Mobile: GBin1 common JS
*/

//GBin1 Domain handler
if (document.domain =='gbin1.com') 
	this.location = "http://www.gbin1.com" + this.location.pathname + this.location.search;
else if (document.domain =='rss.gbin1.com') 
	this.location = "http://www.gbin1.com/gbin1/admin/rss.jsp" + this.location.search;
else if (document.domain =='s.gbin1.com') 
	this.location = "http://www.gbin1.com/gb/search.htm" + this.location.search;
else if (document.domain =='www.gbtags.com') 
	this.location = "http://www.gbtags.com/gb";
else if (document.domain =='gbtags.com') 
	this.location = "http://www.gbtags.com/gb";

if (this.location.pathname=='/'){
		var str = $.cookie("home");  	
		if(str=='index'||str=='bloghome'){
			window.location.href=str+'.html';
		}
}

jQuery(function(){
	$('#portalmode').click(function(e){
		$.cookie("home","index",{expires: 30, path: '/'});  	
		$("#tipforhome").show(10).delay(1000).fadeOut(500);
		e.preventDefault();
	});
	
	$('#blogmode').click(function(e){
		$.cookie("home", "bloghome",{expires: 30, path: '/'});  	
		$("#tipforhome").show(10).delay(1000).fadeOut(500);
		e.preventDefault();
	});
});

//GBin1 Menu 
jQuery(function(){
	jQuery('ul.sf-menu').superfish();
});

jQuery(document).ready(function($){		
	//GBin1 Scroll up
	scrolltotop.controlHTML='<img src="/gbin1/common/images/scrolltop.png"/>';
	var mainobj=scrolltotop
	var iebrws=document.all
	mainobj.cssfixedsupport=!iebrws || iebrws && document.compatMode=="CSS1Compat" && window.XMLHttpRequest //not IE or IE7+ browsers in standards mode
	mainobj.$body=(window.opera)? (document.compatMode=="CSS1Compat"? $('html') : $('body')) : $('html,body')
	mainobj.$control=$('<div id="topcontrol">'+mainobj.controlHTML+'</div>')
		.css({position:mainobj.cssfixedsupport? 'fixed' : 'absolute', bottom:'125px', right:'0', opacity:0, cursor:'pointer'})
		.attr({title:'Scroll Back to Top'})
		.click(function(){mainobj.scrollup(); return false})
		.appendTo('body')
	if (document.all && !window.XMLHttpRequest && mainobj.$control.text()!='') //loose check for IE6 and below, plus whether control contains any text
		mainobj.$control.css({width:mainobj.$control.width()}) //IE6- seems to require an explicit width on a DIV containing text
	mainobj.togglecontrol()
	$('a[href="' + mainobj.anchorkeyword +'"]').click(function(){
		mainobj.scrollup()
		return false
	})
	$(window).bind('scroll resize', function(e){
		mainobj.togglecontrol()
	})

	//GBin1 menu icons
	$('.aux li').each(function(index){
		var icontip = $('#icontip');
		$(this).hover(
			function(){
				var url = $(this).find("img").attr('src');
				if(url.indexOf('rss') >=0){
					url = '/gbin1/common/images/rsshover.png';								
					icontip.html('RSS\u8ba2\u9605');
				}else if(url.indexOf('mail') >=0){
					url = '/gbin1/common/images/mailhover.png';
					icontip.html('Email\u8ba2\u9605');
				}else if(url.indexOf('wap') >=0){
					url = '/gbin1/common/images/waphover.png';
					icontip.html('\u624b\u673a\u9605\u8bfb');
				}else if(url.indexOf('sinaweibo') >=0){
					url = '/gbin1/common/images/sinaweibohover.png';
					icontip.html('\u65b0\u6d6a\u5fae\u535a');
				}else if(url.indexOf('article') >=0){
					url = '/gbin1/common/images/articlehover.png';
					icontip.html('\u6587\u7ae0\u6295\u9012');
				}
				var tipoffset = $(this).offset();
				var halfw = icontip.outerWidth()/2;
					icontip.css({ 
						left:tipoffset.left + 26 - halfw + "px", 
						top:tipoffset.top - 38  + "px" 
					}).show();
				$(this).find("img").attr('src',url);
			},
			function(){
				var url = $(this).find("img").attr('src');
				if(url.indexOf('rss') >=0){
					url = '/gbin1/common/images/rss.png';
				}else if(url.indexOf('mail') >=0){
					url = '/gbin1/common/images/mail.png';
				}else if(url.indexOf('wap') >=0){
					url = '/gbin1/common/images/wap.png';
				}else if(url.indexOf('sinaweibo') >=0){
					url = '/gbin1/common/images/sinaweibo.png';
				}else if(url.indexOf('article') >=0){
					url = '/gbin1/common/images/article.png';
				}
				$(this).find("img").attr('src',url);
				icontip.html('rss feed').hide();
			}
		);
	});			
	
	//GBin1 searchbox encoding
	$("#searchgbin1").click(function(){
		var s = encodeURIComponent($("#s").val());
		document.location.href = '/gb/search.htm?s=' + s;
		return false;
	});
	
	//GBin1 float admin menu
	$.waypoints.settings.scrollThrottle = 30;
	$('.content').waypoint(function(event, direction) {
		if (direction === 'down') {
			$('#floatingcontrol').css({'position':'fixed','top':0});
		}else{
			$('#floatingcontrol').css({'position':'absolute','top':150});
		}
	});
	
	//GBin1 main menu
	$(".gbin1Style").lavaLamp({
		fx: "elasout", 
		speed: 2200,
		click: function(event, menuItem) {
			return true;
		}
	});
});

