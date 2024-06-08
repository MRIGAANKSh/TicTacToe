let boxes = document.querySelectorAll(".box");
let rset = document.querySelector("#reset");
let newgame = document.querySelector("#newbtn");
let msgc = document.querySelector(".msg");
let msgp = document.querySelector("#msgp");

let turnO = true;
const winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkwinner();
  });
});
const checkwinner = () => {
  for (pattern of winpatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 == pos2 && pos2 == pos3) {
        console.log("winner", pos1);

        showinner(pos1);
      }
    }
  }
};
const showinner = (winner) => {
  msgp.innerText = `Congratulation, Winner is ${winner}`;
  msgc.classList.remove("hide");
  disablebox()
};
const resetgame = () => {
  let turnO = true;
  enablebox()
  msgc.classList.add("hide");
};
const disablebox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enablebox = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText=""
    }
  };
newgame.addEventListener("click",resetgame);
rset.addEventListener("click",resetgame);