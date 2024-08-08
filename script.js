const Emojee = [
  {
    icon: "☹️",
    description: "Unhappy",
  },
  {
    icon: "😐",
    description: "Neutral",
  },
  {
    icon: "😊",
    description: "Satisfied",
  },
];
let emoji_content = document.querySelectorAll(".emoji-content");
let button = document.getElementById("button");
let container = document.querySelector(".container");
let review = document.querySelector(".review");
let flag = false;
let span = "";

function displayemoji() {
  emoji_content.forEach(function (ele, index) {
    ele.innerHTML = `<div>${Emojee[index].icon}</div><div>${Emojee[index].description}</div>`;
    ele.addEventListener("click", function (e) {
      emoji_content.forEach(function (item, index) {
        if (
          item === e.target ||
          item.children[0] === e.target ||
          item.children[1] === e.target
        ) {
          item.classList.add("selected");
          item.classList.remove("white");
          span = Emojee[index].description;
          console.log(span);
          console.log("p");
        } else {
          item.classList.remove("selected");
          item.classList.add("white");
        }
        flag = true;
      });
    });
  });

  console.log(span);
  console.log("t");
  button.addEventListener("click", newdiv);
}

function colorchange(e) {
  emoji_content.forEach(function (ele, index) {
    if (ele === e.target) {
      ele.style.backgroudColor = "rgb(69, 109, 56)";
    } else {
      ele.style.backgroudColor = "white";
    }
  });
}

function newdiv() {
  console.log("change");
  if (flag) {
    review.style.display = "flex";
    container.style.display = "none";
    document.querySelector(".fb").innerText = ` ${span}`;
  }
}

displayemoji();
