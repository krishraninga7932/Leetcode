let arr = [0, 1, 0, 3, 12, 0, 5];

let left=0
right=0


let temp=0

while(right<arr.length){
    if(arr[right]!=0){
        temp=arr[left]
        arr[left]=arr[right]
        arr[right]=temp
        left++
    }
    right++
}

console.log(arr);
