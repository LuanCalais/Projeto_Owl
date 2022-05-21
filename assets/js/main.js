$(function () {
    ScrollReveal().reveal('.img-section', { delay: 500, easing: 'ease-in' });
    ScrollReveal().reveal('.text-section', { delay: 1000, easing: 'ease-in' });

    $('#altera-form').on('click', function(){
        $('.flip-container').toggleClass('cadastro-card');
    })

})