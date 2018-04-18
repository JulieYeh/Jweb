// JavaScript Document
$(document).ready(function() {
    $(document).ready(init)
    function init() {
		$("#hand01,#hand02,#hand03").hide()

$('.qa02,#qashow,#page04,.ch202,.ch203,#page02in01,#page02in02,#page02,.samp01,.samp02,.sampin02,.sampin03,.sampin04,#ok02').hide();
        $(window).scroll(windowscroll)
    }







    //<!--偵測目前卷軸位置改變上下BAR其他外觀-->
    function windowscroll() {
        var this_scrollTop = $(this).scrollTop()
        if (this_scrollTop >= 0 && this_scrollTop < 50) {

            $('.scrolldown').fadeIn()
			//$('.shake-slow').delay(500).fadeIn()
			
        }
        if (this_scrollTop > 50) {
           $('.scrolldown').fadeOut()
        }
		
		if (this_scrollTop > $("#pa01").offset().top - 600) {

		//setTimeout(function () {$('#numb01').addClass('animated zoomInDown');}, 100);
		//setTimeout(function () {$('#txt01').addClass('animated zoomInRight');}, 700);
		

		

        }
		if (this_scrollTop > $("#pa02").offset().top - 600) {
        //setTimeout(function () {$('#numb02').addClass('animated zoomInDown');}, 100);
		//setTimeout(function () {$('#txt02').addClass('animated zoomInRight');}, 700);

        }
		if (this_scrollTop > $("#pa03").offset().top - 400) {
         // setTimeout(function () {$('#numb03').addClass('animated zoomInDown');}, 100);
		//setTimeout(function () {$('#txt03').addClass('animated zoomInRight');}, 700);
        // setTimeout(function () {$('#txt031').slideDown();}, 1200);
        }
		
		
    }
	<!--立即試算的bar-->
 $('#numbgo01 .goin1').click(function () {$('#numbgo01').css('background-image','url(img2/barin01.png)');} );
 $('#numbgo01 .goin2').click(function () {$('#numbgo01').css('background-image','url(img2/barin02.png)');} );
 $('#numbgo01 .goin3').click(function () {$('#numbgo01').css('background-image','url(img2/barin03.png)');} );
 $('#numbgo01 .goin4').click(function () {$('#numbgo01').css('background-image','url(img2/barin04.png)');} );
 
 $('#numbgo02 .goin1').click(function () {$('#numbgo02').css('background-image','url(img2/barin01.png)');} );
 $('#numbgo02 .goin2').click(function () {$('#numbgo02').css('background-image','url(img2/barin02.png)');} );
 $('#numbgo02 .goin3').click(function () {$('#numbgo02').css('background-image','url(img2/barin03.png)');} );
 $('#numbgo02 .goin4').click(function () {$('#numbgo02').css('background-image','url(img2/barin04.png)');} );
 
 
 $('.ybtn01').click(function () {$('.ybtn01').attr('style','background-color:#e88000');$('.ybtn02,.ybtn03,.ybtn04').attr('style','');} );
 $('.ybtn02').click(function () {$('.ybtn02').attr('style','background-color:#e88000');$('.ybtn01,.ybtn03,.ybtn04').attr('style','');} );
 $('.ybtn03').click(function () {$('.ybtn03').attr('style','background-color:#e88000');$('.ybtn02,.ybtn01,.ybtn04').attr('style','');} );
 $('.ybtn04').click(function () {$('.ybtn04').attr('style','background-color:#e88000');$('.ybtn02,.ybtn03,.ybtn01').attr('style','');} );

 
  
 $( "#nextpop" ).hide()
 $( ".onoff" ).hover(function() {$( "#nextpop" ).stop().slideDown();});
 $(".animated,.inbar").hover(function() {$( "#nextpop" ).stop().slideUp();});
 
 
  $( "#homego" ).click(function() {$("#page04" ).slideToggle( "fast", "linear" );  $('html,body').animate({scrollTop:$('#page03').offset().top-50}, 400);});

 $("#page02btn01").click(function() {$('#page02in02').hide();$('#page02in01').fadeIn();$('html,body').animate({scrollTop:$('#page01').offset().top-100}, 400);$('#page02').slideDown()});
 $("#page02btn02").click(function() {$('#page02in01').hide();$('#page02in02').fadeIn();$('html,body').animate({scrollTop:$('#page01').offset().top-100}, 400);$('#page02').slideDown();play()});


     
	
$(window).resize(function(){              
    x=$(window).width();        
      if (x<1000){
	$("#allmenu").hide()
       }
	if (x>1001 ){  
	$("#allmenu").show()
       }     
    }); 
	$(window).trigger("resize");
	
	
	
})



