let str1 = "JavaScript";
let str2 = "javascripp";

let cond = true

if (str1.length === str2.length) {
    for (let i = 0; i < str1.length; i++) {
        if (str1.toLowerCase()!==str2.toLowerCase()) {
            cond = false
            break
        }
    }
}else{
    cond=false
}

if (cond == true) {
    console.log(true)
} else {
    console.log(false)
}