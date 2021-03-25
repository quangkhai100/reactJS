import React, { Component } from 'react';
import Header from "./components/layout/Header.js";
import Footer from "./components/layout/Footer.js";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            {this.props.children}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
