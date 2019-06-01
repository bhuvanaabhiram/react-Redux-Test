


export const validateDept = (payload, state) => {

const newState = JSON.parse(JSON.stringify(state));

newState["selectedDepartment"] = payload;

return newState;

}


export const handleEmp = (payload, state) => {

const newState = JSON.parse(JSON.stringify(state));

newState["selectedEmployee"]= payload;


return newState;

}

export const handleEmpDetails = (payload, state) => {

const newState = JSON.parse(JSON.stringify(state));

newState["EmpObj"] = payload;

return newState;

}