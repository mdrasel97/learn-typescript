// ? : Ternary operator 
// ?? : nullish operator
// ?. : optional operator

// const userAge = 21

const eligible = (age : number )=>{
// if(age >= 21){
//     console.log('You are eligible')
// }
// else{
//     console.log('you are not eligible')
// }

const result = age >= 21 ? 'You are eligible': 'You are not eligible'

console.log(result)
}

eligible(21)


const userTheme = undefined
const selectedTheme = userTheme ?? 'light theme'

console.log(selectedTheme)

const isAuthenticated = null
const resultWithTernary = isAuthenticated ? isAuthenticated: 'you are guest user '


// optional 
const user: {
    address: {
        city: string
        town: string,
    },
    postCode: string

} = {
    address :{
        city: 'dhaka',
        town: 'banani'
    }
}

