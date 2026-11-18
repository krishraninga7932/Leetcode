let arr = [2, 4, 3, 5, 6, 1, 8];
let k = 3;
let sum = 0
let count = 0

for (let i = 0; i < k; i++) {
    sum += arr[i]
}
if (sum % 2 == 0) {
    count++
}
for (let i = k; i < arr.length; i++) {
    sum = sum - arr[i - k] + arr[i]

    if (sum % 2 == 0) {
        count++
    }

}

console.log(count);

