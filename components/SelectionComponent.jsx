import React, { Component } from 'react';


import { connect } from'react-redux'

import RenderDepart from "./renderSelects";

import RenderEmployee from "./renderEmp";

import GetEmpDetails from "./GetEmpDetails";

class SelectionComponent extends Component {

constructor() {
    super();
  }

 render() {
    return (
      <div data-test = "selectComp">
     <RenderDepart/>
     <RenderEmployee />
     <GetEmpDetails />
   { /* 
     <ClearEmpDetails />
    */
    } 
      </div>
    );
  }

}

const mapStateToProps = (state) => {

return {
  "state":state
}
} 


export default connect(mapStateToProps)(SelectionComponent);