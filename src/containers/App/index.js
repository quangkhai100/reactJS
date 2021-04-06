import React, { Component } from "react";
import Header from "../../components/layout/Header";
import { Provider } from "react-redux";
import configureStore from "../../redux/configureStore";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalLoading from "../../components/GlobalLoading";
 
const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div>
          <ToastContainer/>
          <Header />
          <div className="container">
            <GlobalLoading/>
            <div className="row">{this.props.children};</div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
