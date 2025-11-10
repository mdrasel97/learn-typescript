function add (num1:number, num2:number): number{
    return num1 + num2
}
add(2, 2)

const addRow = (num1: number, num2: number)=>{
    return num1 + num2
}

addRow(2, 2)

// object = function
const poorUser = {
    name: 'rasel',
    balance: 0,
    addBalance(value: number){
        const totalBalance = this.balance + value;
        return totalBalance
    }
}

poorUser.addBalance(100000)

const arr: number[] = [1,2,3]
const sqrArr = arr.map((elem: number)=>{
    return elem + elem
})

