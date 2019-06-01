



import React, { Component, Fragment } from 'react';


import { connect } from'react-redux'


class GetEmpDetails extends Component {

constructor() {
    super();

   this.handleGetEmpDetails = this.handleGetEmpDetails.bind(this);
  }


handleGetEmpDetails() {

this.props._loadEmployee(this.props.state.selectedEmployee);

}

render() {


return (

<Fragment>

<input type = "button" value = "GetDetails" onClick = {this.handleGetEmpDetails} />


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
 _loadEmployee : (empId) => {

const URL = `https://reqres.in/api/users/${empId}`;

fetch(URL)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
      

       dispatch({
 type :"GET_EMP_DETAILS",
 payload :data
 });




      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });








}

 }

}


export default connect(mapStateToProps,mapDispatchToProps)(GetEmpDetails);