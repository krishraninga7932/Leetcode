let arr = [1, 2, 3, 4, 6, 8, 9];
let target = 10;

let left=0
let right=arr.length-1


while(left<right){
    if(arr[left]+arr[right]==target){
        console.log(arr[left], arr[right]);
        left++
        right--
    }else if(arr[left]+arr[right]<target){
        left++
    }else{
        right--
    }
}
