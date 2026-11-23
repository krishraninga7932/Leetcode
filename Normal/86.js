let str = "aabbccc";
let visited=""

for(let i=0;i<str.length;i++){
    if(visited.includes(str[i])) continue
    let count=0
    for(let j=0;j<str.length;j++){
        if(str[i]==str[j]){
            count++
        }
    }
    console.log(`${str[i]} appears ${count} times`)

    visited+=str[i]
}

