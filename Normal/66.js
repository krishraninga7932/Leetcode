let arr = [1, 3, -1, -3, 5, 3, 6, 7];
let k = 3;

let max=0
let maxarr=[]

for(let i=0;i<k;i++){
    if(arr[i]>max){
        max=arr[i]
    }
}

maxarr.push(max)

for(let i=k;i<arr.length;i++){
    if(max==arr[i-k]){
        max=arr[i-k+1]
        for(let j=i-k+1;j<=i;j++){
            if(arr[i]>max){
                max=arr[i]
            }
        }
    }else if(arr[i]>max){
        max=arr[i]
    }
    maxarr.push(max)
}

console.log(maxarr);

