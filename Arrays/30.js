
let nums = [1, 2, 2, 3, 1, 4, 2];

let max = 0;
let minLength = nums.length;

for (let i = 0; i < nums.length; i++) {

    let count = 0;
    let firstIndex = -1;
    let lastIndex = -1;

    for (let j = 0; j < nums.length; j++) {

        if (nums[i] === nums[j]) {
            count++;

            if (firstIndex === -1) {
                firstIndex = j;
            }

            lastIndex = j;
        }
    }

    let length = lastIndex - firstIndex + 1;

    if (count > max) {
        max = count;
        minLength = length;
    }
    else if (count === max && length < minLength) {
        minLength = length;
    }
}

console.log(minLength);
