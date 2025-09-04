const container = document.querySelector(".container");
const rows = [];

function createGrid(side) {
  const basis = 850 - side;

  for (let i = 0; i < side; i++) {
    rows[i] = document.createElement("div");
    rows[i].classList.add("row");
    rows[i].style.flexBasis = basis + "px";
    container.appendChild(rows[i]);

    const cols = [];
    for (let j = 0; j < side; j++) {
      cols[j] = document.createElement("div");
      cols[j].classList.add("col");
      cols[j].style.flexBasis = basis + "px";
      rows[i].appendChild(cols[j]);
    }
  }

  const squares = document.querySelectorAll(".col");
  squares.forEach((square) => {
    let count = 0.1;
    square.addEventListener("mouseover", (e) => {
      if (e.shiftKey) e.target.style.background = "#ee0000ff";
      if (e.ctrlKey) e.target.style.background = "#00137eff";
      if (e.altKey) e.target.style.background = "#ffe608ff";

      if (e.shiftKey && e.altKey) e.target.style.background = "#ffffff";
      if (e.shiftKey && e.ctrlKey) e.target.style.background = "#000000";
    });

    square.addEventListener("mousedown", (e) => {
      switch (e.button) {
        case 0:
          count = count <= 0 || count > 0.9 ? count : count + 0.1;
          break;
        case 1:
          count -= 0.1;
          break;
        default:
          break;
      }

      square.style.opacity = count;
      // console.log(square.style.opacity);
    });
  });
}

const button = document.querySelector("button");

button.addEventListener("click", () => {
  let side = 0;
  do {
    side = prompt(
      "Enter the number of squares per a line you want in 1 to 100."
    );
  } while (side < 1 || 100 < side);

  rows.forEach((row) => row.remove());
  createGrid(side);
});

createGrid(16);
