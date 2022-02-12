if (window.innerWidth <= 1024) {
    $('.hamburguer').addClass('h-mobile')
}

$(document).on('click', function (evt) {
    if (window.innerWidth <= 1024) {
        $('.hamburguer').addClass('h-mobile')
    } else {
        $('.hamburguer').removeClass('h-mobile')
    }

    $('.hamburguer').toggleClass('open')

    if ($('.hamburguer').hasClass('open') && $('.hamburguer').hasClass('h-mobile')) {
        $('.hamburguer .img-h-btn').attr('src', 'svgs/icon_close_hamburguer.svg')
        $('.hamburguer .img-h-btn').addClass('close')
    } else {
        $('.hamburguer .img-h-btn').attr('src', 'svgs/icon_hamburguer.svg')
        $('.hamburguer .img-h-btn').removeClass('close')
    }

    if ($(evt.target).closest('.hamburguer').length == 0) {
        $('.menu-hamburguer').hide(500)
        return
    }
    if (evt.target.tagName === "IMG") {
        $('.menu-hamburguer').toggle(500)
    }
})

$(document).on('click', '.product-info .buy-btn', function (evt) {
    evt.preventDefault()
    $(this).addClass('bought')
    $(this.firstElementChild).text('COMPRADO!')
    const valorAtual = $('#total-quantity-cart').text() * 1
    $('#total-quantity-cart').html(valorAtual + 1)
    $('.shop-popup').show(500)
})

$(document).on('click', '.shop-popup .close-btn', function (evt) {
    evt.preventDefault()
    $('.shop-popup').hide(500)
})

$(document).on('click', '.shop-popup', function (evt) {
    evt.preventDefault()
    if ($(evt.target).hasClass('shop-popup')) {
        $('.shop-popup').hide(500)
    }
})

const prev = '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="27" viewBox="0 0 15 27" fill="none"><path d="M13.3575 0L0.786 12.5715L0 13.3935L0.786 14.2155L13.3575 26.787L15.0075 25.137L3.249 13.3935L14.9985 1.644L13.3575 0Z" fill="black"/></svg>'
const next = '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="27" viewBox="0 0 15 27" fill="none"><path d="M1.64414 0L-0.00585938 1.65L11.7436 13.3995L-0.00585938 25.149L1.64414 26.799L14.2156 14.2275L15.0016 13.4055L14.2156 12.5835L1.64414 0Z" fill="black"/></svg>'

$('.shelf-products').slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button>' + prev + '</button>',
    nextArrow: '<button>' + next + '</button>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.banner-slider').slick({
    dots: false,
    autoplay:true,
    autoplaySpeed: 3000,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
});

setInterval(function(){
    const text = $('.banner-slider .slick-current .banner-info h1').text()
    const current = $('.banner-slider .slick-current').data('slick-index')*1 + 1
    $('.blue-bar .light-blue .title').html(text)
    $('#number-change').html(current)
}, 100)

$(document).on('click', '#arrow-left', function () {
    $('.banner-slider').slick('slickNext')
}) 

$(document).on('click', '#arrow-right', function () {
    $('.banner-slider').slick('slickPrev')
}) 

$(document).on('scroll', function(){
    if (window.pageYOffset > 100) {
        $('header').css('background', '#191816')
    } else {
        $('header').css('background', 'transparent')
    }
})