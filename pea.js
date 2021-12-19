let mainBox = document.getElementById("mainBox");
let calculator = document.getElementById("calculator");
calculator.addEventListener("click",()=>{
    mainBox.innerHTML = "";
})

let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');

let result = document.getElementById('result');

let afterResult = document.getElementById('afterResult');

let history1 = document.getElementById('history1');
let history2 = document.getElementById('history2');

let value1 = 0;
let value2 = 0;

let allow = 0;
let allow2 = 0;

let final = 0;

function preOp2(){ 
    if(input1.value.length > 0 && input2.value.length > 0){
        try {
            
            value1 = BigInt(input1.value);
            value2 = BigInt(input2.value);
            allow = 1; 

        } catch (error) {
            value1 = parseFloat(input1.value);
            value2 = parseFloat(input2.value);
            allow = 1;
            allow2 = 1;
        } 
    }
}

function preOp1(){
    if(input1.value.length > 0 ){
        try {
            
            value1 = BigInt(input1.value);
            allow = 1; 

        } catch (error) {
            value1 = parseFloat(input1.value);
            allow = 1;
            allow2 = 1;
        } 
    }
}


function insertOutput(){
    input1.value = final;
    input2.value = "";
    result.innerText = "";
    afterResult.innerHTML = `
    <button type="button" class="btn btn-light" onclick="clearAll()">Clear All</button>
    `;
}

function clearAll(){
    input1.value = "";
    input2.value = "";
    result.innerText = "";
    afterResult.innerHTML = "";
    history1.innerHTML = "";
}

function Add(){

    preOp2();
    if(allow == 1){
        final = value1+value2;
        result.innerText = `Add is : ${final}`;
        afterResult.innerHTML = `
        <button type="button" class="btn btn-light" onclick="insertOutput()">Insert Output in Input 1</button>
        <button type="button" class="btn btn-light" onclick="clearAll()">Clear All</button>
        `;
        history1.innerHTML += `<div style="overflow-x: scroll; width: 85vw;">${value1} + ${value2} = ${final}</div> <hr>`;
        history2.innerHTML += `<div style="overflow-x: scroll; width: 85vw;">${value1} + ${value2} = ${final}</div> <hr>`;
    }
    else{
        result.innerText = `Insert both the values in input 1 and input 2`;
    }

    allow = 0;
    allow2 = 0;

}

function Sub(){

    preOp2();
    if(allow == 1){
        final = value1-value2;
        result.innerText = `Sub is : ${final}`;
        afterResult.innerHTML = `
        <button type="button" class="btn btn-light" onclick="insertOutput()">Insert Output in Input 1</button>
        <button type="button" class="btn btn-light" onclick="clearAll()">Clear All</button>
        `;
        history1.innerHTML += `<div style="overflow-x: scroll; width: 85vw;">${value1} - ${value2} = ${final}</div> <hr>`;
        history2.innerHTML += `<div style="overflow-x: scroll; width: 85vw;">${value1} - ${value2} = ${final}</div> <hr>`;
    }
    else{
        result.innerText = `Insert both the values in input 1 and input 2`;
    }

    allow = 0;
    allow2 = 0;

}

function Mul(){

    preOp2();
    if(allow == 1){
        final = value1*value2;
        result.innerText = `Mul is : ${final}`;
        afterResult.innerHTML = `
        <button type="button" class="btn btn-light" onclick="insertOutput()">Insert Output in Input 1</button>
        <button type="button" class="btn btn-light" onclick="clearAll()">Clear All</button>
        `;
        history1.innerHTML += `<div style="overflow-x: scroll; width: 85vw;">${value1} X ${value2} = ${final}</div> <hr>`;
        history2.innerHTML += `<div style="overflow-x: scroll; width: 85vw;">${value1} X ${value2} = ${final}</div> <hr>`;
    }
    else{
        result.innerText = `Insert both the values in input 1 and input 2`;
    }

    allow = 0;
    allow2 = 0;

}

function Div(){

    preOp2();
    if(allow == 1 && value2 != 0){
        final = parseFloat(value1)/parseFloat(value2);
        result.innerText = `Div is : ${final}`;
        afterResult.innerHTML = `
        <button type="button" class="btn btn-light" onclick="insertOutput()">Insert Output in Input 1</button>
        <button type="button" class="btn btn-light" onclick="clearAll()">Clear All</button>
        `;
        history1.innerHTML += `<div style="overflow-x: scroll; width: 85vw;">${value1} / ${value2} = ${final}</div> <hr>`;
        history2.innerHTML += `<div style="overflow-x: scroll; width: 85vw;">${value1} / ${value2} = ${final}</div> <hr>`;
    }
    else{
        result.innerText = `Insert both the non zero values in input 1 and input 2`;
    }

    allow = 0;
    allow2 = 0;

}

