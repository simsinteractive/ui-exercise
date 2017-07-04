var buildModel = {//usually from JSON file or data
	contentArr: {
		"Vlisco": {
			"text": "E-commerce with a colourful story",
			"image": "test_image0.png"
		},
		"Copenhagen Airports": {
			"text": "Knowing Your Customer in the Digital Age",
			"image": "test_image1.png"
		},
		"TV4 Play": {
			"text": "From TV channel to leading content provider",
			"image": "test_image2.png"
		},
		"Audi City": {
			"text": "How to purchase a real car in a virtual store",
			"image": "test_image3.png"
		},
		"Arla Foods": {
			"text": "Dairy production in Big Data",
			"image": "test_image4.png"
		},
		"Xylem": {
			"text": "Helping the world's largest water technology provider solve the global water crisis through Business Transformation",
			"image": "test_image5.png"
		}
	}
},
buildControl = {
	init: function(){
		this.buildContent();
		this.registerEvents();
		setTimeout(
			function(){
				buildControl.setFooterWidth();
			},50//wait 50ms before using this function
		);
	},
	registerEvents:function(){
		$(window).on('resize',function(){
			buildControl.setFooterWidth();
		});
		$('#sidebarButton').on('click',function(){
			$('#sideBar').fadeToggle();
		})
	},
	setFooterWidth: function(){//copies the width of the header to the width of the footer
		var thisWidth = $('header').width();
		$('footer').css('width',thisWidth+'px');
	},
	buildContent: function(){
		var contentHolder = '<ul>';
		$.each(buildModel.contentArr,function(key,value){
			console.log(key, value)//verify output
			contentHolder += '<li>' +
				'<div class="contentCell">' +
					'<div class="cellTop"><img src="'+ value.image +'"></div>' +
					'<div class="cellMid">'+ key +'</div>' +
					'<div class="cellFoot">'+ value.text +'</div>' +
				'</div>' +
			'</li>';
		});
		contentHolder += '</ul>';
		$('#mainContent').append(contentHolder);
	}
}
$(document).ready(function() {
    buildControl.init()
});
