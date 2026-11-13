// let arr = [10, 20, 30, 20, 40, 10, 50];
let arr = [10, 20, 30, 20, 10];
for(let i=0;i<arr.length;i++){
    let count=0
    for(let j=i+1;j<arr.length;j++){
        if(i!=j && arr[i]==arr[j]){
            count++
        }
    }
    if(count==0){
        console.log(arr[i]);
        break
        
    }
}