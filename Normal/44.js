let arr = [10, 20, 30, 40, 50];
let temp=0

temp=arr[0]
arr[0]=arr[arr.length-1]
arr[arr.length-1]=temp

console.log(arr);
