let arr1 = [1, 2, 3, 0, 0, 0];
let m = 3;

let arr2 = [2, 5, 6];
let n = 3;
let temp=0

for(let i=0;i<arr1.length;i++){
    if(arr1[i]==0){
        arr1.splice(i,1)
        i--
    }
}
for(let j=0;j<arr2.length;j++){
    arr1.push(arr2[j])
}

for(let i=0;i<arr1.length;i++){
    for(let j=i+1;j<arr1.length;j++){
        if(arr1[i]>arr1[j]){
            temp=arr1[i]
            arr1[i]=arr1[j]
            arr1[j]=temp
        }
    }
}


console.log(arr1);

