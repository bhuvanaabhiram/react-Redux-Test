import React, { Component ,Fragment} from 'react';


import { connect } from'react-redux'


class RenderEmployee extends Component {

constructor() {
    super();

   this.handleDeptChange = this.handleDeptChange.bind(this);
  }


handleDeptChange(event) {





this.props._updEmp(event.target.value);

}

render() {

const currenState = this.props.state;
const currDept = currenState.selectedDepartment; 
const currDeptWithNull = ["",...currenState.department[currDept]]
return (

<Fragment>
Employee Id:
<select name = "dept" test-data = "departmentComp" value={currenState.selectedEmployee} onChange = {this.handleDeptChange} >
{ 
currDeptWithNull.map(
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
 _updEmp : (targetValue) => {



dispatch({
type :"EMP_CHANGE",
payload :targetValue
});




}

 }

}


export default connect(mapStateToProps,mapDispatchToProps)(RenderEmployee);