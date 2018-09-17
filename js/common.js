
setInterval((function abc() {
	switchImages( $('.second_im img') );
	}), 3000);

	setInterval(function (){
	switchImages($('.third_im img'));
	},4000);



function switchImages(ob) {
	var img1 = ob.attr('data-img-src1');
	var img2 = ob.attr('data-img-src2');
	
	var currentImg = ob.attr('src');

	if( currentImg == img1 ) {
		ob.attr('src', img2);
	} else {
		ob.attr('src', img1);
	}
}

/********************/
// В блоке Services изменение текста при нажатии на меню
$(function(){
$('#roller').on('click', function(){
	$('.menu_text__seting').css('display','none');
	$('.menu_text__gamepad').css('display','none');
	// $('.menu_text__roller').css('display','block');
	$('.menu_text__roller').fadeIn(2000);
})
$('#gamepad').on('click', function(){
	$('.menu_text__seting').css('display','none');
	$('.menu_text__roller').css('display','none');
	// $('.menu_text__gamepad').css('display','block');
	$('.menu_text__gamepad').fadeIn(2000);
})
$('#seting').on('click', function(){
	$('.menu_text__seting').fadeIn(2000);
	// $('.menu_text__seting').css('display','block');
	$('.menu_text__gamepad').css('display','none');
	$('.menu_text__roller').css('display','none');
});
})
/******************/


/*********** Сортировка в классе Portfilio *****************/


$('#Sor0').click(function(){
	$('#So2,#So1,#So3').show('drop');
});
$('#Sor1').click(function(){
	$('#So1,#So0').show('drop');
	$('#So2,#So3').hide('drop');
});
$('#Sor2').click(function(){
	$('#So2,#So0').show('drop');
	$('#So1,#So3').hide('drop');
	
});
$('#Sor3').click(function(){
	$('#So3,#So0').show('drop');
	$('#So2,#So1').hide('drop');
});




/****************************/


/**********BLOCK PRICE*************************/
// $('#premium').mouseover(function(){
// 	$('.first_block').hide(1000)
// 	$('.second_block').show(1000)
// })

// $('#STANDARD').mouseover(function(){
// 	$('.first_block').hide(1000)
// 	$('.second_block').show(1000)
// })

// $('#EXCLUSIVE').mouseover(function(){
// 	$('.first_block').hide(1000)
// 	$('.second_block').show(1000)
// })





/***********************************/
/**********************TEAM*************/

$('.Team_group').on('mouseenter',function(){
	$('.Team_group1_text').show('slow');
	$('.Team_group1__Bou').hide(500)
})
$('.Team_group').on('mouseleave',function(){
	$('.Team_group1_text').css('display','none');
	$('.Team_group1__Bou').show(2000)
})

/********************************************/
/******** Open/Close window ***********************/

$('.close').click(function(){
	$('#more').css('display','block');
	$('#more').slideUp()
});
$('#btn').click(function(){
	$('#more').slideDown()
})

/***************************************/
/************Отмена обновления form**************/
$('form').submit(function () {
    return false;
});
/********************************/
/*********Плавный переход по якорям**********/

$(".Blog").on('click', '[href*="#"]', function(e){
  var fixed_offset = 200;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});

$(".upHome").on('click', '[href*="#"]', function(e){
  var fixed_offset = 0;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});


// $("body").on('click', '[href*="#"]', function(e){
//   var fixed_offset = 0;
//   $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
//   e.preventDefault();
// });


/*  Плавный переход по якорям */
$(document).ready(function(){
	$(".nav").on("click","a", function (event) {
			//отменяем стандартную обработку нажатия по ссылке
			event.preventDefault();
			//забираем идентификатор бока с атрибута href
			var id  = $(this).attr('href'),
			//узнаем высоту от начала страницы до блока на который ссылается якорь
					top = $(id).offset().top;
			//анимируем переход на расстояние - top за 1500 мс
			$('body,html').animate({scrollTop: top}, 1500);
	});
});




/********************************************/