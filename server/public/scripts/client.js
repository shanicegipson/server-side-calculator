$(document).ready(onReady);

function onReady() {
    console.log ('Hey Girl!');

    $('.js-btn-math').on('click', doMath);
    $('#js-btn-submit').on('click', submitUser);
    $('#js-btn-submit').hide();

    getDemo();
}

function getDemo() {
    $.ajax({
        type:'GET',
        url: '/demo',
    }).then((response) => {
         console.log(response);
    }); 
}

function doMath() {
    userInfo.math = $(this).data('color')
}