const merge = async function (left,right) {
  let l = []
  let i=0
  let j=0

  while (i<left.length && j<right.length) {
    
    bars[i].style.backgroundColor = 'green'
    bars[j].style.backgroundColor = 'green'
    console.log('sas')

    if (left[i]<right[j]) {
      l.push(left[i])
      
    }
    else {
      l.push(right[j])
      
    }
    
    await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 3000)
  )
          
    
    bars[i].style.backgroundColor = 'sienna'
    bars[j].style.backgroundColor = 'sienna'

    if (left[i]<right[j]) {
      i+=1
    }
    else {
      j+=1
    }
    
        
  }
  

  while (i<left.length) {
    bars[i].style.backgroundColor = 'green'
    
    l.push(left[i])
    i+=1
    
    await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 30)
      )
    console.log('caca')
    bars[i-1].style.backgroundColor = 'sienna'
          
  }

  while (j<right.length) {
    bars[j].style.backgroundColor = 'green'
    l.push(right[j])
    j+=1
    
    await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 30)
      )
    console.log('dff')
    bars[j-1].style.backgroundColor = 'sienna'
  }

  
  if (l.length==sizeofarray) {
    console.log(l)
  }
  return l
  
}


const mergesort = async function (array) {
  let midpoint = Math.floor(array.length/2)
  if (array.length<=1){
    return array
  }
  let left_half = array.slice(0,midpoint)
  // console.log(left_half)
  let right_half = array.slice(midpoint)
  // console.log(right_half)

  let left = await mergesort(left_half)
  let right = await mergesort(right_half)

  return await merge(left,right)

}

const createarray = function (max) {
  let test = []
  sizeofarray=max
  for (i=1;i<max+1;i++) {
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
const container = document.querySelector('.container')

let list = createarray(80)
console.log(list)
const bars = document.querySelectorAll(".bar")
mergesort(list)

// keep a recursion depth level tracker
// this will be a list...probably declare in first level of recursion ....if reclevel is 1 const...
// pass in arguement with def value
// everytime mergesrot is called it will pass in an arguement for parameter 'side' either left or right
// append the value of side to this list and remove once the mergesort level is done
// traverse the list for highlighting the bar...when left is the value on list do anything, when right is the value add the length
// of the previous recursion depth level list...can get recursion depth level using length of leftrightlist