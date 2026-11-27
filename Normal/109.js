let str="aaa"

let count=0

for(let i=0;i<str.length;i++){
    for(let j=i;j<str.length;j++){
        let sub=str.slice(i,j+1)
        let isPal=true

        for(let k=0;k<sub.length;k++){
            if(sub[k]!==sub[sub.length-1-k]){
                isPal=false
                break
            }
        }

        if(isPal) count++
    }
}

console.log(count);
