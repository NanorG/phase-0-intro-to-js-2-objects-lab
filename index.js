// Write your solution in this file!


let employee = {
    name: "Ali" ,
    streetAddress : "Germany" ,
}


function updateEmployeeWithKeyAndValue(employee, key, value){
    let employee2 = {...employee};
    employee2 ["streetAddress"] = "11 Broadway"
    
    return employee2
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee['streetAddress'] = '12 Broadway'
    
    return employee
}

function deleteFromEmployeeByKey(employee, key){
 let employee3 = {...employee};
 delete employee3[key]
 return employee3
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}

