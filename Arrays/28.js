
let nums = [2, 2, 3, 1];

let first = -Infinity;

for(let i=0;i<nums.length;i++){
    if(nums[i]>first){
        first=nums[i]
    }
}

let second = -Infinity;

for(let i=0;i<nums.length;i++){
    if(nums[i]<first && second<nums[i]){
        second=nums[i]
    }
}

let third = -Infinity;

for(let i=0;i<nums.length;i++){
    if(nums[i]<second && third<nums[i]){
        third=nums[i]
    }
}

if(third===-Infinity){
    console.log(first);
}
else{
    console.log(third);
}
