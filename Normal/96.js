let str1 = "waterbottle";
let str2 = "erbottlewat";

let condition = false

if (str1.length === str2.length) {
    let combined = str1 + str1
    if (combined.indexOf(str2) !== -1) {
        condition = true
    }

}
if(condition == true){
    console.log("true");
}else{
    console.log("false");
}