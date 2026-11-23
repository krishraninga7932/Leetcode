let str1 = "aabbccdd";
let str2 = "abcddcba";
let ana = true


if (str1.length != str2.length) {
    ana = false
}
else {
    for (let i = 0; i < str1.length; i++) {
        let count1 = 0
        let count2 = 0

        for (let j = 0; j < str1.length; j++) {
            if (str1[i] == str1[j]) {
                count1++
            }
        }

        for (let j = 0; j < str1.length; j++) {
            if (str1[i] == str2[j]) {
                count2++
            }
        }

        if (count1 !== count2) {
            ana = false
            break
        }


    }
}

if (ana == true) {
    console.log("Anagram");
} else {
    console.log("Not anagram")
}