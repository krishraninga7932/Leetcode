
let str = "I love javascript programming";

let longest = "";
let word = "";

for(let i =0;i<str.length;i++){
    if(str[i]!==" "){
        word+=str[i]
    }else{
        if(word.length>longest.length){
            longest=word
        }
        word=""
    }
}
if(word.length>longest.length){
    longest=word
}

console.log(longest);

