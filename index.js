
const root = document.querySelector("#root");
const input = document.querySelector("#input");
const submitBtn = document.querySelector("#submit");
const textLabel = document.querySelector("#textLabel");
const resetBtn = document.querySelector("#reset");
const rollAllBtn = document.querySelector("#rollAll");



submitBtn.addEventListener("click", ()=>{

    root.innerHTML = "";
    let number = input.value;

    if(isNaN(number)){
        textLabel.innerText = "You must enter a number!";
        textLabel.style.backgroundColor = "red";
    }
    if(number>20){
        textLabel.innerText = "let's keep it to no more then 20, ok?"
        textLabel.style.backgroundColor = "yellow"
    }
    if(number<=20 && !isNaN(number)){
        creatDice(number)
        textLabel.innerText = `making ${number} dices for you!`;
        textLabel.style.backgroundColor = "green";
    }
})

function creatDice(input){
    for(let i=1; i<=input; i++){
        formDice()
    }
}

function formDice(){

    let diceBox = document.createElement("div");
    let sidesInput = document.createElement("input");
    let inputBtn = document.createElement("button")
    let diceDisplay = document.createElement("h3");

    diceBox.className = "diceBox"
    diceBox.style.width = 

    sidesInput.placeholder = "how many sides?";
    inputBtn.innerText = "SUBMIT";
    diceDisplay.innerText = 0;
    
    diceBox.appendChild(diceDisplay);
    diceBox.appendChild(inputBtn);
    diceBox.appendChild(sidesInput);
    root.appendChild(diceBox);
    
    inputBtn.addEventListener("click", ()=>{
        let input= sidesInput.value;
        
        if(isNaN(input)){
            diceDisplay.innerText = "Only numbers please!";
        }
        else{
            let result = Math.floor(Math.random() * input) + 1;
            diceDisplay.innerText = result;
            inputBtn.innerText = "ROLL"
        }
        }
    )
}

resetBtn.addEventListener("click", ()=>{
    root.innerHTML = ""
    textLabel.innerText = "you reseted the board"
    textLabel.style.backgroundColor = "orange"
})

rollAllBtn.addEventListener("click", ()=>{
    
})



