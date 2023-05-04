const swap = function (array,lefti,rightj) {
  let temp = array[lefti]
  array[lefti]=array[rightj]
  array[rightj]=temp
}

const partition = async function (array,low,high) {

  pivot = array[high]

  i=low-1

  for (j=low;j<high;j++) {
    if (array[j]<=pivot) {
      i+=1
      
      swap(array,i,j)
    }
  }
  
  swap(array,i+1,high)

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
// var arr=[34,5,6,345,64,3,4,76]
// console.log(arr)
// let lent = arr.length
// quicksort(arr,0,lent-1)
// console.log(arr)


// best case nlogn
// worst case n**2 
// this impleemntation uses end value of array as pivot
// this means for an already sorted array this is the worst possible pivot
// a better method of choosing pivot can be random choice
// or median method