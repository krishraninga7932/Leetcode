let arr = [2, 8, 5, 11, 14, 3];
let target = 10;
let sum=0
let diff=0
let low = Infinity;
let first = 0;
let second = 0;

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        sum=arr[i]+arr[j]
        if(target>sum){
            diff=target-sum
        }else{
            diff=sum-target
        }

        if(diff<low){
            low=diff
            first=arr[i]
            second=arr[j]
        }
    }
}

console.log(first, second);
console.log("Difference:", low);