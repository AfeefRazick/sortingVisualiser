const setBarBgImgColor = function (index,img='var(--bar)') {
  bars[index].style.backgroundImage = img
}

const asyncdelay = async function (ms) {
  await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, ms)
  )
}

const swap = function (array,lefti,rightj) {
  let temp = array[lefti]
  array[lefti]=array[rightj]
  array[rightj]=temp
}

const swapheight = function (lefti,rightj) {
  let temp = bars[lefti].style.height
  bars[lefti].style.height=bars[rightj].style.height
  bars[rightj].style.height=temp
}

const generateNewArray = function () {
  const container = document.querySelector('.container')
  container.remove()
  list = createarray(generateArray.value)
  bars = document.querySelectorAll(".bar")
}

const createarray = function (max) {
  const container = document.createElement('div')
  container.classList.add('container')
  div1.append(container)

  let unsortedList = []
  sizeofarray=max

  for (i=1;i<(sizeofarray);i+=1) {
    let height = Math.floor(Math.random() * (max-1))+1
    unsortedList.push(height)
    let bar = document.createElement('div')
    bar.classList.add('bar')
    bar.setAttribute('id',`bar${i}`)
    bar.style.height = `${(height/max)*100}%`
    bar.style.width = `${(0.8/max)*100}%`
    container.append(bar)
  } 

  return unsortedList
}
// var sizeofarray= 0
// var sortedlist = []


const div1 = document.querySelector('#div1')
const generateLabel = document.querySelector('#generatelabel')
const generateArray = document.querySelector('#generate')
const speed = document.querySelector('#speed')
const callmergesort = document.querySelector('#mergesort')
const callquicksort = document.querySelector('#quicksort')
const callbubblesort = document.querySelector('#bubblesort')
const callselectionsort = document.querySelector('#selectionsort')

var list = createarray(generateArray.value)
var bars = document.querySelectorAll(".bar")
var ms = generateArray.max-speed.value

generateArray.addEventListener('input',()=>{
  generateNewArray()
})

generateLabel.addEventListener('click',()=>{
  generateNewArray()
})

speed.addEventListener('input',()=>{
  ms = generateArray.max-speed.value
})

callmergesort.addEventListener('click',()=>{
  sidearray = []
  mergesort(list,0,list.length-1)
})

callquicksort.addEventListener('click',()=>{
  quicksort(list,0,list.length-1)
})

callselectionsort.addEventListener('click',()=>{
  selectionsort(list)
})

callbubblesort.addEventListener('click',()=>{
  bubblesort(list)
})

// purple or some color when a bar is in its correct position ...put inside swap height function...first have to change mergesort.js
// take in array ...if bar[index].height=== array[index]*sometin