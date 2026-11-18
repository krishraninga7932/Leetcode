let arr = [2, 1, 5, 1, 3, 2];
let k = 7;

let left = 0;
let sum = 0;
let maxLength = 0;

for(let i=0;i<arr.length;i++){
    sum+=arr[i]
    while(sum>k){
        sum=sum-arr[left]
        left++
    }

    let length=i-left+1
    if(length>maxLength){
        maxLength=length
    }
}

console.log(maxLength);
