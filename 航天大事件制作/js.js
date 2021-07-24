/**
 * Created by 15502037879 on 2021/4/19.
 */
$('#slogan1').addClass('show');

var slogan2_y = $('#slogan2').offset().top;
var buffer = 200;


var slogan3_y = $('#slogan3').offset().top;
var slogan4_y = $('#slogan4').offset().top;
var slogan5_y = $('#slogan5').offset().top;


var windowHeight = $(window).height();

$(window).scroll(function(){
    pos = $(window).scrollTop();
    if(pos > slogan2_y-buffer){
        $('#slogan2 > h1').addClass('scrolled');
        $('#slogan2 > p').addClass('scrolled');
    }
    if(pos < slogan2_y - windowHeight + buffer){
        $('#slogan2 > h1').removeClass('scrolled');
        $('#slogan2 > p').removeClass('scrolled');
    }


    if(pos > slogan3_y - buffer){
        $('#slogan3 > h1').addClass('scrolled');
        $('#slogan3 > p').addClass('scrolled');
        $('#slogan3 > img').addClass('scrolled');
    }
    if(pos < slogan3_y - windowHeight + buffer){
        $('#slogan3 > h1').removeClass('scrolled');
        $('#slogan3 > p').removeClass('scrolled');
        $('#slogan3 > img').removeClass('scrolled');
    }

    if(pos > slogan4_y - buffer){
        $('#slogan4 > h1').addClass('scrolled');
        $('#slogan4 > p').addClass('scrolled');
        $('#slogan4 > img').addClass('scrolled');
    }
    if(pos < slogan4_y - windowHeight + buffer){
        $('#slogan4 > h1').removeClass('scrolled');
        $('#slogan4 > p').removeClass('scrolled');
        $('#slogan4 > img').removeClass('scrolled');
    }

    if(pos > slogan5_y - buffer){
        $('#slogan5 > h1').addClass('scrolled');
        $('#slogan5 > p').addClass('scrolled');
    }
    if(pos < slogan5_y - windowHeight + buffer){
        $('#slogan5 > h1').removeClass('scrolled');
        $('#slogan5 > p').removeClass('scrolled');
    }

});

