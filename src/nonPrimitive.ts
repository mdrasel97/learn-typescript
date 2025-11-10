// non Primitive: Array, Object

// let bazarList: string[] = ['eggs', 'milk', 'butter'];
// bazarList.push(12);

// let mixedArr: (string | number | boolean)[] = ['eggs', 2, true];
// mixedArr.push(true)


// // tuple
// let Coordinates: [number, number] = [34, 45];

// let raselNameAndAge : [string, number] = ['rasel', 25];


// const user: {
//     organization: 'programming hero',
//     isMarried: boolean,
//     firstName: string,
//     middleName: string,
//     lastName?: string //optional property
// } = {
//     firstName: 'MD',
//     middleName: 'RASEL',
//     lastName: 'something',
//     organization: 'some organization',
//     isMarried: true,
// }

// user.organization = 'programming hero'
// const user: {
//     readonly organization: string,
//     isMarried: boolean,
//     firstName: string,
//     middleName: string,
//     lastName?: string //optional property
// } = {
//     firstName: 'MD',
//     middleName: 'RASEL',
//     lastName: 'something',
//     organization: 'some organization',
//     isMarried: true,
// }

// user.organization = 'programming hero'

// console.log(user);




const friends:string[] = ['aboul', 'babul']

const schoolFriend: string[] = ['jamal', 'kamal']

const collageFriend: string[] = ['mr. monir', 'mr. balul']

// const [,myBestFriend] = schoolFriend
// Non-null assertion operator: !

friends.push(schoolFriend[1]!)
console.log(friends)

// Examples: object, array, function, class, tuple

// Interview Questions:

// Primitive আর Non-Primitive type এর মধ্যে পার্থক্য কী?

// Array এবং Object কীভাবে টাইপ করা হয়?

// Interview Questions:

// Object literal কী?

// Optional property কিভাবে define করা হয়?

// যদি object-এর কোনো property optional হয়, TypeScript কীভাবে তা handle করে?



// function add(nums: string[]){

// }

