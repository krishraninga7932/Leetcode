let arr = [9, 3, 7, 1, 5, 2];
let temp=0

for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
        if(arr[i]>arr[j]){
            temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
        }
    }
}

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            let tem=arr[i]
            arr[i]=arr[j]
            arr[j]=tem
        }
    }
}
console.log(arr);


