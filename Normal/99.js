let str = "abcd";

for(let i =0;i<str.length;i++){
    let rotated=str.slice(i)+str.slice(0,i)
    console.log(rotated);
    
}