let result = document.getElementById("result");
let list = document.getElementById("itemList");
let btn_add = document.getElementById("add");
let btn_sub = document.getElementById("sub");
let btn_multi = document.getElementById("multi");
let btn_division = document.getElementById("division")

btn_add.addEventListener("click", function(e){
    e.preventDefault()
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    let value1 = parseInt(num1.value);
    let value2 = parseInt(num2.value);
    let sum = value1+value2;
    console.log(sum);
    result.value=sum;
})
btn_sub.addEventListener("click", function(e){
    e.preventDefault()
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    let value1 = parseInt(num1.value);
    let value2 = parseInt(num2.value);
    let subt = value1-value2;
    result.value=subt; 
})
btn_multi.addEventListener("click", function(e){
    e.preventDefault();
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    let value1 = parseInt(num1.value);
    let value2 = parseInt(num2.value);
    let multi = value1*value2;
    result.value=multi; 
})
btn_division.addEventListener("click", function(e){
    e.preventDefault();
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    let value1 = parseInt(num1.value);
    let value2 = parseInt(num2.value);
    let div = value1/value2;
    result.value=div; 
})