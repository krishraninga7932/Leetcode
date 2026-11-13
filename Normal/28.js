let arr = [10, 40, 20, 50, 30, 50, 40, 60];
let largest=0
for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
        largest=arr[i]
    }
}
let slargest=-Infinity
for(let i=0;i<arr.length;i++){
    if(arr[i]>slargest && arr[i]<largest){
        slargest=arr[i]
    }
}
console.log(slargest);
