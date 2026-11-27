// let str = "abcabcbb";
// let longest=""
// let count=0

// for(let i=0;i<str.length;i++){
//     if(!longest.includes(str[i])){
//         longest+=str[i]
//         count++
//     }
// }

// console.log(longest);
// console.log(count);



let str = "pwwkew";

let longest = "";
let current = "";

for(let i = 0; i < str.length; i++){

    if(!current.includes(str[i])){
        current += str[i];
    }else{
        current = current.slice(current.indexOf(str[i]) + 1);
        current += str[i];
    }

    if(current.length > longest.length){
        longest = current;
    }
}

console.log(longest);
console.log(longest.length);

