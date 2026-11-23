let str = "  I   love    javascript  ";
let result = "";
let space = false;

for(let i=0;i<str.length;i++){
    if(str[i]!==" "){
        result+=str[i]
        space=false
    }else{
        if(space==false && result.length>0){
            result+=" "
            space=true
        }
    }
}

console.log(result);
