let arr = [10, 25, 30, 15, 50, 35, 40];
let sum = 0;
for(let i=0;i<arr.length;i++){
    if(i%2==0){
        if(arr[i]>20){
            sum+=arr[i]
        }
    }
}
console.log(sum);
