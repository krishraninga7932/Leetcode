let str = "I love javascript programming";
let res=""
let word=""

for(let i=0;i<str.length;i++){
    if(str[i]!==" "){
        word+=str[i]
    }else{
        res=word+" "+res
        word=""
    }
}

res=word+" "+res


console.log(res.trim());
