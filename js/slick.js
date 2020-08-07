$('.slide').slick({
});
$('.sliderFormacion').slick({
centerMode: true,
centerPadding: '60px',
slidesToShow: 3,
responsive: [
    {
    breakpoint: 768,
    settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
    }
    },
    {
    breakpoint: 480,
    settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
    }
    }
]
});
$('#send').on('click', function(){
    $('#name').val('');
    $('#email').val('');
    $('#message').val('');
});