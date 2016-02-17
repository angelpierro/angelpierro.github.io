$(document).ready(function() {
    $('div')
    .on('mouseover', 'a', function() {
        $(this).animate({
          'font-size':$(this).attr('highsize')
        }, 200);
    })
    .on('mouseleave', 'a', function() {
        $(this).animate({
          'font-size':$(this).attr('lowsize')
        }, 200);
    });
});