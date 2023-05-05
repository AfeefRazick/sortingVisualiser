// mergesort implementation is not ideal...was the first sort visualisation i implemented so uses inefficient code 
// to improve copy quicksort method

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
    
    await asyncdelay(30)
          
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
    
    await asyncdelay(30)

    bars[lstart+i-1].style.backgroundImage = 'var(--bar)'
  }

  while (j<right.length) {
    bars[lRightStart+j].style.backgroundImage = 'var(--highlightbar)'
    l.push(right[j])
    j+=1
    
    await asyncdelay(30)

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
