let arr = [3, 2, 2, 3];
let val = 3;
let i=0
let j=0

while(i<arr.length){
    if(arr[i]!=val){
        arr[j]=arr[i]
        j++
    }
    i++
}
console.log(arr);
