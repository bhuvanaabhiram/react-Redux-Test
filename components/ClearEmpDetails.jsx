



import React, { Component, Fragment } from 'react';


import { connect } from'react-redux'


class GetEmpDetails extends Component {

constructor() {
    super();

   this.handleGetEmpDetails = this.handleGetEmpDetails.bind(this);
  }


handleGetEmpDetails() {




this.props._clearEmployee();

}

render() {


return (

<Fragment>
&nbsp;
<input type = "button" value = "Clear" onClick = {this.handleGetEmpDetails} />


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
 _clearEmployee : () => {


   dispatch({
type :"CLEAR_EMPLOYEES",
})


}

 }

}


export default connect(mapStateToProps,mapDispatchToProps)(GetEmpDetails);