function Mod(){

    preOp2();
    if(allow == 1 && value2 != 0){
        final = value1%value2;
        result.innerText = `Mod is : ${final}`;
        afterResult.innerHTML = `
        <button type="button" class="btn btn-light" onclick="insertOutput()">Insert Output in Input 1</button>
        <button type="button" class="btn btn-light" onclick="clearAll()">Clear All</button>
        `;
        history1.innerHTML += `<div style="overflow-x: scroll; width: 85vw;">${value1} % ${value2} = ${final}</div> <hr>`;
        history2.innerHTML += `<div style="overflow-x: scroll; width: 85vw;">${value1} % ${value2} = ${final}</div> <hr>`;
    }
    else{
        result.innerText = `Insert both the non zero  values in input 1 and input 2`;
    }

    allow = 0;
    allow2 = 0;

}

function Fact(){

    preOp1();
    if(allow == 1 && allow2 != 1){
        let temp = BigInt(1);
        for(let i = value1; i > 0; i--){
            temp = BigInt(temp*i);
        }
        final = BigInt(temp);
        result.innerText = `Fact of value 1 is : ${final}`;
        afterResult.innerHTML = `
        <button type="button" class="btn btn-light" onclick="insertOutput()">Insert Output in Input 1</button>
        <button type="button" class="btn btn-light" onclick="clearAll()">Clear All</button>
        `;
        history1.innerHTML += `<div style="overflow-x: scroll; width: 85vw;">! ${value1} = ${final}</div> <hr>`;
        history2.innerHTML += `<div style="overflow-x: scroll; width: 85vw;">! ${value1} = ${final}</div> <hr>`;
    }
    else if(allow2 == 1){
        let temp = (1);
        for(let i = value1; i > 0; i--){
            temp = (temp*i);
        }
        final = (temp);
        result.innerText = `Fact of value 1 is : ${final}`;
        afterResult.innerHTML = `
        <button type="button" class="btn btn-light" onclick="insertOutput()">Insert Output in Input 1</button>
        <button type="button" class="btn btn-light" onclick="clearAll()">Clear All</button>
        `;
        history1.innerHTML += `<div style="overflow-x: scroll; width: 85vw;">! ${value1} = ${final}</div> <hr>`;
        history2.innerHTML += `<div style="overflow-x: scroll; width: 85vw;">! ${value1} = ${final}</div> <hr>`;
    

    }
    else{
        result.innerText = `Insert both the values in input 1 and input 2`;
    }

    allow = 0;
    allow2 = 0;

}

function Log(){

    preOp1();
    if(allow == 1){
        final = Math.log10(parseInt(value1));
        result.innerText = `Log of value 1 is : ${final}`;
        afterResult.innerHTML = `
        <button type="button" class="btn btn-light" onclick="insertOutput()">Insert Output in Input 1</button>
        <button type="button" class="btn btn-light" onclick="clearAll()">Clear All</button>
        `;
        history1.innerHTML += `<div style="overflow-x: scroll; width: 85vw;">ln ${value1} = ${final}</div> <hr>`;
        history2.innerHTML += `<div style="overflow-x: scroll; width: 85vw;">ln ${value1} = ${final}</div> <hr>`;
    }
    else{
        result.innerText = `Insert both the values in input 1 and input 2`;
    }

    allow = 0;
    allow2 = 0;

}

function Exp(){

    preOp2(); console.log(allow2)
    if(allow == 1 && allow2 != 1){
        let temp = BigInt(value1);
        for(let i = 1; i < value2; i++){
            temp = BigInt(temp*value1)
        }
        if(value2 == 0){
            temp = BigInt(1);
        }
        final = BigInt(temp);
        result.innerText = `Exp is : ${final}`;
        afterResult.innerHTML = `
        <button type="button" class="btn btn-light" onclick="insertOutput()">Insert Output in Input 1</button>
        <button type="button" class="btn btn-light" onclick="clearAll()">Clear All</button>
        `;
        history1.innerHTML += `<div style="overflow-x: scroll; width: 85vw;">${value1} ^ ${value2} = ${final}</div> <hr>`;
        history2.innerHTML += `<div style="overflow-x: scroll; width: 85vw;">${value1} ^ ${value2} = ${final}</div> <hr>`;
    }
    else if(allow2  == 1){
        let temp = (value1);
        for(let i = 1; i < value2; i++){
            temp = (temp*value1)
        }
        final = (temp);
        result.innerText = `Exp is : ${final}`;
        afterResult.innerHTML = `
        <button type="button" class="btn btn-light" onclick="insertOutput()">Insert Output in Input 1</button>
        <button type="button" class="btn btn-light" onclick="clearAll()">Clear All</button>
        `;
        history1.innerHTML += `<div style="overflow-x: scroll; width: 85vw;">${value1} ^ ${value2} = ${final}</div> <hr>`;
        history2.innerHTML += `<div style="overflow-x: scroll; width: 85vw;">${value1} ^ ${value2} = ${final}</div> <hr>`;
    }
    else{
        result.innerText = `Insert both the values in input 1 and input 2`;
    }

    allow = 0;
    allow2 = 0;

}