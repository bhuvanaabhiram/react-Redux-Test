



import React, { Component, Fragment } from 'react';


import { connect } from'react-redux'


class ShowEmpDetails extends Component {

constructor() {
    super();

   this.handleGetEmpDetails = this.handleGetEmpDetails.bind(this);
  }


handleGetEmpDetails() {

this.props._loadEmployee(this.props.state.selectedEmployee);

}

hanldeShowDeatils() {

 if(this.props.state) {

const {id,avatar,first_name,last_name} = this.props.state.data;


console.log("avatar", avatar);

return (<Fragment >
<br/>
<br/>
<img src = {avatar} />
<p>
<b>
ID :
</b>
{id} &nbsp;&nbsp;
<b>
Name :
</b>
{first_name} {last_name}


</p>

</Fragment>);
 } 
 else {
   return null
 }


}


render() {


return this.hanldeShowDeatils();

}

}

const mapStateToProps = (state) => {

console.log("state.EmpObj",state.EmpObj)

return {
  "state":state.EmpObj,
}
} 




export default connect(mapStateToProps)(ShowEmpDetails);