

const root = document.querySelector("#root");
const input = document.querySelector("#input");
const submitBtn = document.querySelector("#submit");
const textLabel = document.querySelector("#textLabel");

submitBtn.addEventListener("click", ()=>{
    let input = input.value

    if(isNaN(input)){
        textLabel.innerText = "You must enter a number!"
    }
    else{
        creatDice(input)
    }
})








