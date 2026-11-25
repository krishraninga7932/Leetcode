let str = "aabbacaa";
let char = "a";

let count=0
let start=0

for(let i=0;i<str.length;i++){
    let pos=str.indexOf(char,start)

    if(pos!=-1){
        count++
        start=pos+1
    }else{
        break
    }
}

console.log(count);
