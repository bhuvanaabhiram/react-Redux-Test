
import {validateDept,handleEmp, handleEmpDetails} from "../actionResolvers/handleDeptAction";


const initialState = {

department : {
  "HR" : [1,2,3,4,5],
  "ENGINEERING" : [6,7,8,9,10],
  
},
"selectedDepartment" : null,
  "selectedEmployee" : null,

}

const reducer = (state = initialState , action ) => {
switch(action.type){


case "DEPT_CHANGE":
return validateDept(action.payload,state);

case "EMP_CHANGE":
return handleEmp(action.payload,state);

case "GET_EMP_DETAILS":
return handleEmpDetails(action.payload,state);
 
 case "CLEAR_EMPLOYEES":
 return {...initialState};


default:
  return {...state};
}

}

export default reducer;