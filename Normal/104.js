let str = "javascript";
let vowels = "aeiou"
let res = ""

for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
        res += str[i]
    }
}
for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
            res += str[i]
    }
}



console.log(res);
