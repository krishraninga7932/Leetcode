let arr = [10, 20, 30, 40, 50, 60];
let sum=0
for(let i=0;i<arr.length;i++){
    if(i%2==0){
        sum+=arr[i]
    }
}
console.log(sum);
