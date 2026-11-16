// let arr = [10, 20, 30, 40, 50];
// let newarr=[]
// let temp=0

// for(let i=arr.length-1;i>=0;i--){
//     newarr.push(arr[i])
// }

// console.log(newarr);


let arr = [10, 20, 30, 40, 50];

let left=0
let right=arr.length-1
let temp=0

while(left < right){
    temp=arr[left]
    arr[left]=arr[right]
    arr[right]=temp
    left++
    right--
}

console.log(arr);
