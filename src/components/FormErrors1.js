import React, { Component } from "react";
const pStyle = { color: "red" };

class FormErrors1 extends Component {
  // const listError = this.props.formErrors;
  // console.log(listError)
  // const errors=listError.map((error,i) =>console.log(error) || <li style={pStyle} key={i}>{error}</li>)
  // return <div><ul>{listError.map((error,i) =>console.log(error) || <li style={pStyle} key={i}>{error.email}</li>)}</ul></div> 
  renderError() {
    const listError = this.props.formErrors;
    if (listError instanceof Object) {
      return Object.keys(listError).map((item, i) => { return (<p style={pStyle} key={i}>{listError[item]}</p>) })
    }
    else {
      console.log(listError);
    }
  }
  render() {
    return (
      <div>
        {this.renderError()}
      </div>
    )
  }
}
export default  FormErrors1;