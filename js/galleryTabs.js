$(document).ready(function() {
	
	//When page loads...
	
	var num = document.location.href.length;
	var param = document.location.href.substring(num-1);
	if (param == 'l') param = 0;
	
	$("ul.tabs li").removeClass("active"); //Remove any "active" class
	$(`ul.tabs li:eq(${param})`).addClass("active"); //Add "active" class to selected tab
	
		$(".tab_content").hide(); //Hide all tab content
		let activeTab = $(`ul.tabs li:eq(${param})`).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
		$(activeTab).fadeIn(); //Fade in the active ID content
		let valueLi = $(activeTab).find('.pagination').find('li').length;
		if (document.body.id == 'page4') $('.imgCont')[0].style.height = valueLi*121 + 'px';
	//On Click Event
	$("ul.tabs li").click(onClick);
});

function onClick() {
		$("ul.tabs li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(".tab_content").hide(); //Hide all tab content	
		var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
		$(activeTab).fadeIn(); //Fade in the active ID content
		let valueLi = $(activeTab).find('.pagination').find('li').length;
		$('.imgCont')[0].style.height = valueLi*121 + 'px';
		return false;
	}
	
