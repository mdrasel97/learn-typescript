// non Primitive: Array, Object

let bazarList: string[] = ['eggs', 'milk', 'butter'];
bazarList.push(12);

let mixedArr: (string | number | boolean)[] = ['eggs', 2, true];
mixedArr.push(true)

let Coordinates: [number, number] = [34, 45];

let raselNameAndAge : [string, number] = ['rasel', 25];


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
const user: {
    readonly organization: string,
    isMarried: boolean,
    firstName: string,
    middleName: string,
    lastName?: string //optional property
} = {
    firstName: 'MD',
    middleName: 'RASEL',
    lastName: 'something',
    organization: 'some organization',
    isMarried: true,
}

user.organization = 'programming hero'

console.log(user);