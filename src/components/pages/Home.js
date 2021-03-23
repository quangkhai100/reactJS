import React, { Component } from "react";

class Home extends Component{
  constructor(props){
    super(props)
    this.state={
      email: '',
      password: '',
      emailError:'',
      passError:'',
    }
    this.handleEmail=this.handleEmail.bind(this)
    this.handlePass=this.handlePass.bind(this)
  }
  handleEmail(e){
    this.setState({
      email: e.target.value
    })
  }
  handlePass(e){
    this.setState({
      password: e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault();
    let email= this.email
  }
  render() {
  return (

    <div>
        <form>
          <input type="test" placeholder="email" name="email" onChange= {this.handleEmail} value={this.state.email}/>
          <br></br>
          <p>{this.state.emailError}</p>
          <br></br>
          <input type="password" name="password" onChange= {this.handlePass} value= {this.state.password}/>
          <br></br>
          <p>{this.state.passError}</p>
          <br></br>
          <span>
          <input type="checkbox" className="checkbox"/>
            Keep me signed in
          </span>
          <br></br>
          <button type="submit" className="btn btn-default">Login</button>
        </form>
    </div>
  );
  }
}

  export default Home;
