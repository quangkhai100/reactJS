import React, { Component } from "react";
import Register from './member/Register.js'
import Login from './member/Login.js'
class Home extends Component {


  render() {

    return (

      <div className="container">
        <div className="row">
          {console.log(this.props.loggedIn)}
          <Login displayLogOutButton={this.props.displayLogOutButton}/>
          
          <Register />
        </div>
      </div>
    );
  }
}

export default Home;
