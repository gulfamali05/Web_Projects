let btns = document.querySelectorAll(".box");
let turn = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
btns.forEach((box)=>{
  box.addEventListener("click", ()=>{
    if(turn){
      box.innerHTML ="O";
      turn = false;
    }
    else{
      box.innerHTML = "X";
      turn = true;
    }
    box.disabled = true;
  });
});
