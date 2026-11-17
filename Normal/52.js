let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

let left=0
let right=height.length-1
let maxarea=0

while(left<right){
    let area = Math.min(height[left],height[right])*(right-left)
    if(area>maxarea){
        maxarea=area
    }

    if(height[left]<height[right]){
        left++
    }else{
        right--
    }



}
console.log(maxarea);
