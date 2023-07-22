const user = document.querySelector(".userInput");
const inputMessage = document.querySelector(".inputMessage");
const displayCounter = document.querySelector(".lives");

const guess = Math.floor(Math.random() * 10) + 1;
console.log(guess);
let play = 0;

// lunch game function
function lunchGame() {
  inputMessage.innerText = "";
  if (user.value == "") {
    let element3 = document.createElement("div");
    element3.innerText = "input guess";
    inputMessage.appendChild(element3);
  } else {
    user.innerHTML = "";
    play = play + 1;
    counter = 3 - play;
    displayCounter.innerText = `${counter} live(s)`;
    if (play < 3) {
      let userInput = user.value;
      if (userInput == guess) {
        document.write(
          "<div style='display: flex; flex-direction: column; justify-content: center; align-items:center'><h1>YOU WIN!!!</h1><a href='index.html'><button style='width: 200px; height: 30px;font-size: 20px; cursor: pointer;'>restart?</button></a></div>"
        );
        let element = document.createElement("div");
        element.innerText = "!!!";
        let a = document.createElement("a");
        let link = document.createElement("button");
        link.innerText = "Restart";
        a.appendChild(link);
        a.href = "index.html";
        element.append(a);
        inputMessage.appendChild(element);
      } else {
        let element2 = document.createElement("div");
        element2.innerText = "Try again!";
        inputMessage.appendChild(element2);
      }
    } else {
      document.write(
        "<div style='display: flex; flex-direction: column; justify-content: center; align-items:center'><h1>Game over!!!</h1><a href='index.html'><button style='width: 200px; height: 30px;font-size: 20px; cursor: pointer;'>restart</button></a></div>"
      );
    }
  }
}
