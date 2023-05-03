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

  let test = []
  sizeofarray=max

  for (i=1;i<(sizeofarray);i+=1) {
    let height = Math.floor(Math.random() * (max-1))+1
    test.push(height)
    let bar = document.createElement('div')
    bar.classList.add('bar')
    bar.setAttribute('id',`bar${i}`)
    bar.style.height = `${(height/max)*100}%`
    bar.style.width = `${(0.8/max)*100}%`
    container.append(bar)
  } 

  return test
}
var sizeofarray= 0
var sortedlist = []
var l = []


const div1 = document.querySelector('#div1')
const generateArray = document.querySelector('#generate')
const callmergesort = document.querySelector('#mergesort')
const generateLabel = document.querySelector('#generatelabel')


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
