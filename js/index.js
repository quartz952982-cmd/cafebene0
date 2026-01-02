$(function(){
    let pageof = $('nav').offset().top
    $(window).scroll(function(){
        console.log($(window).scrollTop())
        if($(window).scrollTop() >= 50){
            $('nav').addClass('on')
        }else{
            $('nav').removeClass('on')
        }
    })

    $(window).scroll(function(){
        if($(window).scrollTop() >=300){
            $('.gotop').fadeIn()
        }else{
            $('.gotop').fadeOut()
        }
    })
    $('.gotop').click(function(e){
        e.preventDefault()
        $('html, body').animate({
            scrollTop : 0
        },700)
    })
})


