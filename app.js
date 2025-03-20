const button = document.querySelectorAll(".box");
const body = document.querySelector("body");

// foreach ek method h jo call back function leta h

button.forEach(function (box) {
  box.addEventListener("click", function (color) {
    if (color.target.id === "box1") {
      body.style.backgroundColor = "#F38C79";
    }
    if (color.target.id === "box2") {
      body.style.backgroundColor = " #C1CFA1";
    }
    if (color.target.id === "box3") {
      body.style.backgroundColor = "#7D1C4A";
    }
    if (color.target.id === "box4") {
      body.style.backgroundColor = "#00879E";
    }
    if (color.target.id === "box5") {
      body.style.backgroundColor = "#FFB8E0";
    }
  });
});
