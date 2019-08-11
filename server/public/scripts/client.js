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
    const numberOne = parseInt($(".js-first-math-input").val());
    const numberTwo = parseInt($(".js-second-math-input").val());
    const mathOperator = $(this).data('math');
    

    const dataForServer = {
        number1: numberOne,
        number2: numberTwo,
        operation: mathOperator,
        
    };
    console.log('Information being sent to server', dataForServer);

    postData();
    
};

function postData(dataForServer){ 
    
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