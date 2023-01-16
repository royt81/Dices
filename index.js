

let root = document.querySelector("#root");
let input = document.querySelector("#input");
let submitBtn = document.querySelector("#submit");
let textLabel = document.querySelector("#textLabel");

submitBtn.addEventListener("click", ()=>{
    let number = input.value
    console.log(number.value)
    if(isNaN(number)){
        textLabel.innerText = "You must enter a number!"
    }
    else{
        creatDice(number)
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
    let diceDisplay = document.createElement("h2");

    diceBox.style.width = "200px";
    diceBox.style.height = "200px";
    sidesInput.placeholder = "how many sides?";
    inputBtn.innerText = "SUBMIT";
    diceDisplay.innerText = 0;
    
    diceBox.appendChild(diceDisplay);
    diceBox.appendChild(inputBtn);
    diceBox.appendChild(sidesInput);
    root.appendChild(diceBox);
    
    inputBtn.addEventListener("click", ()=>{
        let input= sidesInput.value;
        let result = Math.floor(Math.random() * input) + 1;
        diceDisplay.innerText = result;
        inputBtn.innerText = "ROLL"
        }
    )
}






