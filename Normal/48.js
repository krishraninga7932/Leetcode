let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];

// let merge=[...arr1,...arr2]
// merge.sort((a,b)=>a-b)
// console.log(merge);

let merge=[]
let i=0
let j=0

while(i<arr1.length){
    merge.push(arr1[i])
    i++
}

while(j<arr2.length){
    merge.push(arr2[j])
    j++
}

merge.sort((a,b)=>a-b)

console.log(merge);
