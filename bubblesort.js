const bubblesort = async function (array) {
  let len = array.length
  for (let i=0;i<len;i++) {
    for (let j=0;j<len-i;j++) {
      if (array[j+1]<array[j]) {
        setBarBgImgColor(j,'var(--swapbar)')
        setBarBgImgColor(j+1,'var(--highlightbar)')

        await delay(30)

        swap(array,j,j+1)
        swapheight(j,j+1)

        setBarBgImgColor(j,'var(--bar)')
        setBarBgImgColor(j+1,'var(--bar)')

      }
    }
  }
}