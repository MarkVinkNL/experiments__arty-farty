// Good luck!
var options = [
  [0, 0, 0, 0],
  [1, 1, 1, 1],

  [0, 1, 1, 0],
  [0, 0, 1, 1],
  [1, 1, 0, 0],
  [1, 0, 0, 1],

  [1, 0, 0, 1],
  [1, 1, 0, 0],
  [0, 0, 1, 1],
  [0, 1, 1, 0],

  [0, 0, 1, 0],
  [0, 0, 0, 1],
  [1, 0, 0, 0],
  [0, 1, 0, 0],

  [1, 1, 0, 1],
  [1, 1, 1, 0],
  [0, 1, 1, 1],
  [1, 0, 1, 1],

  [1, 1, 1, 1],
  [0, 0, 0, 0],
  [1, 1, 1, 1],
  [0, 0, 0, 0],
];

[...document.querySelectorAll("[arty]")].forEach((arty) => {
  let cols = arty.getAttribute("arty") || 4;
  let intervalTime = arty.getAttribute("arty-interval") ?? 5000;
  let sequenceTime = arty.getAttribute("arty-sequence") ?? 0;

  let amount = cols * cols;
  let scrambleInterval;

  arty.style.setProperty("--count", cols);

  for (let i = 0; i < amount; i++) {
    let div = document.createElement("div");
    div.classList.add("arty__block", "block__variant-19");
    arty.appendChild(div);
  }

  var map = [];
  // Seed array met dummy data
  for (let y = 0; y < cols; y++) {
    yArray = [];
    for (let x = 0; x < cols; x++) {
      yArray.push(1);
    }
    map.push(yArray);
  }

  //Seed eerste grid point met random waarde
  map[0][0] = Math.floor(Math.random() * options.length);

  function scramble() {
    clearInterval(scrambleInterval);

    map[0][0] = Math.floor(Math.random() * 20);

    for (let i = 0; i < amount; i++) {
      let y = Math.ceil((i + 1) / cols) - 1;
      let x = i % cols;

      if (i == 0) continue;

      let borderTop = "none";
      if (y - 1 >= 0) {
        borderTop = options[map[y - 1][x]][2];
      }

      let borderLeft = "none";
      if (x - 1 >= 0) {
        borderLeft = options[map[y][x - 1]][1];
      }

      let figureOptionsSet = [];

      // Filter alle opties uit de array die voldoen aan de borderLeft en borderTop
      do {
        if (borderTop !== "none" && borderLeft !== "none") {
          options.forEach((option, index) => {
            if (option[3] == borderLeft && option[0] == borderTop) {
              figureOptionsSet.push(index);
            }
          });
          break;
        }

        if (borderTop !== "none") {
          options.forEach((option, index) => {
            if (option[0] == borderTop) {
              figureOptionsSet.push(index);
            }
          });
          break;
        }

        if (borderLeft !== "none") {
          options.forEach((option, index) => {
            if (option[3] == borderLeft) {
              figureOptionsSet.push(index);
            }
          });
          break;
        }
      } while (0);

      let figureOptions = [...new Set(figureOptionsSet)];

      map[y][x] = figureOptions[Math.floor(Math.random() * figureOptions.length)];
    }

    [...arty.childNodes].forEach((block, i) => {
      setTimeout(() => {
        let y = Math.ceil((i + 1) / cols) - 1;
        let x = i % cols;
        block.setAttribute("class", "arty__block block__variant-" + map[y][x]);
      }, sequenceTime * i);
    });

    scrambleInterval = setInterval(() => {
      scramble();
    }, intervalTime);
  }

  arty.addEventListener("click", () => {
    scramble();
  });

  scramble();
});
