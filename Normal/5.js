let n=[2,7]
let target=9
let sum=0
for(let i=0;i<n.length;i++){
    sum+=n[i]
}
if(sum==target){
    console.log("Equal");
}else{
    console.log("Not Equal")
}