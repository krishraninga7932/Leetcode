let str = "programming";
let res=""

for(let i=0;i<str.length;i++){
    if(!res.includes(str[i])){
        res+=str[i]
    }
}
console.log(res);
