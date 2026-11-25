let str1 = "hello";
let str2 = "hell";

let condition=false

if(str1.length==str2.length){
    let combined=str1+str1
    if(combined.indexOf(str2)!==-1){
        condition=true
    }
}

if(condition){
    console.log(true);
    
}else{
    console.log(false);
    
}