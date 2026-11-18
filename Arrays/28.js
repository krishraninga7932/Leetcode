
let nums = [2, 2, 3, 1];

let first = -Infinity;

for (let i = 0; i < nums.length; i++) {
    if (nums[i] > first) {
        first = nums[i];
    }
}

let sec = -Infinity;

for (let i = 0; i < nums.length; i++) {
    if (nums[i] < first && nums[i] > sec) {
        sec = nums[i];
    }
}

let third = -Infinity;

for (let i = 0; i < nums.length; i++) {
    if (nums[i] < sec && nums[i] > third) {
        third = nums[i];
    }
}

if (third === -Infinity) {
    console.log(first);
} else {
    console.log(third);
}
