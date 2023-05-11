// sound
var audioCtx = new (window.AudioContext ||
  window.webkitAudioContext ||
  window.audioContext)();

function beep(frequency) {
  var oscillator = audioCtx.createOscillator();
  var gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  gainNode.gain.value = volume; //vol
  oscillator.frequency.value = frequency * 11 + 500;
  oscillator.type = "square";

  oscillator.start(audioCtx.currentTime);
  oscillator.stop(audioCtx.currentTime + 20 / 1000);
}
// sound end

const highlightbutton = function () {
  buttons.forEach((button) => {
    button.classList.add("unfinished");
  });
};

const remhighlightbutton = function () {
  buttons.forEach((button) => {
    button.classList.remove("unfinished");
  });
};

const setBarBgImgColor = function (index, img = "var(--bar)") {
  bars[index].style.backgroundImage = img;
};

const asyncdelay = async function (ms) {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, ms)
  );
};

const swap = function (array, lefti, rightj) {
  let temp = array[lefti];
  array[lefti] = array[rightj];
  array[rightj] = temp;
};

const swapheight = function (lefti, rightj) {
  let temp = bars[lefti].style.height;
  bars[lefti].style.height = bars[rightj].style.height;
  bars[rightj].style.height = temp;
};

const generateNewArray = function () {
  const container = document.querySelector(".container");
  container.remove();
  list = createarray(generateArray.value);
  // console.log(list)
  bars = document.querySelectorAll(".bar");
};

const createarray = function (max) {
  const container = document.createElement("div");
  container.classList.add("container");
  div1.prepend(container);

  let unsortedList = [];
  sizeofarray = max;

  for (i = 0; i < sizeofarray; i += 1) {
    let height = Math.floor(Math.random() * max) + 1;
    unsortedList.push(height);
    let bar = document.createElement("div");
    bar.classList.add("bar");
    bar.setAttribute("id", `bar${i}`);
    bar.style.height = `${(height / max) * 100}%`;
    bar.style.width = `${(0.8 / max) * 100}%`;
    container.append(bar);
  }

  return unsortedList;
};

const div1 = document.querySelector("#div1");
const generateLabel = document.querySelector("#generatelabel");
const generateArray = document.querySelector("#generate");
const speed = document.querySelector("#speed");
const buttons = document.querySelectorAll(".button");
const callmergesort = document.querySelector("#mergesort");
const callquicksort = document.querySelector("#quicksort");
const callbubblesort = document.querySelector("#bubblesort");
const callselectionsort = document.querySelector("#selectionsort");
const mergedesc = document.querySelector("#mergedesc");
const quickdesc = document.querySelector("#quickdesc");
const bubbledesc = document.querySelector("#bubbledesc");
const selectiondesc = document.querySelector("#selectiondesc");
const mute = document.querySelector("#mute");
const mutesvg = document.querySelector("#mutesvg");

var list = createarray(generateArray.value);
var bars = document.querySelectorAll(".bar");
// var ms = (generateArray.max*2)-speed.value
var ms = 2 ** ((200 - speed.value) / 20) + 2;
var volume = 0.8;
var finished = true;

generateArray.addEventListener("input", () => {
  if (finished) {
    generateNewArray();
  }
});

generateLabel.addEventListener("click", () => {
  if (finished) {
    generateNewArray();
  }
});

speed.addEventListener("input", () => {
  ms = 2 ** ((200 - speed.value) / 20) + 2;
});

callmergesort.addEventListener("click", async () => {
  if (finished) {
    mergedesc.style.display = "flex";
    quickdesc.style.display = "none";
    bubbledesc.style.display = "none";
    selectiondesc.style.display = "none";
    finished = false;
    highlightbutton();
    await mergesort(list, 0, list.length - 1);
    remhighlightbutton();
    finished = true;
  }
});

callquicksort.addEventListener("click", async () => {
  if (finished) {
    quickdesc.style.display = "flex";
    mergedesc.style.display = "none";
    bubbledesc.style.display = "none";
    selectiondesc.style.display = "none";
    finished = false;
    highlightbutton();
    await quicksort(list, 0, list.length - 1);
    remhighlightbutton();
    finished = true;
  }
});

callbubblesort.addEventListener("click", async () => {
  if (finished) {
    bubbledesc.style.display = "flex";
    quickdesc.style.display = "none";
    mergedesc.style.display = "none";
    selectiondesc.style.display = "none";
    finished = false;
    highlightbutton();
    await bubblesort(list);
    remhighlightbutton();
    finished = true;
  }
});

callselectionsort.addEventListener("click", async () => {
  if (finished) {
    selectiondesc.style.display = "flex";
    quickdesc.style.display = "none";
    mergedesc.style.display = "none";
    bubbledesc.style.display = "none";
    finished = false;
    highlightbutton();
    await selectionsort(list);
    remhighlightbutton();
    finished = true;
  }
});

mute.addEventListener("click", () => {
  mute.classList.toggle("muted");
  if (volume == 0.8) {
    mutesvg.style.fill = "white";
    volume = 0;
  } else {
    mutesvg.style.fill = "black";
    volume = 0.8;
  }
});
