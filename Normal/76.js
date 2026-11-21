let str = "Hello123@#World45!";
let letters = 0;
let digits = 0;
let special = 0;

let num="0123456789"

for(let i=0;i<str.length;i++){
    if(num.includes(str[i])){
        digits++
    }else if((str[i]>="A" && str[i]<="Z")||(str[i]>="a" && str[i]<="z")){
        letters++
    }else{
        special++
    }
}

console.log("Letters",letters);
console.log("Digits",digits);
console.log("Special",special);
