let arr = [2, 4, -3, 5, 6, -1, 8, 3];
let k = 3;
let count = 0
let ncount = 0
let sum=0

for (let i = 0; i < k; i++) {
    sum += arr[i]
    if (arr[i] < 0) {
        ncount++
    }
}
if(ncount==0){
    count++
}

for (let i = k; i < arr.length; i++) {
    
    if(arr[i-k]<0) ncount--
    if(arr[i]<0) ncount++

    if(ncount==0) count++

}

console.log(count);
