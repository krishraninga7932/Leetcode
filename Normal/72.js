let arr = [2, 5, 1, 8, 3, 4, 6];
let k = 3;

let maxsum=0
let sum=0

for(let i=0;i<k;i++){
    sum+=arr[i]
}

if(sum>maxsum){
    maxsum=sum
}


for(let i=k;i<arr.length;i++){
    sum=sum-arr[i-k]+arr[i]

    if(sum>maxsum){
        maxsum=sum
    }

}

console.log(maxsum);
