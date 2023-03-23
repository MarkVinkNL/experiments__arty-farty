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
];

[...document.querySelectorAll("[arty]")].forEach((arty) => {
  let row = arty.getAttribute("arty");
  let amount = row * row;
  let scrambleCount = 0;

  // console.log(options[0]);

  arty.style.setProperty("--count", row);

  for (let i = 0; i < amount; i++) {
    let div = document.createElement("div");
    arty.appendChild(div);
  }

  var map = [];
  // Seed array met dummy data
  for (let y = 0; y < row; y++) {
    yArray = [];
    for (let x = 0; x < row; x++) {
      yArray.push(1);
    }
    map.push(yArray);
  }
  //Seed eerste grid point met random waarde
  map[0][0] = Math.floor(Math.random() * 20);

  //console.log(map);

  // map.forEach((xArray, y) => {
  //   xArray.forEach((x) => {
  //     console.log(x);
  //   });
  // });

  // console.log("---------");
  // console.log(row);
  // console.log(amount);
  // console.log("---------");

  // console.log("---------");

  function scramble() {
    if (scrambleCount >= 5) {
      map[0][0] = Math.floor(Math.random() * 20);
      scrambleCount = 0;
    }

    for (let i = 0; i < amount; i++) {
      let y = Math.ceil((i + 1) / row) - 1;
      let x = i % row;

      //console.log("y:" + y + " - x:" + x);

      if (i == 0) continue;

      let borderTop = "none";
      if (y - 1 >= 0) {
        borderTop = options[map[y - 1][x]][2];
      }

      // let borderRight = "none";
      // if (x + 1 < row) {
      //   borderRight = options[map[y][x + 1]][3];
      // }

      // let borderBottom = "none";
      // if (y + 1 < row) {
      //   borderBottom = options[map[y + 1][x]][0];
      // }

      let borderLeft = "none";
      if (x - 1 >= 0) {
        borderLeft = options[map[y][x - 1]][1];
      }

      //console.log({ borderTop, borderLeft });

      let figureOptionsSet = [];

      if ((borderTop == 0 || borderTop == 1) && (borderLeft == 0 || borderLeft == 1)) {
        // console.log({ borderTop, borderLeft });
        options.forEach((option, index) => {
          if (option[3] == borderLeft && option[0] == borderTop) {
            figureOptionsSet.push(index);
          }
        });
      } else if (borderTop == 0 || borderTop == 1) {
        // console.log({ borderTop });
        options.forEach((option, index) => {
          if (option[0] == borderTop) {
            figureOptionsSet.push(index);
          }
        });
      } else if (borderLeft == 0 || borderLeft == 1) {
        // console.log({ borderLeft });
        options.forEach((option, index) => {
          if (option[3] == borderLeft) {
            figureOptionsSet.push(index);
          }
        });
      }

      // options.forEach((option, index) => {
      //   let checkTop = true;
      //   if (borderTop == 0 || borderTop == 1) {
      //     if (option[0] != borderTop) checkTop = false;
      //   }

      //   let checkRight = true;
      //   if (borderRight == 0 || borderRight == 1) {
      //     if (option[1] != borderRight) checkRight = false;
      //   }

      //   let checkBottom = true;
      //   if (borderBottom == 0 || borderBottom == 1) {
      //     if (option[0] != borderBottom) checkBottom = false;
      //   }

      //   let checkLeft = true;
      //   if (borderLeft == 0 || borderLeft == 1) {
      //     if (option[0] != borderLeft) checkLeft = false;
      //   }

      //   if (checkTop && checkRight && checkBottom && checkLeft) figureOptionsSet.push(index);
      // });

      let figureOptions = [...new Set(figureOptionsSet)];

      // console.log("---------");
      // console.log(figureOptions);

      map[y][x] = figureOptions[Math.floor(Math.random() * figureOptions.length)];
    }

    scrambleCount++;

    [...arty.childNodes].forEach((block, i) => {
      let y = Math.ceil((i + 1) / row) - 1;
      let x = i % row;
      block.setAttribute("class", "arty__block block__variant-" + (map[y][x] + 1));
    });
  }

  console.log(arty);
  arty.addEventListener("click", () => {
    console.log("cl");
    scramble();
  });

  scramble();

  setInterval(() => {
    scramble();
  }, 5000);
});
