let arr1 = [1, 2, 3, 4, 5];
let arr2 = [2, 4, 6, 8];

let inter = []

// for(let i=0;i<arr1.length;i++){
//     for(let j=0;j<arr2.length;j++){
//         if(arr1[i]==arr2[j]){
//             inter.push(arr1[i])
//         }
//     }
// }

// console.log(inter);

let i = 0;
let result = [];

while (i < arr1.length) {
    let j = 0;
    while (j < arr2.length) {
        if (arr1[i] == arr2[j]) {
            result.push(arr1[i])
        }
        j++
    }
    i++
}
console.log(result);
