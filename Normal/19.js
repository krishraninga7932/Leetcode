let arr = [2, 5, 8, 3, 10, 7];
let res=0
let esum=0
let osum=0
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        esum+=arr[i]
    }
    if(arr[i]%2!=0){
        osum+=arr[i]
    }
}
res=esum-osum
console.log(res);
