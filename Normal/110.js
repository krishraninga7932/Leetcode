let str1 = "JavaScript";
let str2 = "javascript";

let condition = true

if (str1.length === str2.length) {
    for (let i = 0; i < str1.length; i++) {
        if (str1[i].toLowerCase() !== str2[i].toLowerCase()) {
            condition = false
            break
        }
    }
} else {
    condition = false
}

if(condition==true){
    console.log(true);
    
}else{
    console.log(false);
    
}