let arr = [12, 45, 7, 89, 23, 45, 67];
let max=arr[0]
let sec=-Infinity
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i] 
    }
}
for(let i=0;i<arr.length;i++){
    if(arr[i]<max && arr[i]>sec){
        sec=arr[i]
    }
}
console.log("Second largest:", sec);