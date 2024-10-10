$(window).scroll(function() {
    var $window = $(window);
    var $body = $('body');
    var $panel = $('.panel');

    var scroll = $window.scrollTop() + ($window.height() / 2);
    $panel.each(function () {
        var $this = $(this);

        if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
            $body.removeClass(function (index, css) {
                return (css.match (/(^|\s)color-\S+/g) || []).join('');
            });

            $body.addClass('color-' + $(this).data('color'));
            
        }
    })
}).scroll();

$(document).ready(function () {
    $('#navbarTogglerDemo03').on('shown.bs.collapse', function () {
        $('.navbar').css('background-color', '#333'); 
        $('.navbar .nav-link').css('color', '#fff');  
    });

    $('#navbarTogglerDemo03').on('hidden.bs.collapse', function () {
        $('.navbar').css('background-color', ''); 
        $('.navbar .nav-link').css('color', '');  
    });
});