let arr = [2, 8, 4, 10, 6, 12, 5];
let target = 4;

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
       if(arr[i]>arr[j]){
         if(arr[i]-arr[j]==target){
            console.log(arr[i],arr[j]);
        }
       }
       else{
         if(arr[j]-arr[i]==target){
            console.log(arr[i],arr[j]);
        }
       }
    }
}