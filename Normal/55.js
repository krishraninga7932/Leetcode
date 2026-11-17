let arr = [1, 1, 2, 2, 3, 3, 4, 5, 5];

let left=0
let right=1
let temp=0

while(left<arr.length-1){
    if(arr[left]==arr[right]){
        arr.splice(left,1)
    }
    left++
    right++
}
console.log(arr);

