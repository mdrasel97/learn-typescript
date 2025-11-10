// object destructuring
// array destructuring

const user = {
    id: 123,
    name:{
        firstName: 'MD',
        lastName: 'RASEL'
    },
    gender: 'male',
    favoColor: 'white',

}

// const myFavoColor = user.favoColor
// const myLastName = user.name.lastName

const {favoColor, name:{lastName}}= user

// console.log(lastName)

const friends = ['korim', 'Rahim', 'mahim']

// const myBestF = friends[1]
const [, myBestF] = friends
console.log(myBestF)

