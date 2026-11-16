// let arr = [0, 1, 0, 3, 12];
// let newarr=[]

// for(let i=0;i<arr.length;i++){
//     if(arr[i]!=0){
//         newarr.push(arr[i])
//     }
// }
// for(let i=0;i<arr.length;i++){
//     if(arr.length>newarr.length){
//         newarr.push(0)
//     }
// }



// console.log(newarr);


let arr = [0, 1, 0, 3, 12];
let left=0
let temp=0

for(let i=0;i<arr.length;i++){
    if(arr[i]!=0){
        temp=arr[i]
        arr[i]=arr[left]
        arr[left]=temp

        left++
    }
}

console.log(arr);

