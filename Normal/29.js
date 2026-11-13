let arr = [1, 2, 3, 5, 6, 8];
for (let i = 1; i < arr.length; i++) {
    let found = false
    for (let j = 0; j < arr.length; j++) {
        if (i == arr[j]) {
            found = true
            break
        }
    }
    if (found == false) {
        console.log("Missing number:", i);
        break;
    }
}