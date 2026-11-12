let arr = [10, 20, 30, 20, 40, 10, 50];
let sum = 0;

for(let i=0;i<arr.length;i++){
    let count=1
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            count++
        }
    }
    if(count!=1){
        sum+=arr[i]
    }
}
console.log(sum);
