let str1 = "ace";
let str2 = "abcde";
let condition=true
let lastIndex=-1

for(let i=0;i<str1.length;i++){
    let curInd=str2.indexOf(str1[i],lastIndex+1)
    if(curInd==-1){
        condition=false;
        break
    }
    lastIndex=curInd
}
if(condition==true){
    console.log("true");
}else{
    console.log("false")
}