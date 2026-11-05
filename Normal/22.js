let arr = [10, 20, 30, 40, 50, 60];
let count=0
for(let i=0;i<arr.length;i++){
    if(arr[i]<50){
        if(i%2!=0){
        count++
    }
    }
}
console.log(count);
