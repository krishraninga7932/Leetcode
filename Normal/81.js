// let str = "hello world";
let str = "nurses run";
let newstr=""
let check=true



for(let i=0;i<str.length;i++){
    if(str[i]!=" "){
        newstr+=str[i]
    }
}

for(let i=0;i<newstr.length;i++){
    if(newstr[i]!==newstr[newstr.length-i-1]){
        check=false
        break
    }
}

if(check){
    console.log("Pallindrome");
}else{
    console.log("Not Pallindrome");
}