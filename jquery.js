$(document).ready(function(){
        
    $('.move').mouseenter(function(){
        $('.ts').show('slow',function () {
            $('p.p1').slideUp(2000).slideLeft(2000);
        });

    });


});