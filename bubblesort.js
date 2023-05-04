const bubblesort = async function (array) {
  let len = array.length
  for (let i=0;i<len;i++) {
    for (let j=0;j<len-i;j++) {
      if (array[j+1]<array[j]) {
        bars[j].style.backgroundImage='var(--swapbar)'
        bars[j+1].style.backgroundImage='var(--highlightbar)'

        await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 50)
        )

        swap(array,j,j+1)
        swapheight(j,j+1)

        bars[j].style.backgroundImage='var(--bar)'
        bars[j+1].style.backgroundImage='var(--bar)'

      }
    }
  }
}