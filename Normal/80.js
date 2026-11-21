// let str = "madam";
// let check = true;

// for (let i = 0; i < str.length; i++) {
//     for (let j = str.length - 1; j >= 0; j--) {

//         if (i + j == str.length - 1) {
//             if (str[i] != str[j]) {
//                 check = false;
//             }
//             break;
//         }

//     }
// }

// if (check) {
//     console.log("Palindrome");
// } else {
//     console.log("Not Palindrome");
// }

let str = "madam";
let check = true;

for (let i = 0; i < str.length; i++) {
    if(str[i]!=str[str.length-1-i]){
        check=false;
        break
    }
}

if (check) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}