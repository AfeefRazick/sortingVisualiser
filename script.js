const merge = function (left,right) {
  let l = []
  let i=0
  let j=0

  while (i<left.length && j<right.length) {
    if (left[i]<right[j]) {
      l.push(left[i])
      i+=1
    }
    else {
      l.push(right[j])
      j+=1
    }
  }
  while (i<left.length) {
    l.push(left[i])
    i+=1
  }
  while (j<right.length) {
    l.push(right[j])
    j+=1
  }
  
  return l
  
}


const mergesort = function (array) {
  midpoint = Math.floor(array.length/2)
  if (array.length<=1){
    return array
  }
  let left_half = array.slice(0,midpoint)
  console.log(left_half)
  let right_half = array.slice(midpoint)

  let left = mergesort(left_half)
  let right = mergesort(right_half)

  return merge(left,right)
}

const createarray = function (max,container) {
  let test = []
  
  for (i=1;i<max+1;i++) {
    let height = Math.floor(Math.random() * (max-1))+1
    test.push(height)
    let bar = document.createElement('div')
    bar.classList.add('bar')
    bar.style.height = `${(height/max)*100}%`
    bar.style.width = `${(0.8/max)*100}%`
    container.append(bar)
  } 
  return test
}

const mergesorter = document.querySelector('#mergesort')
const quicksorter = document.querySelector('#quicksort')

let list = createarray(20,mergesorter)
let liste = createarray(80,quicksorter)
console.log(list)
console.log(mergesort(list))

