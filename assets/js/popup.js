'@import https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js'
'@import //yandex.st/jquery/cookie/1.0/jquery.cookie.min.js'


jQuery(function () {

    var wrap3 = $('#warning-win'),
        modal3 = $('.cover-warning, .win-warning-content');
    if ($.cookie('was')) {
        modal3.fadeIn();
    }
    $('#b_yes').click(function () {
        $.cookie('was', true, {
            expires: 7,
            path: '/'
        });
        $(modal3).fadeOut();
    });


});
