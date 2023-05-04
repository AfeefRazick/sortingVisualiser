const generateNewArray = function () {
  // console.log(generateArray.value)
  const container = document.querySelector('.container')
  container.remove()
  list = createarray(generateArray.value)
  // console.log(list)
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
var sizeofarray= 0
var sortedlist = []
var l = []


const div1 = document.querySelector('#div1')
const generateLabel = document.querySelector('#generatelabel')
const generateArray = document.querySelector('#generate')
const callmergesort = document.querySelector('#mergesort')
const callquicksort = document.querySelector('#quicksort')

var list = createarray(generateArray.value)
// console.log(list)
var bars = document.querySelectorAll(".bar")
var sidearray = []

generateArray.addEventListener('input',()=>{
  generateNewArray()
})

generateLabel.addEventListener('click',()=>{
  generateNewArray()
})

callmergesort.addEventListener('click',()=>{
  sidearray = []
  mergesort(list)
})

callquicksort.addEventListener('click',()=>{
  console.log(list)
  quicksort(list,0,list.length-1)
  console.log(list)
})
