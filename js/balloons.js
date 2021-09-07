let animate = 'animate__';

let text = ['bounce', 'flash', 'pulse', 'rubberBand',
            'shakeX', 'shakeY', 'headShake', 'swing',
            'tada', 'wobble', 'jello', 'heartBeat'];

$(document).ready(
    function () {
        //event handlers
        var random = text[Math.floor(Math.random()*text.length)];

        $('#happyBirthday').addClass(animate + random);
        //other functions
    }
);

$('#birthday').pickadate({ format: 'mmmm, d' });

$('.form-check-input').each(function () {
    $(this).prop('checked', false);
});
// event listener for check/uncheck
$('.form-check-input').on('change', function () {
    // make the image visible
    $('#' + this.id + 'Img').css('visibility', 'visible')
    // animate balloon in/out based on checkbox
    $(this).is(':checked') ?
        $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
        $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
});

$('#submit').on('click', function (event) {
    event.preventDefault();

    if($('#blue').prop('checked') == false &&
        $('#red').prop('checked') == false &&
        $('#green').prop('checked') == false){
        $('#toast').toast({ autohide: false }).toast('show');
    }
});

$(document).on('keydown', function (event) {
    if(event.key == "Escape"){
        $('#toast').toast('hide');
    }
});

$('#checkAll').on('click', function (event) {
    event.preventDefault();

    if($('#blue').prop('checked') == false ||
        $('#red').prop('checked') == false ||
        $('#green').prop('checked') == false){
        $('.card-body input[type = checkbox]').prop('checked', true);
    }

    else if($('#blue').prop('checked') == true &&
        $('#red').prop('checked') == true &&
        $('#green').prop('checked') == true){
        $('.card-body input[type = checkbox]').prop('checked', false);
    }
});

$('.form-check-label').mouseover(function () {
    $('.form-check-label').data('red', {
        first: 'red'
    });
    $('.form-check-label').data('green', {
        first: 'green'
    });
    $('.form-check-label').data('blue', {
        first: 'blue'

    });

    var color;

    switch ($('.form-check-label').index(this)) {
        case 0:
            color = $('.form-check-label').data('red');
            break;
        case 1:
            color = $('.form-check-label').data('green');
            break;
        case 2:
            color = $('.form-check-label').data('blue');
            break;
    }

    $('#happyBirthday').css('color', color.first);
})
