let arr = [4, 7, 1, 9, 3, 8];
let sum = 0
let largest = 0
let seclargest = -Infinity
let first = 0
let sec = 0

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        sum = arr[i] + arr[j]
        if (sum > largest) {
            largest = sum
        }
    }
}

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        sum=arr[i]+arr[j]
        if (sum > seclargest && sum < largest) {
            seclargest=sum
            first=arr[i]
            sec=arr[j]
            
        }
    }
}

console.log(seclargest);
console.log(first, sec);
