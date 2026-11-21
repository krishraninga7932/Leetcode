let str = "JavaScript123Hello45";
let count=0
let digits="1234567890"

for(let i=0;i<str.length;i++){
    if(digits.includes(str[i])){
        count++
    }
}

console.log(count);
