import React, { Component } from 'react';
import { Link } from "react-router-dom";
import API from '../API/Api';

class Header extends Component {
  constructor(props) {
    super(props)
    this.logOutHandler = this.logOutHandler.bind(this)
    this.state = {
      isLoggedIn: true
    }
  }

  logOutHandler() {
    if (localStorage["userLogined"] !== undefined) {
      this.setState({ isLoggedIn: false })
      const token = JSON.parse(localStorage["userLogined"]).user.auth_token
      let config = {
        headers: {
          'token': token,
        }
      };
      console.log(token)
      API.delete('delete-token', config).then(
        respone => {
          alert("đăng xuất thành công")
        }
      )
        .catch(error => console.log(error))
      localStorage.removeItem("userLogined")
    }
  }

  renderLogOut() {
    let isLoggedIn = false
    if (localStorage["userLogined"] !== undefined) {
      isLoggedIn = JSON.parse(localStorage["userLogined"])
    }
    if (isLoggedIn) {
      return <button className="btn btn-outline-danger" onClick={this.logOutHandler}>Log out</button >
    }
    else {

    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container" >
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto ">
              <li className="nav-item active">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link">Blog</Link>
              </li>
              <li className="nav-item">
                <Link to="/employee" className="nav-link">Employee</Link>
              </li>
              <div className="justify-content-end">
                <li className="nav-item">
                  {this.renderLogOut()}
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Header;
