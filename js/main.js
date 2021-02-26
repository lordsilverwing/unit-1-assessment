//set up global variable
let total;
//cache elements
const totalValue = document.getElementById("total")
let input = document.getElementById("number")
document.getElementById("decrease").addEventListener("click", decreaseTotal)
document.getElementById("increase").addEventListener("click", increaseTotal)

// set up init
init()
function init(){
    total = 0;
    render();
}
//set up render
function render(){
    totalValue.innerText = total;
}
// set up NaN function return number from string
function inputIsNumber(){
    const number = input.value
    if(isNaN(number) === true){
       totalValue.style.color = 'black';
        return NaN;
    } else {
        return Number(number);
    }
}
//set up increase function
function increaseTotal(){
    total += inputIsNumber();
    if (total >= 0){
        totalValue.style.color = 'black';
    }
    render();
}
//set up decrease function
function decreaseTotal(){
    total -= inputIsNumber();
    if (total < 0){
        totalValue.style.color = 'red';
    }
    render();
}