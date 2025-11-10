// spread operator
const friends = ['rohim', 'korim']
const schoolFriends = ['pintu', 'cintu', 'mintu']
const collegeFriends = ['mr. smart', 'mr. very smart']

friends.push(...schoolFriends)
// console.log(friends)

const user = {name: 'rasel', phone: '01000000000'}

const otherInfo = {hobbey: 'outing', favoCOlor: 'blue'}

const userInfo = {...user, ...otherInfo}
// console.log(userInfo)


const sendInvite = (...friends: string[])=>{
// console.log(`send invite ${friend1}`)
// console.log(`send invite ${friend2}`)
// console.log(`send invite ${friend3}`)
friends.forEach((friend: String)=>{
    console.log(`send invitation ${friend}`)
})
}

sendInvite('pintu', 'cintu', 'bulbul', 'mintu', 'babul')