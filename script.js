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
  // console.log(list)
  bars = document.querySelectorAll(".bar")
}

const createarray = function (max) {
  const container = document.createElement('div')
  container.classList.add('container')
  div1.prepend(container)

  let unsortedList = []
  sizeofarray=max

  for (i=0;i<sizeofarray;i+=1) {
    let height = Math.floor(Math.random() * (max))+1
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

const div1 = document.querySelector('#div1')
const generateLabel = document.querySelector('#generatelabel')
const generateArray = document.querySelector('#generate')
const speed = document.querySelector('#speed')
const callmergesort = document.querySelector('#mergesort')
const callquicksort = document.querySelector('#quicksort')
const callbubblesort = document.querySelector('#bubblesort')
const callselectionsort = document.querySelector('#selectionsort')
const mergedesc = document.querySelector('#mergedesc')
const quickdesc = document.querySelector('#quickdesc')
const bubbledesc = document.querySelector('#bubbledesc')
const selectiondesc = document.querySelector('#selectiondesc')

var list = createarray(generateArray.value)
var bars = document.querySelectorAll(".bar")
var ms = generateArray.max-speed.value+10

generateArray.addEventListener('input',()=>{
  generateNewArray()
})

generateLabel.addEventListener('click',()=>{
  generateNewArray()
})

speed.addEventListener('input',()=>{
  ms = generateArray.max-speed.value+10
  console.log(ms)
})

callmergesort.addEventListener('click',()=>{
  mergesort(list,0,list.length-1)
  mergedesc.style.display = 'flex'
  quickdesc.style.display = 'none'
  bubbledesc.style.display = 'none'
  selectiondesc.style.display = 'none'

})

callquicksort.addEventListener('click',()=>{
  quicksort(list,0,list.length-1)
  quickdesc.style.display = 'flex'
  mergedesc.style.display = 'none'
  bubbledesc.style.display = 'none'
  selectiondesc.style.display = 'none'
})

callbubblesort.addEventListener('click',()=>{
  bubblesort(list)
  bubbledesc.style.display = 'flex'
  quickdesc.style.display = 'none'
  mergedesc.style.display = 'none'
  selectiondesc.style.display = 'none'
})

callselectionsort.addEventListener('click',()=>{
  selectionsort(list)
  selectiondesc.style.display = 'flex'
  quickdesc.style.display = 'none'
  mergedesc.style.display = 'none'
  bubbledesc.style.display = 'none'
})