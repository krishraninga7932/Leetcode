let arr = [8, 3, 12, 5, 20, 7];
let diff=0
let low=Infinity
let first=0
let sec=0


for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            diff=arr[i]-arr[j]
        }else{
            diff=arr[j]-arr[i]
        }
        if(diff<low){
            low=diff
            first=arr[i]
            sec=arr[j]
            
        }
    }
}
console.log(first,sec);

console.log(low);
