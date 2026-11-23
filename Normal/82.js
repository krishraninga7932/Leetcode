// let str = "hello world";
let str = "I love javascript";
let result = ""
let word = ""


for (let i = 0; i < str.length; i++) {
    if (str[i] != ' ') {
        word += str[i]
    } else {
        for (let j = word.length - 1; j >= 0; j--) {
            result += word[j]
        }

        result+=" "
        word=""
    }

}

for(let j=word.length-1;j>=0;j--){
    result+=word[j]
}

console.log(result);
