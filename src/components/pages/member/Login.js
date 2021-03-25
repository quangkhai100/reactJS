import React, { Component } from 'react';
import FormErrors1 from '../FormErrors1'
import API from '../../API/Api';
import { Context } from '../../context/Context'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      formErrors: {},
      successMessage: '',
      color: '',
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(e) {
    const nameInput = e.target.name
    const value = e.target.value
    this.setState({
      [nameInput]: value
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    let { email, password, formErrors } = this.state
    let flag = true;
    if (!email) {
      flag = false;
      formErrors.email = "Vui long nhap email";
    }
    if (!password) {
      flag = false;
      formErrors.password = "Vui long nhap password";
    }
    if (!flag) {
      this.setState({
        successMessage: '',
        formErrors: formErrors
      });
    } else {
      const data = {
        email: email,
        password: password
      }

      API.post('login', data)
        .then(response => {
          if (response.data.code = "200") {
            let userData = {
              auth_token: response.data.data.token,
            };

            console.log(response);

            let appState = {
              isLoggedIn: true,
              user: userData
            };
            localStorage.setItem('userLogined', JSON.stringify(appState));
            this.setState({
              email: '',
              password: '',
              successMessage: 'you\'r in',
              formErrors: {},
              color: "text-success",
              isLoggedIn:true
            });
            

          } else {
            this.setState({
              formErrors: response.data.errors
            })
          }
        })
        .catch(error => {
          console.log(error)
          this.setState({
            successMessage: "đăng nhập không đúng",
            color: "text-danger",
            formErrors: {},
          })
        })
    }
  }
  render() {
    <Context.Consumer>
          {
            globalcontext => (
             globalcontext.changeStateButton(this.state.isLoggedIn)
            )
          }
    </Context.Consumer>
    return (
      <div className="col-5">
        <h2>Login account</h2>
        <FormErrors1 formErrors={this.state.formErrors} />
        <form onSubmit={this.handleSubmit}>
          <div className="form-group" >
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" name="email" id="exampleInputEmail1" onChange={this.handleInput} aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email} />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group" >
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" name="password" onChange={this.handleInput} id="exampleInputPassword1" placeholder="Password" value={this.state.password} />
          </div>
          <button type="submit" className="btn btn-primary mt-2">Submit</button>
          <p className={this.state.color}>{this.state.successMessage}</p>
          
        </form>
        
      </div>
    )
  }
}
export default Login