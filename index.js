import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

import {Provider} from "react-redux";

import store from "./store/mainStore";

import SelectionComponent from "./components/SelectionComponent";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Provider store = {store}>
      <SelectionComponent />
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
