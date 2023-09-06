let computerChoice = false;
let options = ["rock", "paper", "scissors"];

let startGame = ()=>{
  document.querySelector("#system-message").innerHTML = "Welcome to the game";
  document.querySelector("#stupid").classList.remove("hidden");
  computerChoice = options[Math.floor(Math.random()*options.length)];
}

let x = document.querySelector("#startgame")
x.addEventListener("click", ()=>{
  startGame();
})


 document.querySelectorAll(".playerchoice").forEach($el=>{
   $el.addEventListener("click", (evt)=>{ 
     alert(evt.currentTarget.getAttribute("id"))
   })
 })