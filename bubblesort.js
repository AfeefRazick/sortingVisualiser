const bubblesort = async function (array) {
  let len = array.length-1
  for (let i=0;i<len;i++) {
    for (let j=0;j<len-i;j++) {
      setBarBgImgColor(j,'var(--highlightbar)')
      setBarBgImgColor(j+1,'var(--highlightbar)')
      await asyncdelay(ms)
      if (array[j+1]<array[j]) {
        setBarBgImgColor(j,'var(--swapbar)')
        setBarBgImgColor(j+1,'var(--swapbar)')

        await asyncdelay(ms*3)

        swap(array,j,j+1)
        swapheight(j,j+1)

      }
      setBarBgImgColor(j,'var(--bar)')
      setBarBgImgColor(j+1,'var(--bar)')

    }
  }
}