let arr = [12, -1, 7, 8, -15, 30, 16, 28];
let k = 3;

let negative = [];

for(let i=0;i<k;i++){
    if(arr[i]<0){
        negative.push(i)
    }
}

if(negative.length>0){
    console.log(arr[negative[0]]);
}else{
    console.log(0);
}

for(let i=k;i<arr.length;i++){
    if(negative.length>0 && negative[0]<=i-k){
        negative.shift()
    }

    if(arr[i]<0){
        negative.push(i)
    }

    if(negative.length>0){
        console.log(arr[negative[0]]);
    }else{
        console.log(0);
        
    }

}
