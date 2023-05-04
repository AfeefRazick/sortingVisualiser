const partition = async function (array,low,high) {
  bars[high].style.backgroundImage='var(--pivbar)'
  pivot = array[high]

  i=low-1

  for (j=low;j<high;j++) {
    setBarBgImgColor(j,'var(--highlightbar)')
    // delay when going through list and comparing pivot with [j]--color green
    await delay(30)

    setBarBgImgColor(j)
    if (array[j]<=pivot) {
      i+=1

      if (i!=j) { // if the value is a smaller element but the swap is the same element i==j then dont delay and dont turn red
      setBarBgImgColor(j,'var(--swapbar)')
      setBarBgImgColor(i,'var(--swapbar)')

      // delay when swapping smaller than pivot value [j] with greater value index [i]
      await delay(100)
      }
      swap(array,i,j)
      swapheight(i,j)
      
      setBarBgImgColor(j)
      setBarBgImgColor(i)
    }
  }
  setBarBgImgColor(high,'var(--swapbar)')
  setBarBgImgColor(i+1,'var(--swapbar)')
  // delay for switching pivot with [i+1] --putting pivot in correct place--color red
  await delay(200)

  swap(array,i+1,high)
  swapheight(i+1,high)    

  setBarBgImgColor(high)
  setBarBgImgColor(i+1)
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