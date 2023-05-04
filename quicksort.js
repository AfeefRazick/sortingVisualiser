const partition = async function (array,low,high) {
  bars[high].style.backgroundImage='var(--pivbar)'
  pivot = array[high]

  i=low-1

  for (j=low;j<high;j++) {
    bars[j].style.backgroundImage='var(--highlightbar)'
    // delay when going through list and comparing pivot with [j]--color green
    await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 50)
      )
    bars[j].style.backgroundImage='var(--bar)'
    if (array[j]<=pivot) {
      i+=1

      if (i!=j) { // if the value is a smaller element but the swap is the same element i==j then dont delay and dont turn red
      bars[j].style.backgroundImage='var(--swapbar)'
      bars[i].style.backgroundImage='var(--swapbar)'

      // delay when swapping smaller than pivot value [j] with greater value index [i]
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 100)
      )
      }
      swap(array,i,j)
      swapheight(i,j)
      
      bars[j].style.backgroundImage='var(--bar)'
      bars[i].style.backgroundImage='var(--bar)'
    }
  }
  bars[high].style.backgroundImage='var(--swapbar)'
  bars[i+1].style.backgroundImage='var(--swapbar)'
  // delay for switching pivot with [i+1] --putting pivot in correct place--color red
  await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 200)
      )

  swap(array,i+1,high)
  swapheight(i+1,high)    

  bars[i+1].style.backgroundImage='var(--bar)'
  bars[high].style.backgroundImage='var(--bar)'
  return i+1
}

const quicksort = async function (array,low,high) {
  if (low>=high) {
    return
  }
  let partIndex = await partition(array,low,high)

  await quicksort(array,low,partIndex-1)

  await quicksort(array,partIndex+1,high)
  console.log(list)
}


// best case nlogn
// worst case n**2 
// this impleemntation uses end value of array as pivot
// this means for an already sorted array this is the worst possible pivot
// a better method of choosing pivot can be random choice
// or median method

// red means swap
// yellow is pivot
// green means comparing or less than