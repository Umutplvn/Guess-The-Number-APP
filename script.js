const button = document.getElementById("btn");
let random = Math.round(Math.random() * 100);
let input = document.getElementById("input");
let number = 0;
input.focus();
button.addEventListener("click", () => {
  number++;
  
  document.getElementById("attempt").innerText = `Attempt: ${number}`;
  let guess = input.value;


  if(guess<0 || guess>100){
    document.getElementById("btn").disabled = true;
    document.getElementById("text").innerText = "I said enter a number between 0 to 100! 🤦‍♂️ ";
    document.getElementById("num1").innerText = "";
    document.getElementById("num2").innerText = "";
    document.getElementById("to").innerText = "";
    document.getElementById("attempt").innerText = `Attempt: 0`;
  
  }else if(!input.value){
    document.getElementById("btn").disabled = true;
    document.getElementById("text").innerText = "No Number, No Game ! 😤 ";
    document.getElementById("num1").innerText = "";
    document.getElementById("num2").innerText = "";
    document.getElementById("to").innerText = "";
    document.getElementById("attempt").innerText = `Attempt: 0`;


    

  }else if (number == 5) {
    document.getElementById("btn").disabled = true;
    document.getElementById("text").innerText = "Game Over ! 😢";
    document.getElementById("num1").innerText = "";
    document.getElementById("num2").innerText = "";
    document.getElementById("to").innerText = "";

  } else if (guess == random) {
    document.getElementById("num1").innerText = "";
    document.getElementById("num2").innerText = "";
    document.getElementById("to").innerText = "";
    document.getElementById("text").innerText = "Congratulations! 🥳";
    input.value = " ";
    input.focus();
  } else if (guess < random) {
    document.getElementById("num1").innerText = `${guess}`;
    input.value = " ";
    input.focus();
  } else if (guess > random) {
    document.getElementById("num2").innerText = `${guess}`;
    input.value = "";
    input.focus();
  }
});


input.addEventListener("keydown", (e) => {
  if(e.code=="Enter"){
    button.click()
  }
})




document.getElementById("reset").addEventListener("click", ()=>{
  location.reload();
} )

