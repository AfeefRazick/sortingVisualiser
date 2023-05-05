const selectionsort = async function (array) {
  const len=array.length

  for(let i=0;i<len-1;i++) {
    let min = i

    setBarBgImgColor(min,'var(--pivbar)')//set starting min value to yellow

    for(let j=i+1;j<len;j++) {

      setBarBgImgColor(j,'var(--highlightbar)')//set current camparison value [j] to green

      await asyncdelay(ms)
      setBarBgImgColor(j)
      if (array[j]<array[min]) {
        setBarBgImgColor(min)
        min = j
        setBarBgImgColor(min,'var(--pivbar)')
      }
      
    }
    setBarBgImgColor(min)

    setBarBgImgColor(min,'var(--swapbar)')//when swap color is red
    setBarBgImgColor(i,'var(--swapbar)')

    await asyncdelay(ms*3)
    swap(array,min,i)
    swapheight(min,i)

    setBarBgImgColor(min)
    setBarBgImgColor(i)

  }
}