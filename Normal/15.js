let arr = [5, -2, 0, 8, -4, 0, 10, -3];
let pcount=0
let ncount=0
let zcount=0

for(let i =0;i<arr.length;i++){
    if(arr[i]==0){
        zcount++
    }
    else if(arr[i]>0){
        pcount++
    }else{
        ncount++
    }
}
console.log("Positive Number:",pcount);
console.log("Negative Number:",ncount);
console.log("Zero:",zcount);
