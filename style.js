$().ready(function(){
var cname = $(".cname");
var chl_name = $('.chl_name');
jk('#ad-click-area').remove() || '';
jk('.send-song-to-phone').remove() || '';
jk('#fm-section-app-entry').remove() || '';
var oldNode_A = jk('.chl_section').css({'display':'none'});//.remove();
var oldNode_A_U = jk('.channel_list').css({'display': 'none'});//.remove(); //私人赫兹
//
// lrc box style
jk('.bd').remove() || '';
jk('#fm-bg').remove() || '';
jk('#logo').remove() || '';


var targetNode = document.getElementById("fm-section");
var menuNode = document.createElement("div");
menuNode.className = "po-hz-menu";
var menuNodeText = document.createTextNode("hello po");
menuNode.appendChild(menuNodeText);

var firstNode = document.getElementById("fm-header");
targetNode.insertBefore(menuNode, firstNode);


var cnameBtn = "<button class='po-cname-btn'>" + cname.eq(0).text().substring(2, cname.eq(0).text().length) + "</button>";;
for(var i = 1; i < cname.length - 2; i++){
	var str = cname.eq(i).text();
	console.log(str);
	str = str.indexOf("MHz") !== -1 ? str.substring(0, str.length-3) : str.substring(2, str.length);
	cnameBtn += "<button class='po-cname-btn'>" +
				str + "</button>"; 
}
menuNode.innerHTML = cnameBtn;
                    
jk('.hidden_list').remove();
jk('.chl_name').css({
	'width':'100px'
});
jk('.channel ').css({
	'marginBottom': '0px'
});
jk('.channel_list').css({
	'width': '100px',
});
jk(".ch-list").css({'width': 0, 'margin': 0});
jk(".ch-list-wrapper").css({'width': 0, 'margin': 0, 'padding': 0, 'min-height': 0});


$(document).on('click', '.po-cname-btn', function() {
	var index = $(this).index();

	console.log(chl_name.eq(index).text());
	chl_name[index].click();//trigger('click');
	console.log('-----------');

})
console.log();
$(".pro-promo, 	#fm-section2").remove();
/*$("#po-cname-btn").click(function() {
	console.log(index);
	$('.channel_list li').eq(index).trigger('click');
})*/
});