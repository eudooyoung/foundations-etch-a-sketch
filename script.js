const container = document.querySelector(".container");

const rows = [];
for (let i = 0; i < 4; i++) {
  rows[i] = document.createElement("div");
  rows[i].classList.add("row");
  container.appendChild(rows[i]);

  const cols = [];
  for (let j = 0; j < 4; j++) {
    cols[j] = document.createElement("div");
    cols[j].classList.add("col");
    rows[i].appendChild(cols[j]);
  }
}

const squares = document.querySelectorAll(".col");
squares.forEach((square) => {
  square.addEventListener("mouseover", (e) => {
    e.target.style.background = "#ee0000ff";
  });
});
