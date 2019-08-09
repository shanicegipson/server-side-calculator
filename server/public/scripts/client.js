$(document).ready(onReady);

function onReady() {
    console.log ('Hey Girl!');

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