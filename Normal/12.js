let arr = [2, 4, 2, 6, 2, 8, 4];
for(let i=0;i<arr.length;i++){
    let count=0
    for(let j=0;j<arr.length;j++){
        if(arr[i]==arr[j]){
            count++
        }
    }
    console.log(`${arr[i]} comes ${count} times`);
}
