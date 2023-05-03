const merge = async function (left,right) {

  let lstarter = 0
  let lstarterright = 0
  
  sidearray.forEach((sideelement,index)=>{
    if (sideelement==='right'){
      lstarter += Math.floor((sizeofarray-1)/(2**(index)))
    }
  })
  
  if(Math.floor((sizeofarray-1)/(2**(sidearray.length)))===0){
    lstarterright = lstarter + 1
  }
  else{
    lstarterright = lstarter + Math.floor((sizeofarray-1)/(2**(sidearray.length)))
  }

  l = []
  let i=0
  let j=0

  while (i<left.length && j<right.length) {
    
    bars[lstarter+i].style.backgroundColor = 'green'
    bars[lstarterright+j].style.backgroundColor = 'green'

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
          
    bars[lstarter+i].style.backgroundColor = 'sienna'
    bars[lstarterright+j].style.backgroundColor = 'sienna'

    if (left[i]<right[j]) {
      i+=1
    }
    else {
      j+=1     
    } 
  }
  
  while (i<left.length) {
    bars[lstarter+i].style.backgroundColor = 'green'
    
    l.push(left[i])
    i+=1
    
    await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 30)
      )

    bars[lstarter+i-1].style.backgroundColor = 'sienna'
  }

  while (j<right.length) {
    bars[lstarterright+j].style.backgroundColor = 'green'
    l.push(right[j])
    j+=1
    
    await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 30)
      )

    bars[lstarterright+j-1].style.backgroundColor = 'sienna'
  }

  
  if (l.length==sizeofarray-1) {
    console.log(l)
  }
  l.forEach((height,index)=>{
    bars[lstarter+index].style.height=`${(height/sizeofarray)*100}%`
  })
  return l
  
}


const mergesort = async function (array,side) {
  sidearray.push(side)
  // console.log(sidearray)
  // if (side==='right'){
  //   lstart+=l.length
  // }
  let midpoint = Math.floor(array.length/2)
  if (array.length<=1){
    return array
  }
  let left_half = array.slice(0,midpoint)
  // console.log(left_half)
  let right_half = array.slice(midpoint)
  // console.log(right_half)

  let left = await mergesort(left_half,'left')
  sidearray.pop()
  
  
  let right = await mergesort(right_half,'right')
  sidearray.pop()
  // if (side==='right'){
  //   lstart-=l.length
  // }
  return await merge(left,right)

}

const createarray = function (max) {
  const container = document.createElement('div')
  container.classList.add('container')
  div1.append(container)

  let test = []
  sizeofarray=max
  // console.log(sizeofarray)
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
var lstart = 0

const div1 = document.querySelector('#div1')
const generate = document.querySelector('#generate')
const callmergesort = document.querySelector('#mergesort')

var list = createarray(generate.value)
console.log(list)
var bars = document.querySelectorAll(".bar")
var sidearray = []

generate.addEventListener('input',()=>{
  console.log(generate.value)
  const container = document.querySelector('.container')
  container.remove()
  list = createarray(generate.value)
  console.log(list)
  bars = document.querySelectorAll(".bar")
})
callmergesort.addEventListener('click',()=>{
  sidearray = []
  mergesort(list)
})
// keep a recursion depth level tracker
// *this will be a list...probably declare in first level of recursion ....if reclevel is 1 const...
// *pass in arguement with def value undefined
// *everytime mergesrot is called it will pass in an arguement for parameter 'side' either left or right
// *append the value of side to this list and remove once the mergesort level is done
// traverse the list for highlighting the bar...when left is the value on list do anything, when right is the value add the length
// of the previous recursion depth level list...can get recursion depth level using length of leftrightlis
