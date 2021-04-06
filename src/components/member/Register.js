import React, { Component } from 'react';
import FormErrors1 from '../FormErrors1'
class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      formErrors: {},
      registerSuccess: '',
      color: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    const nameInput = e.target.name;
    const value = e.target.value;
    console.log(e)
    this.setState({
      [nameInput]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    let { name, email, password, formErrors } = this.state
    let flag = true;
    if (!name) {
      flag = false;
      formErrors.name = "Vui long nhap name";
    }
    if (!email) {
      flag = false;
      formErrors.email = "Vui long nhap email";
    }
    if (!password) {
      flag = false;
      formErrors.password = "Vui long nhap mat khau";
    }
    if (!flag) {
      this.setState({
        registerSuccess: '',
        formErrors: formErrors
      });
    } else {
      const data = {
        name: name,
        email: email,
        password: password
      }
      console.log("big")
      this.props.actionRegister(data) 
    }
  }

  render() {
    return (
      <div className="col-5">
        <h2>Register account</h2>
        <FormErrors1 formErrors={this.state.formErrors} />
        <form onSubmit={this.handleSubmit}>
          <div className="form-group" >
            <label htmlFor="exampleInputEmail1">Name</label>
            <input type="name" className="form-control" name="name" onChange={this.handleInput} />
            <small id="emailHelp" className="form-text text-muted"></small>
          </div>
          <div className="form-group" >
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" name="email" onChange={this.handleInput} aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group" >
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" name="password" onChange={this.handleInput} placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary mt-2">Register</button>
          <p className={this.state.color}>{this.state.registerSuccess}</p>
        </form>
      </div>
    )
  }
}
export default Register