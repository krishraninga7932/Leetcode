let str = "JaVaScript Is FUN";
let count=0

for(let i=0;i<str.length;i++){

    if(str[i]!==" " && str[i]==str[i].toUpperCase()){
        count++
    }
}
console.log(count);
