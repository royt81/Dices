
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
    }
    else if(number>25){
        textLabel.innerText = "let's keep it to no more then 25, ok?"
    }
    else if(number == 0){
        textLabel.innerText = "you can do better"
    }
    else{
        creatDice(number)
        textLabel.innerText = `making ${number} dices for you!`;
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
    let brake = document.createElement("br");
    
    diceBox.className = "diceBox"
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    diceBox.style.backgroundColor = "#" + randomColor;
    sidesInput.placeholder = "# of sides?";
    sidesInput.defaultValue = "6";
    sidesInput.id = "sideInput";
    inputBtn.innerText = "SUBMIT";
    inputBtn.id = "diceInputBtn";
    diceDisplay.innerText = 0;

    diceBox.appendChild(diceDisplay);
    diceBox.appendChild(inputBtn);
    diceBox.appendChild(brake);
    diceBox.appendChild(sidesInput);
    root.appendChild(diceBox);
    
    inputBtn.addEventListener("click", ()=>{

        let input= sidesInput.value;
        if(isNaN(input)){
            diceDisplay.innerText = "Only numbers please!";
        }
        else if(input == 0){
            diceDisplay.innerText = "More then zero. please!";
        }
        else if(input>999999999){
            diceDisplay.innerText = "we want to stay under a trillion";
        }
        else{
            let result = Math.floor(Math.random() * input) + 1;
            diceDisplay.innerText = result;
            inputBtn.innerText = "ROLL"
        }
    })
}

resetBtn.addEventListener("click", ()=>{
    root.innerHTML = ""
    textLabel.innerText = "you reseted the board"
    textLabel.style.backgroundColor = "orange"
})

rollAllBtn.addEventListener("click", ()=>{
    
})



