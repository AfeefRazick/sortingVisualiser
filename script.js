const generateNewArray = function () {
  // console.log(generateArray.value)
  const container = document.querySelector('.container')
  container.remove()
  list = createarray(generateArray.value)
  // console.log(list)
  bars = document.querySelectorAll(".bar")
}

const merge = async function (left,right) {

  let lstart = 0
  let lRightStart = 0
  
  sidearray.forEach((sideelement,index)=>{
    if (sideelement==='right'){
      lstart += Math.floor((sizeofarray-1)/(2**(index)))
    }
  })
  
  if(Math.floor((sizeofarray-1)/(2**(sidearray.length)))===0){
    lRightStart = lstart + 1
  }
  else{
    lRightStart = lstart + Math.floor((sizeofarray-1)/(2**(sidearray.length)))
  }

  l = []
  let i=0
  let j=0

  while (i<left.length && j<right.length) {
    
    bars[lstart+i].style.backgroundImage = 'var(--highlightbar)'
    bars[lRightStart+j].style.backgroundImage = 'var(--highlightbar)'

    if (left[i]<right[j]) {
      l.push(left[i])
    }
    else {
      l.push(right[j])
    }
    
    await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 30)
    )
          
    bars[lstart+i].style.backgroundImage = 'var(--bar)'
    bars[lRightStart+j].style.backgroundImage = 'var(--bar)'

    if (left[i]<right[j]) {
      i+=1
    }
    else {
      j+=1     
    } 
  }
  
  while (i<left.length) {
    bars[lstart+i].style.backgroundImage = 'var(--highlightbar)'
    
    l.push(left[i])
    i+=1
    
    await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 30)
      )

    bars[lstart+i-1].style.backgroundImage = 'var(--bar)'
  }

  while (j<right.length) {
    bars[lRightStart+j].style.backgroundImage = 'var(--highlightbar)'
    l.push(right[j])
    j+=1
    
    await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 30)
      )

    bars[lRightStart+j-1].style.backgroundImage = 'var(--bar)'
  }

  // if (l.length==sizeofarray-1) {
  //   console.log(l)
  // }

  l.forEach((height,index)=>{
    bars[lstart+index].style.height=`${(height/sizeofarray)*100}%`
  })

  return l
}


const mergesort = async function (array,side) {
  sidearray.push(side)
  
  let midpoint = Math.floor(array.length/2)
  if (array.length<=1){
    return array
  }
  let left_half = array.slice(0,midpoint)
  let right_half = array.slice(midpoint)

  let left = await mergesort(left_half,'left')
  sidearray.pop()
  
  let right = await mergesort(right_half,'right')
  sidearray.pop()
  
  return await merge(left,right)
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
