let arr = [2, 7, 11, 15, 3, 6];
let target = 9;
let foun=false

for(let i=0;i<arr.length;i++){
    let count=0
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]==target){
            count++
        }
        if(count==1){
            console.log(arr[i],arr[j])
            foun=true
            break
        }
    }
    if(foun==true){
        break
    }
}