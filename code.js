$(document).ready(
    function () {
        //event handlers

        //other functions
    }
);

var toast = new Audio('toast.wav');

$('.code').on('click', function(e) {
    $('.code').data('seasoning', {
        first: 'Italian Seasoning',
        last: 2456
    });
    $('.code').data('shouyu', {
        first: 'Genen Shouyu',
        last: 2222
    });
    $('.code').data('shoggi', {
        first: 'Shoggi Shokolade',
        last: 3465
    });

    var value;

    switch ($('.code').index(this)) {
        case 0:
            value = $('.code').data('seasoning');
            break;
        case 1:
            value = $('.code').data('shouyu');
            break;
        case 2:
            value = $('.code').data('shoggi');
            break;
    }

    $('#product').text(value.first);
    $('#code').text(value.last);

    e.preventDefault();

    toast.pause();
    toast.currentTime = 0;
    toast.play();


    $('#toast').toast({ autohide: false }).toast('show');
});

$(document).on('keydown', function (event) {
    if(event.key == "Escape"){
        $('#toast').toast('hide');
    }
});
