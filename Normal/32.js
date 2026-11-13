let arr = [10, 20, 30, 20, 10, 40, 50, 10];
for(let i=0;i<arr.length;i++){
    let count=0
    for(let j=0;j<arr.length;j++){
        if(i!=j && arr[i]==arr[j]){
            count++
        }
    }
    if(count==1){
        console.log(arr[i]);
        break
    }
}