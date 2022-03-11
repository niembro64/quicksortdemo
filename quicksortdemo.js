const partition = (arr) => {
    const pivot = arr[0];
    let pivi = 0;

    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] < pivot) {
            ++pivi;
            for (let j = i - 1; j >= 0; --j) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return pivi;
};

const quickSort = (arr) => {
    if (arr.length <= 1){
        return arr;
    }
    // console.log(arr)
    const pivi = partition(arr);
    
    let arrLeft = arr.slice(0, pivi);
    let arrRight = arr.slice(pivi + 1);

    arrLeft = quickSort(arrLeft);
    arrRight = quickSort(arrRight);
    
    // console.log(...arrLeft, arr[pivi], ...arrRight)

    // arrLeft.concat(pivi).concat(arrRight);

    return [...arrLeft, arr[pivi], ...arrRight];
};

a = [7, 45, 2, 67, 3, 2, 1];
// a = [3,65,7];

console.log("before: " + a);
console.log("after : " + quickSort(a));
