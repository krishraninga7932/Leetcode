let arr = [12, 15, 18, 21, 24, 27, 30];
let count=0
for(let i=0;i<arr.length;i++){
    if(i%2!=0){
        if(arr[i]%5==0){
            count++
        }
    }
}
console.log(count);
