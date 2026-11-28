let str1 = "ace";
let str2 = "abcde";

let condition=true
let lastIndex=-1

for(let i=0;i<str1.length;i++){
    let cind=str2.indexOf(str1[i],lastIndex+1)   
    if(cind==-1){
        condition=false
        break
    }
    lastIndex=cind
}

if(condition==true){
    console.log(true);
}else{
    console.log(false);
    
}

