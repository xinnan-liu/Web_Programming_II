/*
Author: Terry li
Mobile: GBin1 2column JS
*/

$(document).ready(function(){	
	/* code viewer */
	$('pre').hover(
		function(){
			if($(this).width()==688){
				$(this).animate({width:'1000'},400);
				$(this).css({border:'1px solid #2B99E6','z-index':'1000'});
			}
		},
		function(){
			if($(this).width()==1000){
				$(this).animate({width:'688'},400);
				$(this).css({border:'1px solid #555555','z-index':'auto'});
			}
		}
	);		
	
	//GBin1 Reading options
	$.waypoints.settings.scrollThrottle = 30;
	
	/*
	$('.blogads,#mainads').waypoint(function(event) {
		$('<div style="display:none;position:relative;margin:0px 0px 5px 0px;border-radius:3px 3px 3px 3px;-moz-border-radius:3px 3px 3px 3px;-webkit-border-radius:3px 3px 3px 3px;background:#303030;padding: 0px;text-align:right;color:#2B99E6;font-weight:normal;font-size:12px;text-shadow:0px 0px 20px #2B99E6;border-left:2px solid #2B99E6;border-right:2px solid #2B99E6;">GBin1 ads&nbsp;</div>').insertBefore($(this)).fadeIn(800).animate({opacity: 0.1,  top: 30}).delay(600).animate({opacity: 0.8,  top: 0});
		event.stopPropagation();
	}, {
		triggerOnce: true,
		offset: 'bottom-in-view'
	});
	*/
	

	/* Latest articles */ 
	var msgclose = $('#msgclose');
	var msg = $('#msgwrap');
	var latest = $('#latest');
	latest.load('/portfolio/lastest.html .includetitle', function() {
		latest.find('.includetitle').hide();
		var aobjs = latest.find('a');
		aobjs.each(function(){
			var srcval = $(this).attr('href').replace('..','');
			$(this).attr('href',srcval);
		});
	});
	
	$('#pagebody').waypoint(function(event,direction){
			msgclose.fadeIn();
			msgclose.click();
	},	{	
			triggerOnce: true,
			offset: function() {
				return $.waypoints('viewportHeight') - $(this).height();
			}
	});
	
	msgclose.toggle(function() { 
		msg.stop().animate({width:'+=250',bottom:'+=20px'},500,function() {
			latest.find('.includetitle').eq(getRan(4)).fadeIn();
		});
		$('#msgclose').css({'background-image':'url("/gbin1/themes/gbin1_3column/images/x_icon.png")'});
	  }, 
	  function() { 
		$('#latest').find('.includetitle').hide();
		msg.stop().animate({width:'-=250',bottom:'-=20px'},500);
		$('#msgclose').css({'background-image':'url("/gbin1/themes/gbin1_3column/images/icon_plus.png")'});
	});			
	
	/* User Reading options */
	$('#flipcolor').toggle(function(e){
		$('#pagebody').css({'background':'#ffffff','color':'#000000'}).find('h1').css({'color':'#333'}).parent().find('h2').css({'color':'#333'}).parent().find('h3').css({'color':'#333'});
		e.preventDefault();
		},function(e){
		$('#pagebody').css({'background':'','color':''}).find('h1').css({'color':'#CCCCCC'}).parent().find('h2').css({'color':'#CCC'}).parent().find('h3').css({'color':'#CCC'});
		e.preventDefault();
	});
	
	$('#zoomfont').toggle(function(e){
		$('#pagebody').css({'font-size':'16px'});
		e.preventDefault();
		},function(e){
		$('#pagebody').css({'font-size':'14px'});
		e.preventDefault();
	});
	
	$pgbd = $('#pagebody');
	$('#fullscreen').toggle(function(e){
			$pgbd.animate({'width':'1120px','z-index': '100'}).css({'z-index':'1000'});
			e.preventDefault();
		},function(e){
			$pgbd.animate({'width':'690px'}).css({'z-index':'auto'});
			e.preventDefault();
	});
	
	/* left hand controll menu for admin */
	$('.content').waypoint(function(event, direction) {
		if (direction === 'down') {
			$('#floatingcontrol').css({'position':'fixed','top':0});
		}else{
			$('#floatingcontrol').css({'position':'absolute','top':150});
		}
	});				
	
	/* Table to Grid */
	$('.gbtable').dataTable({
	    "oLanguage": {
			"sUrl": "/gbin1/themes/gbin1_2column_page/js/zh_CN.txt"
		},
		"sPaginationType": "full_numbers",
		"iDisplayLength": 25
	});
	
	
	/* QQ Group flip*/
	$("#qqgroup").toggle(function(){
			$(this).flippy({
				content:'<div style="font-size:14px;padding-top:10px"><div style="color: #707070">=前端开发=</div>90484543 <div style="color: #707070"> =前端设计=</div>231089500</div>',
				direction:"RIGHT",
				duration:"750",
				color_target:"#333333"		
			});
		},function(){
			$(this).flippy({
				content:'<div style="line-height:125px"><img align="absmiddle" src="/gbin1/common/images/qq.png" alt="QQ"></div>',
				direction:"RIGHT",
				duration:"750",
				color_target:"#404040"		
			});
	});	
			
});

function getRan(n){
	return Math.floor(Math.random()*n+1);
}	