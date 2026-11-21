// STRING STARTS
let str = "javascript";
let vowel="aeiou"

let count=0
for(let i=0;i<str.length;i++){
    if(vowel.includes(str[i])){
        count++
    }
}
console.log(count);
