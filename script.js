let container1 = document.getElementsByClassName('container1')
let play = document.getElementsByClassName('play')
var player = "";
var diff = "";
let num = 10;
var err = document.querySelector(".error");
let game = document.getElementById("start_game");
// console.log(player.value)
game.addEventListener("click", function (e) {
  // var submit = true;
  player = document.getElementById("player").value;
  if (player == "") {
    err.style.display = "block";
  }

  else if (player != ""){
    err.style.display = "none";
    var ele = document.getElementsByName("difficulty");
    container1[0].style.display = "none";
    play[0].style.display = "flex"
  }
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      diff = ele[i].value;
      console.log(ele[i].value);
    }
  }

  if (diff == "Easy") num = 10;
  else if (diff == "Medium") num = 7;
  else num = 4;
  aleft.innerText = num;
  atotal.innerText = num;
});
var z = Math.floor(Math.random() * 100);
console.log(z);
let count = 0;
var guess = 0;
var check = document.getElementById("check");
var aleft = document.getElementById("aleft");
var atotal = document.getElementById("atotal");
let skore = document.getElementById("skore");

let playagain = Array.from(document.getElementsByClassName("playagain"));
let close = Array.from(document.getElementsByClassName("close"));
var x = document.querySelector("#gusesse");
var y = document.querySelector(".guess");
check.addEventListener("click", function () {
  let num_guess = document.getElementById("num_guess").value;
  if (num_guess <= 0) {
    alert("Bhosdike shi number enter kr");
  } else {
    let temp = checknumber(num_guess);
    console.log(`${temp} ${num_guess}`);
    let tempo = y.innerText;
    if (temp == 1) {
      x.innerText = " low";
      // console.log(y.innerText)
      console.log("Guessed number is less than the random number");
    } else if (temp == 2) {
      x.innerText = " high";
      // console.log(y.innerText)
      console.log("Guessed number is greater than the random number");
    } else {
      x.innerText = " equal";
      skore.innerText = `${100 - count}`;
      play[0].style.display = "none";
      win.style.display = "inline-block";
      // console.log(y.innerText)
      // console.log("Guessed number is Equal to the random number");
      // console.log(`Your score is ${100-count}`)
    }
    
    y.style.display = "block";
    // y.innerText = tempo;
    count++;
    // console.log(guess)

    num--;
    aleft.innerText = `${num}`;
    if (num == 0 && temp!=3) {
      console.log("Game Over");
      play[0].style.display = "none";
      lose.style.display = "inline-block";
    }
  }
});
function checknumber(num_guess) {
  // console.log("hello")
  if (num_guess < z) return 1;
  else if (num_guess > z) return 2;
  else return 3;
}
playagain.forEach(function (elem) {
  elem.addEventListener("click", function () {
    location.href = "index.html";
  });
});
close.forEach((item) => {
  item.addEventListener("click", (event) => {
    // close();
    // window.open("", '_self').window.close();
    window.open(location.href, "_self", "");
    window.close();
    console.log("hello");
  });
});


let start = document.getElementById("start_game")
start.addEventListener('click', ()=>{
  container1.removeClass('.container')
  container1.addClass('play')
  // container1.parentNode.removeChild(container1)
})