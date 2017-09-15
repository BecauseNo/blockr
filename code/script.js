$(document).ready(function(){
	var b=$('#B').button()
	var low = 0

		
	b.click(function(){
		var bclone=$('<div style="position:absolute; background-color:#F00;width:0px;height:0px;top:348px;left:348px;"></div>')
		bclone.attr('class','set')
		bclone.appendTo('body')
		b.appendTo('body')
		
		var x=Math.floor((Math.random() * 348) + 10);
		var y=Math.floor((Math.random() * 348) + 10);
		var px=Math.floor((Math.random() * 348) + 10);
		var py=Math.floor((Math.random() * 348) + 10);
		if (x < y) {
			low=x/2
		} else{
			low=y/2
		};
		var r=Math.floor((Math.random() * low) + 1);
		var newColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
		var bw=Math.floor((Math.random() * 20) +1);
		var bc='#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
		bclone.animate({'width':x+'px','background-color':newColor,'height':y+'px','border-radius':r+'px','position':'absolute','top':px+'px','left':py+'px'},1000,'easeOutBack')
		
	})
	var bu=$('#AA').button()
	bu.click(function(){
		$('.set').animate({'width':'68.69px','height':'32.78px','top':'0px','left':'0px','border-radius':'2px'},2000,'easeOutBack');
		setTimeout(function(){$('.set').animate({'opacity':'0'},1000,function(){$(".set").remove()});},2000)
	})
})