import React, { Component } from 'react';


import { connect } from'react-redux'

import RenderDepart from "./renderSelects";

import RenderEmployee from "./renderEmp";

import GetEmpDetails from "./GetEmpDetails";

import ShowEmpDetails from "./ShowEmpDetails";

import ClearEmpDetails from "./ClearEmpDetails";

class SelectionComponent extends Component {

constructor() {
    super();
  }

 render() {
    return (
      <div data-test = "selectComp" align = "center">
     <RenderDepart/>
     <RenderEmployee />
     <GetEmpDetails />
  
     <ClearEmpDetails />
  
    <ShowEmpDetails />
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