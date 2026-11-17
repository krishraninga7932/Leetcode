let arr = [4, 2, 7, 1, 3, 6, 2];
let k = 3;

let sum=0

for(let i=0;i<k;i++){
    sum+=arr[i]
}

let maxsum=sum
for(let i=k;i<arr.length;i++){
    sum=sum-arr[i-k]+arr[i]
    if(sum<maxsum){
        maxsum=sum
    }
}

console.log(maxsum);
