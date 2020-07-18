$(document).ready(function(){
    $('.sidenav').sidenav();
    $("#space-holder").height($('nav').height());
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {
        'onOpenEnd': initCarouselModal
    });

    function initCarouselModal() {
        $('.carousel').carousel();
    }
});