let arr = [1, 12, -5, -6, 50, 3];
let k = 3;
let sum=0
let avg=0

for(let i=0;i<k;i++){
    sum+=arr[i]
}

let maxsum=sum
for(let i=k;i<arr.length;i++){
    sum=sum-arr[i-k]+arr[i]
    if(sum>maxsum){
        maxsum=sum
    }
}

avg=maxsum/k

console.log(avg);

