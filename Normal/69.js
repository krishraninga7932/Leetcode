let arr = [1, 2, 4, 6, 8, 9];
let target = 10;
let left=0
let right=arr.length-1

// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]+arr[j]==target){
//             console.log(arr[i],arr[j])
//         }
//     }
//  }

while(left<right){
    if(arr[left]+arr[right]==target){
        console.log(arr[left],arr[right]);
        
        left++
        right--
    }
}