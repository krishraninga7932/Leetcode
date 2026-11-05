let arr = [3, 6, 9, 12, 15, 18];
let count=0
for(let i=0;i<arr.length;i++){
    if(arr[i]%2!=0){
        count++
        console.log(arr[i]);
        
    }
}
console.log("total odd numbers:",count)