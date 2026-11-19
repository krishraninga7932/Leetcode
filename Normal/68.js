let arr = [2, 3, 2, 5, 3, 2, 7];

for (let i = 0; i < arr.length; i++) {
    let alreadyCounted = false;
    for (let j = 0; j < i; j++) {
        if (arr[i] == arr[j]) {
            alreadyCounted = true
            break
        }
    }
    if (alreadyCounted) {
        continue
    }
    let count = 0
    for (let k = 0; k < arr.length; k++) {
        if (arr[i] == arr[k]) {
            count++
        }
    }
    console.log(`${arr[i]} appears ${count} times`);

}