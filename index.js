const num1 = Math.ceil(100* Math.random()); //Random number between 1 & 100
const num2 = Math.ceil(100* Math.random());
const operation = Math.ceil(3*Math.random());

const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEL = document.getElementById("score");



let score = JSON.parse(localStorage.getItem("score"));
if(!score || score < 0){
    score = 0; 
}


let correctAns;
let operator;
if(operation == 1){
    operator = "add"
    correctAns = num1+num2;
}else if(operation == 2){
    operator = "multiply"
    correctAns = num1*num2
}else if(operation == 3){
    operator = "subtract"
    correctAns = num1-num2;
}else{
    operator = "multiply"
    correctAns = num1*num2;
}


scoreEL.innerText = `score ${score}`
questionEl.innerText = `What is ${num1} ${operator} by ${num2}`;


formEl.addEventListener("submit",()=>{
    
    
    const userAns =+ inputEl.value
   // console.log(userAns,typeof userAns);
   if(userAns === correctAns){
    score++;
    updateLocalS()
   }else{
    score--;
    updateLocalS()
   }


});

function updateLocalS() {
    localStorage.setItem("score",JSON.stringify(score));
}

