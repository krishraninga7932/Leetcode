let str = "I love javascript programming";
let count=0
let inWord=false

for(let i=0;i<str.length;i++){
    if(str[i]!==" " && inWord==false){
        count++
        inWord=true
    }
    if(str[i]==" "){
        inWord=false
    }
}

console.log(count);

