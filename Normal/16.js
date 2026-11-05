let arr = [12, 45, 7, 89, 23];
let max=arr[0]
let min=arr[0]
let res=0
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i]
    }
    if(arr[i]<min){
        min=arr[i]
    }
}
res=max-min
console.log("result:",res);
