

type UserRole = 'admin' | 'user'

const getDashboard = (role: UserRole)=>{
    if(role === 'admin'){
        return 'admin Dashboard'
    }
    else if(role === 'user'){
        return 'user Dashboard'
    }
    else{
        return 'guest Dashboard '
    }
}

getDashboard('guest')

// intersection 
type Employee = {
    id: string,
    name: string,
    phoneNo: string
}

type Manager = {
    designation: string,
    teamSize: number
}
type EmployeeManager = Employee & Manager

const chowdhury : EmployeeManager = {
    id: '123',
    name: 'Chowdhury',
    phoneNo: '0155555555',
    designation: 'manager',
    teamSize: 20
}