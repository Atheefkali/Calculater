console.log("script work")

const display =document.getElementById('display')

function appendNumber(input){
    display.value += input;

}

// function setoparation(getanswer){

// }

function clearDispaly(celar){
    display.value ="";
}
function CalculatResult(Calculate){
    try{
        display.value =eval(display.value)
    }
    catch(error){
        display.value = "ERROR"
    }

}
