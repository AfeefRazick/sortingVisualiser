// mergesort implementation is not ideal...was the first sort visualisation i implemented so uses inefficient code 
// to improve copy quicksort method

const merge = async function (array, l, m, r) {
    var n1 = m - l + 1;
    var n2 = r - m;
 
    var L = []
    var R = []
 
    for (var i = 0; i < n1; i++)
        L[i] = array[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = array[m + 1 + j];
 
    var i = 0;
    var j = 0;
    var k = l;
 
    while (i < n1 && j < n2) {
        setBarBgImgColor(l+i,'var(--highlightbar)')
        setBarBgImgColor(m+j,'var(--highlightbar)')

        await asyncdelay(ms)

        setBarBgImgColor(l+i,'var(--bar)')
        setBarBgImgColor(m+j,'var(--bar)')
        if (L[i] <= R[j]) {
            array[k] = L[i];
            
            i++;
        }
        else {
            array[k] = R[j];
            j++;
        }

        bars[k].style.height = `${(array[k]/sizeofarray)*100}%`
        k++;
    }
 
    while (i < n1) {
        setBarBgImgColor(l+i,'var(--highlightbar)')
        array[k] = L[i];
        i++;

        await asyncdelay(ms)

        setBarBgImgColor(l+i-1,'var(--bar)')

        bars[k].style.height = `${(array[k]/sizeofarray)*100}%`
        k++;
    }
 
    while (j < n2) {
        setBarBgImgColor(m+j,'var(--highlightbar)')
        array[k] = R[j];
        j++;
        
        await asyncdelay(ms)

        setBarBgImgColor(m+j-1,'var(--bar)')

        bars[k].style.height = `${(array[k]/sizeofarray)*100}%`
        k++;
    }
}
 
const mergesort = async function (array,l, r){
    if(l>=r){
        return;
    }
    var m =l+ Math.floor((r-l)/2);
    await mergesort(array,l,m);
    await mergesort(array,m+1,r);
    await merge(array,l,m,r);
    
}