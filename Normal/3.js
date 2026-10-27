let num=[1,8,272,688,88]
// let largest=0

// for(let i=0;i<num.length;i++){
//     for(let j=0;j<num.length;j++){
//         if(num[j]>num[i]){
//             largest=num[j]
//         }
//     }
// }
// console.log("largest number is:",largest)

let largest=num[0]
for(let i=0;i<num.length;i++){
    if(num[i]>largest){
        largest=num[i]
    }
}
console.log("largest number is:",largest)
