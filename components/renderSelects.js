
import React, { Component ,Fragment} from 'react';

import { connect } from'react-redux';

import {updateDept} from "../actionResolvers/handleDeptAction";

class RenderDepart extends Component {

constructor() {
    super();

   this.handleDeptChange = this.handleDeptChange.bind(this);
  }


handleDeptChange(event) {





this.props._updDept(event.target.value);

}

render() {

const currenState = this.props.state;
const deptWithNull = [" ",...Object.keys(currenState.department)];
return (

<Fragment>
Department
<select name = "dept" test-data = "departmentComp" value={currenState.selectedDepartment} onChange = {this.handleDeptChange} >
{ 
deptWithNull.map(
value => <option value = {value} key = {value}>{value}</option>
)
}
</select> &nbsp;
</Fragment> 


);

}

}

const mapStateToProps = (state) => {

return {
  "state":state,
}
} 

const mapDispatchToProps = (dispatch) => {

return {
 _updDept : (targetValue) => {
dispatch({
type :"DEPT_CHANGE",
payload :targetValue
})

}

 }

}


export default connect(mapStateToProps,mapDispatchToProps)(RenderDepart);