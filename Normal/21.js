let arr = [10, 20, 30, 40, 50, 60];
let count=0
for(let i=0;i<arr.length;i++){
    if(i%2==0){
        if(arr[i]>25){
            count++
        }
    }
}
console.log(count);
