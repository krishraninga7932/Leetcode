// let str = "programming";
// let char = "r";

// let pos=str.indexOf(char)

// console.log(pos);


// let str = "programming";
// let char = "r";

// let pos=str.indexOf(char,2)

// console.log(pos);


let str = "banana";
let char = "a";


let start=0
for(let i=0;i<str.length;i++){
    let pos=str.indexOf(char,start)

    if(pos!==-1){
        console.log(pos);
        start=pos+1
        
    }
    else{
        break
    }
    
}

