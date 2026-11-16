let arr = [1, 1, 2, 2, 3, 4, 4, 5];

// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             arr.splice(j,1)
//             j--
//         }
//     }
// }


let left=0
let right=1

while(right<arr.length){
    if(arr[left]!==arr[right]){
        left++
        arr[left]=arr[right]
    }
    right++
}
arr.length = left + 1;


console.log(arr);