let arr = [8, 3, 12, 5, 20, 7];
let sum=0
let smallest=Infinity
let secsmallest=Infinity
let first=0
let sec=0

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        sum=arr[i]+arr[j]
        if(sum<smallest){
            smallest=sum
        }
    }
}


for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        sum = arr[i] + arr[j];
        if(sum>smallest && sum<secsmallest){
            secsmallest=sum
            first=arr[i]
            sec=arr[j]
        }
    }
}

console.log(first,sec);
console.log(secsmallest);
