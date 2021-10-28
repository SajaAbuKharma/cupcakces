$(document).ready(show_cupcakes);

var cup_cakes = [
    { "name": "Chocolate", "calories": "high", "weight": "200gm" },
    { "name": "Carrot", "calories": "medium", "weight": "150gm" },
    { "name": "Banana", "calories": "high", "weight": "200gm" },
    { "name": "Strawberry", "calories": "low", "weight": "160gm" },
    { "name": "Peanut", "calories": "medium", "weight": "200gm" }
];

var caloriesCheck;
function show_cupcakes() {
    //write code that shows the cupcakes in the table as per the instructions
    for (let index = 0; index < cup_cakes.length; index++) {
        caloriesCheck= (cup_cakes[index].calories=='high')? "red" : (cup_cakes[index].calories=='medium')? "orange" : "green";
       $('#cupcake-table').append(` <tr><td>${cup_cakes[index].name}</td><td style='color:white ; background-color:${caloriesCheck}'>${cup_cakes[index].calories}</td><td>${cup_cakes[index].weight}</td></tr>`);
        
    }

}



 let boolvalidate ;


function validate() {
    boolvalidate="";
    //write code that validates the form
    // customer 
    if (!($('#customerNameInput').val().length >= 5 && $('#customerNameInput').val().length <= 16)) {
        boolvalidate += "false";
        document.getElementById('customerHelp').innerText = "the name must me between 5 - 16, idc if your name is mai";
        document.getElementById('customerHelp').style.color = 'red';
        $('#customerNameInput').css({ "border": "2px solid red" });

    } else {
        boolvalidate += "true";
        document.getElementById('customerHelp').innerText = "You're good to go";
        document.getElementById('customerHelp').style.color = 'green';
        $('#customerNameInput').css({ "border": "2px solid green" });
    }
    //Count 

    if (!($('#countInput').val() > 0 && $('#countInput').val() <= 15)) {
        boolvalidate += "false";
        document.getElementById('countInput').innerText = "You can't go more than 15 faty";
        document.getElementById('countInput').style.color = 'red';
        $('#countInput').css({ "border": "2px solid red" });

    } else {
        boolvalidate += "true";
        document.getElementById('countInput').innerText = "You're good to go";
        document.getElementById('countInput').style.color = 'green';
        $('#countInput').css({ "border": "2px solid green" });
    }
    // check  type

    if (($('#selectTypeInput').val() == 'none')) {
        boolvalidate += "false";
        $('#selectTypeInput').css({ "border": "2px solid red" });

    } else {
        boolvalidate += "true";
        $('#selectTypeInput').css({ "border": "2px solid green" });
    }
    // Delivery Check   
 
    if (($('#selectDeliveryInput').val() == 'none')) {
        boolvalidate += "false";
        $('#selectDeliveryInput').css({ "border": "2px solid red" });

    } else {
        boolvalidate += "true";
        $('#selectDeliveryInput').css({ "border": "2px solid green" });
    }
    // selectAllergiesInput chcek 

    if($('#selectTypeInput').val() == 'choco' && ($('#selectAllergiesInput').val() == 'dairy')){
        $('#selectAllergiesInput').css({ "border": "2px solid red" });
        $('#selectAllergiesHelp').css({ "color": "red" });
        boolvalidate+="false";
        document.getElementById('selectAllergiesHelp').innerText="The choco has dairy sry for that !";
    }else if($('#selectTypeInput').val() == 'pecan' && ($('#selectAllergiesInput').val() == 'nut')){
        $('#selectAllergiesInput').css({ "border": "2px solid red" });
        $('#selectAllergiesHelp').css({ "color": "red" });
        document.getElementById('selectAllergiesHelp').innerText="The pecan has nut sry for that !";
        boolvalidate+="false";
       }else {
        $('#selectAllergiesInput').css({ "border": "2px solid green" });
        document.getElementById('selectAllergiesHelp').innerText="That's better ";
        $('#selectAllergiesHelp').css({ "color": "green" });
        boolvalidate+="true";
    }

    if($('#selectTypeInput').val() == 'choco' && ($('#selectDeliveryInput').val() == 't4')){
        $('#selectDeliveryInput').css({ "border": "2px solid red" });
        document.getElementById('DeliveryHelp').style.color = 'red';
        document.getElementById('DeliveryHelp').innerText=" We can't deliver choco at 4";
        boolvalidate+="false";

    }else {$('#selectDeliveryInput').css({ "border": "2px solid green" });
    document.getElementById('DeliveryHelp').style.color = 'green';
    document.getElementById('DeliveryHelp').innerText=" Good";
    boolvalidate+="true";
}

if(((boolvalidate.includes("false"))? false : true)){
    sessionStorage.setItem('user',$('#customerNameInput').val());
    
}
    return (boolvalidate.includes("true"))? false : true;

}

function show_storage() {
    //write code that shows the name from local storage
    document.getElementById('welcome').innerText    = "Welcome "+sessionStorage.getItem('user');
   
}