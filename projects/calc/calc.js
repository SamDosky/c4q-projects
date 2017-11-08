var outputDiv;

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var operators = ['+', '-', '*', '/'];
var operations = ['add', 'sub', 'mul', 'div'];



/**
 * @function calculate
 * @param  {string} mathExp {the expression to calculate}
 * @return {number} {the result of the calculation or NaN if it couldn't be done}
 */

function calculate(mathExp) {
    try {
        return eval(mathExp);
    } catch (e) {
        return NaN
    }
}


/* 
function setMemory(value) {
    window.localStorage.setItem('memory', value)
    var memoryDiv = document.getElementById('memory')
    if(value){
        memoryDiv.classList.remove('hidden')
    } else {
        memoryDiv.classList.add('hidden')
    }
}


*/



//var isResultShown = false;

document.addEventListener('DOMContentLoaded', function () {
    outputDiv = document.getElementById('output');
    //memoryDiv= document.getElementById('memory');
    //setMemory(window.localStorage.getItem('memory'))
    //calculator = document.getElementById('calc');
    var doWeHaveAnOperator = false

    document.addEventListener('click', function (event) {
        var elementId = event.target.id;

        // logging the element id for debug purposes

        console.log(elementId)
        switch (elementId) {
            case 'clr':
                outputDiv.innerText = '';
                break;

            case 'bksp':
                //replace the string without the last character
                var newStr = outputDiv.innerText.slice(0, -1);
                outputDiv.innerText = newStr;
                break;

            case 'eq':
                var result = calculate(outputDiv.innerText)
                outputDiv.innerText = result;
                break;

            case 'add':
            case 'sub':
            case 'mul':
            case 'div':
            case 'pct':
                if (!doWeHaveAnOperator) {
                    console.log("last" + outputDiv.innerText.slice(-1));
                    outputDiv.innerText += document.getElementById(elementId).innerText
                    doWeHaveAnOperator = true;
                }
                break;

            default:
                outputDiv.innerText += document.getElementById(elementId).innerText;
                doWeHaveAnOperator = false;
                break;
        }

    })
})

/*

else if(elementId === 'ms'){
    window.localStorage.setItem('memory', outputDiv.innerText)
}else if (elementId === 'mr') {
    window.localStorage.getItem('memory')
    isResultshown = true;
} else if (elementId === 'mp') {

}



function setMemory(value) {
    window.localStorage.setItem('memory', value)
}
*/