let str = "aabbbccccdd";
let max = 0
let maxchar=""

for (let i = 0; i < str.length; i++) {
    let count = 0
    for (let j = 0; j < str.length; j++) {
        if (str[i] == str[j]) {
            count++
        }
    }
    if (count > max) {
        max = count
        maxchar=str[i]
    }

}
for (let i = 0; i < str.length; i++) {
    if (max) {
        console.log(`${maxchar} appears ${max} times`)
        break
    }
}