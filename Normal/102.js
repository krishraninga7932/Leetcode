let str = "hello world javascript programming";
let result=""
let makeTrue=true

for(let i=0;i<str.length;i++){
    if(str[i]!==" "){
        if(makeTrue==true){
            result+=str[i].toUpperCase()
            makeTrue=false
        }else{
            result+=str[i].toLowerCase()
        }
    }else{
        result+=" "
        makeTrue=true
    }
}

console.log(result);