function play(){
	
	
setTimeout(function(){ch201();$("#hand01").stop().fadeIn();$("#hand02,#hand03").hide()}, 1000);	
	
setTimeout(function(){ch202();$("#hand02").stop().fadeIn();$("#hand01,#hand03").hide()}, 3000);
	
setTimeout(function(){ch203();$("#hand03").stop().fadeIn();$("#hand02,#hand01").hide()}, 5000);	
		
setTimeout(function(){ch201();$("#hand01,#hand02,#hand03").hide()}, 7000);
		
}


function anim0101(){$('#page02in02').hide();$('#page02in01').fadeIn();$('html,body').animate({scrollTop:$('#page01').offset().top-100}, 400);$('#page02').slideDown()}
function anim0102(){$('#page02in01').hide();$('#page02in02').fadeIn();$('html,body').animate({scrollTop:$('#page01').offset().top-100}, 400);$('#page02').slideDown();play()}

function onoff(){
	$("#allmenu").slideToggle( "fast", "linear" );

}

function qa01(){$('.qa01').hide();$('.qa02').show();$('#qashow').slideDown();$('html,body').animate({scrollTop:$('#page05').offset().top}, 400);}
function qa02(){$('.qa02').hide();$('.qa01').show();$('#qashow').slideUp()}

function ch201(){$('.ch202,.ch203').hide();$('.ch201').fadeIn();$('.goy01').attr('style','background-color:#e88000');$('.goy02,.goy03').attr('style','');}
function ch202(){$('.ch201,.ch203').hide();$('.ch202').fadeIn();$('.goy02').attr('style','background-color:#e88000');$('.goy01,.goy03').attr('style','');}
function ch203(){$('.ch202,.ch201').hide();$('.ch203').fadeIn();$('.goy03').attr('style','background-color:#e88000');$('.goy02,.goy01').attr('style','');}

function page02in01(){$('#page02in02').hide();$('#page02in01').fadeIn();}
function page02in02(){$('#page02in01').hide();$('#page02in02').fadeIn();}
<!--必要支出按鈕-->
function samp0101(){$('.samp00,.samp02,.sampin02,.sampin03,.sampin04').hide();$('.samp01,.sampin01').fadeIn();}
function samp0102(){$('.samp00,.samp02,.sampin01,.sampin03,.sampin04').hide();$('.samp01,.sampin02').fadeIn();}
function samp0103(){$('.samp00,.samp02,.sampin02,.sampin01,.sampin04').hide();$('.samp01,.sampin03').fadeIn();}
function samp0104(){$('.samp00,.samp02,.sampin02,.sampin03,.sampin01').hide();$('.samp01,.sampin04').fadeIn();}

function samp0201(){$('.samp00,.samp01,.sampin02,.sampin03,.sampin04').hide();$('.samp02,.sampin01').fadeIn();}
function samp0202(){$('.samp00,.samp01,.sampin01,.sampin03,.sampin04').hide();$('.samp02,.sampin02').fadeIn();}
function samp0203(){$('.samp00,.samp01,.sampin02,.sampin01,.sampin04').hide();$('.samp02,.sampin03').fadeIn();}
function samp0204(){$('.samp00,.samp01,.sampin02,.sampin03,.sampin01').hide();$('.samp02,.sampin04').fadeIn();}


function goin1go(){$('#ok01,.samp00').show();$('#ok02,.samp01,.samp02').hide();$('.ybtn01,.ybtn02,.ybtn03,.ybtn04').attr('style','');}
function goin2go(){$('#ok02,.samp00').show();$('#ok01,.samp01,.samp02').hide();$('.ybtn01,.ybtn02,.ybtn03,.ybtn04').attr('style','');}

function topbtn00(){$('html,body').animate({scrollTop:$('.slogn').offset().top-100}, 400)}
function topbtn01(){$('#page02in02').hide();$('#page02in01').fadeIn();$('html,body').animate({scrollTop:$('#page01').offset().top-100}, 400);$('#page02').slideDown()}

function topbtn02(){$('#page02in01').hide();$('#page02in02').fadeIn();$('html,body').animate({scrollTop:$('#page01').offset().top-100}, 400);$('#page02').slideDown()}

function topbtn03(){$("#page04" ).slideToggle( "fast", "linear" );  $('html,body').animate({scrollTop:$('#page03').offset().top-50}, 400);}