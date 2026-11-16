let arr = [10, 20, 30, 40, 50];
let temp=0

// temp=arr[1]
// arr[1]=arr[arr.length-2]
// arr[arr.length-2]=temp

// console.log(arr);


// let i=1
// let j=arr.length-2
// while(i>j){
//     temp=arr[i]
//     arr[i]=arr[j]
//     arr[j]=temp
//     i++
//     j--
// }
// console.log(arr);

for(let i=0;i<1;i++){
    temp=arr[i]
    arr[i]=arr[arr.length-1-i]
    arr[arr.length-1-i]=temp
}
console.log(arr);


