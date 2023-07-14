// Mobile products menu Function
$('.cat_link .product_link_arrow').on('click', function() {
    $('.cat_open').slideToggle();
    $(this).toggleClass('active');
    $(this).parent().toggleClass('active');
});
// Mobile products sub menu Function
$('.sub_menu').click(function () { 
    var $ul = $(this).siblings('ul');
    $('.active1').removeClass('active1');   
    $(this).addClass('active1');
    $(this).parent().toggleClass('active1');
    if ($ul.length > 0) {
        $ul.slideToggle(600);
        $(".sub_menu_drop").not($ul).slideUp(400);
        return false;
    }
});
//////////// Product Slider
$('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
    ]
});





















