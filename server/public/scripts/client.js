// userInputs = {
//     valueOne: null,
//     mathOperator = null,
//     valueTwo = null,
// };


$(document).ready(onReady);

function onReady() {

    $('.js-btn-math').on('click', doMath);
    $('.js-btn-submit').on('click', submitEquation);
    // $('#js-btn-submit').hide();

    getData();
}

function getData() {
    $.ajax({
        type:'GET',
        url: '/math',
    }).then((response) => {
         console.log(response);
    }); 
}

function doMath() {
    const valueOne = parseInt($(".js-first-math-input").val());
    const mathOperator = $(this).data('math');
    const valueTwo = parseInt($(".js-second-math-input").val());

    const dataForServer = {
        value1: valueOne,
        operation: mathOperator,
        value2: valueTwo,
    };

    postData();
    
};

function postData(){ 
    console.log(dataForServer)

    $.ajax({
        type:'POST',
        url: '/math',
        data: dataForServer
    }).then((response) => {
        console.log(response);
    });
}

function submitEquation(){
    console.log('Submit works!');
}