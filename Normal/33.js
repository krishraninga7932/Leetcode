let arr = [10, 20, 30, 40, 20, 10, 50, 60];
let newarr = []
for (let i = 0; i < arr.length; i++) {
    let count = 0
    for (let j = 0; j < arr.length; j++) {
        if (i != j && arr[i] == arr[j]) {
            count++
        }
    }
    if (count == 0) {
        newarr.push(arr[i])
    }

}
let res=0
for (let k = 0; k < newarr.length; k++) {
    res=newarr[1]
}
console.log(res);
