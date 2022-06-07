const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const nums5 = numbers.filter((val) => val > 5);
console.log(nums5);

const mappedNums = numbers.map((val) => ({ num: val }));
console.log(mappedNums);

const multiNums = numbers.reduce((curRes, curVal) => curRes * curVal, 1);
console.log(multiNums);

function findMax(...nums) {
    let curMax = nums[0];
    for (const num of nums) {
        if (num > curMax) {
            curMax = num;
        }
    }
    return curMax;
}

console.log(findMax(...numbers));

function findMinMax(...nums) {
    let curMax = nums[0];
    let curMin = nums[0];
    for (const num of nums) {
        if (num > curMax) {
            curMax = num;
        }
        if (num < curMin) {
            curMin = num;
        }
    }
    return [curMin, curMax];
}

const [min, max] = findMinMax(...numbers);

console.log(min, max);

const userIds = new Set();
userIds.add(10);
userIds.add(-5);

console.log(userIds);

