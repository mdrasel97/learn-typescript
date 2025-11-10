// const course : string = 'Next Level Web Development';
// console.log(course)

function add(...nums: number[]): number {
    console.log(nums)
  return nums.reduce((a, b) => a + b, 0);
}

const numbers = [1, 2, 3];
const result = add(1, 2,3);
console.log(result); // 6
