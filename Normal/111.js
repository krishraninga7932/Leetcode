let str1 = "paper";
let str2 = "title";

let map1=""
let map2=""

let condition=true

if(str1.length!==str2.length){
    condition=false
}else{
    for(let i=0;i<str1.length;i++){
        if(map1.includes(str1[i])){
            let index=map1.indexOf(str1[i])

            if(map2[index]!==str2[i]){
                condition=false
                break
            }
        }else{
            if(map2.includes(str2[i])){
                condition=false
                break
            }
            map1+=str1[i]
            map2+=str2[i]
        }
    }
}

if(condition){
    console.log(true);
    
}else{
    console.log(false);
    
}