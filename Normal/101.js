
let str = "I love javascript programming";

let longest = 0;
let word = "";

for(let i = 0; i < str.length; i++){

    if(str[i] !== " "){
        word += str[i];
    }else{
        if(word.length > longest){
            longest = word.length;
        }

        word = "";
    }
}

// Last word comparison
if(word.length > longest){
    longest = word.length;
}

console.log(longest);
