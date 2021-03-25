import React, { Component } from "react";
import axios from 'axios';
import FormErrors1 from '../FormErrors1'


class Add extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name:'',
            email:'',
            phone:'',
            formErrors:{},
            successMessage:''
        }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this)
    }
    handleInput(e){
        const nameInput = e.target.name
        const value = e.target.value
        this.setState({
          [nameInput]: value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        let { name, email, phone, formErrors } = this.state
        let flag = true;
        if(!name){
            flag = false;
            formErrors.name=' vui lòng nhập tên'
        }
        if(!email){
            flag = false;
            formErrors.email=' vui lòng nhập email'
        }
        if(!phone){
            flag = false;
            formErrors.phone=' vui lòng nhập phone'
        }
        if (!flag) {
            this.setState({
              successMessage: '',
              formErrors: formErrors
            });
          } else {
            const data = {
                name: name,
                email: email,
                phone: phone,
            }
            axios.post('https://jsonplaceholder.typicode.com/users',data).then(respone => {
                this.setState({successMessage: 'Add success'})
            })
          }
    }
    render() {
        return (
            <div className="col-5">
                <h2>Add employee</h2>
                <FormErrors1 formErrors={this.state.formErrors} />
                <form onSubmit={this.handleSubmit} >
                    <div className="form-group" >
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" name="name" onChange = {this.handleInput} placeholder="Full name ok?" />
                    </div>
                    <div className="form-group" >
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" name="email" onChange = {this.handleInput} aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group" >
                        <label htmlFor="phone">Phone</label>
                        <input type="text" className="form-control"  onChange = {this.handleInput} name="phone" placeholder="777.777.777" />
                    </div>
                    <button type="submit" className="btn btn-primary mt-2">Submit</button>
                    <p>{this.state.successMessage}</p>
                </form>
            </div>
        );
    }
}
export default Add;
