const enterValue=(val)=>{
    document.getElementById('userInput').value += val
}

const reset=()=>{
    document.getElementById('userInput').value='';
}

const calculate=()=>{
var input = document.getElementById('userInput').value;
var result;
try {
    result = eval(input);
} catch (error) {
    result = input;
}
document.getElementById('userInput').value = result;
}

const delFunc=()=>{
    var str=document.getElementById('userInput').value;
    document.getElementById('userInput').value=str.slice(0,-1);
}