//type 
type User = {
    id: number,
    name:{
        firstName: string,
        lastName: string
    },
    gender: 'male' | 'female', // union type
    contactNo: string,
    address:{
        division: string,
        city: string,
    }


}

const user1: User  = {
    id: 123,
    name: {
        firstName: 'mr.',
        lastName: 'Md'
    },
    gender: 'male',
    contactNo: '0170000000',
    address: {
        division: 'cumilla',
        city: 'cumilla'
    }
}
const user2: User = {
    id: 123,
    name: {
        firstName: 'mr.',
        lastName: 'Y'
    },
    gender: 'female',
    contactNo: '0170000000',
    address: {
        division: 'cumilla',
        city: 'cumilla'
    }
}

type IsAdmin = true
const isAdmin: IsAdmin = true

type Name = string
const myName: Name = 'MEm'

// function type alias
type AddFunc = (num1: number, num2: number)=> number

const add:AddFunc = (num1, num2)=>{
    return num1 + num2
}

add(2,2)