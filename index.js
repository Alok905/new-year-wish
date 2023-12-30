const containerLeft = document.querySelector(".left");
const btn = document.getElementById("btn-wish");
const input = document.querySelector(".input-heart");
let checked = false;

const generateRandomNumbers = (x, y, cWidth, cHeight) => {
  while (true) {
    let ranX = Math.trunc(Math.random() * (cWidth / 2));
    let ranY = Math.trunc(Math.random() * (cHeight / 2));

    x = (x + ranX) % cWidth;
    y = (y + ranY) % cHeight;

    if (x > cWidth - btn.offsetWidth || y > cHeight - btn.offsetHeight)
      continue;
    if (
      !(
        x <= btn.offsetLeft &&
        x >= btn.offsetLeft + btn.offsetWidth &&
        y >= btn.offsetTop &&
        y <= btn.offsetTop + btn.offsetHeight
      )
    ) {
      return { x, y };
    }
  }
};

const annoyingButton = (e) => {
  if (checked) {
    containerLeft.removeEventListener("mousemove", annoyingButton);
  }
  let x = e.pageX - containerLeft.offsetLeft;
  let y = e.pageY - containerLeft.offsetTop;
  let containerLeftWidth = containerLeft.offsetWidth;
  let containerLeftHeight = containerLeft.offsetHeight;

  let btnTop = btn.offsetTop;
  let btnLeft = btn.offsetLeft;

  if (
    x >= btnLeft &&
    x <= btnLeft + btn.offsetWidth &&
    y >= btnTop &&
    y <= btnTop + btn.offsetHeight
  ) {
    btn.style.position = "absolute";
    const ob = generateRandomNumbers(
      x,
      y,
      containerLeftWidth,
      containerLeftHeight
    );
    x = ob.x;
    y = ob.y;
    btn.style.top = y + "px";
    btn.style.left = x + "px";
  }
};

containerLeft && containerLeft.addEventListener("mousemove", annoyingButton);

function flyHearts() {
  const makeHearts = (num, top, left) => {
    return `<img src="assets/heart.png" alt="" class="heart heart${num}" style="top: ${top}%; left: ${left}%" />`;
  };

  let html = "";
  for (let i = 1; i <= 70; i++) {
    const n1 = Math.trunc(Math.random() * 2) + 1;
    const n2 = Math.trunc(Math.random() * parseInt(n1 == 1 ? 3 : 2)) + 1;
    const t = Math.trunc(Math.random() * 300) + 100;
    const l = Math.trunc(Math.random() * 100) + 1;

    html += makeHearts(n1 + "" + n2, t, l);
  }

  document
    .querySelectorAll(".container")[0]
    .insertAdjacentHTML("beforeend", html);
}
input &&
  input.addEventListener("change", function () {
    checked = this.checked;
    if (checked) {
      flyHearts();
      btn.style.position = "static";
      btn.disabled = false;
    } else {
      btn.disabled = true;
      containerLeft.addEventListener("mousemove", annoyingButton);
    }
  });

btn &&
  btn.addEventListener("click", () => {
    console.log("clicked");
  });

//------------------------------
const hnyTexts = document.querySelectorAll(".hny-char");
hnyTexts.forEach((hny, i) => {
  hny.style.animationDelay = 0.2 * i + "s";
});

const hnyContainer = document.querySelector(".hny-container");
const textContainer = document.querySelector(".text-container");
setTimeout(() => {
  hnyContainer.style.display = "none";
  // textContainer.style.display = "flex";
}, 6000);
