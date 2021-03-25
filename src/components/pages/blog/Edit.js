import { React, Component } from "react";
import FormErrors1 from '../FormErrors1'
import API from '../../API/Api';

class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title:'',
            description:'',
            content:'',
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

    componentDidMount(){
        console.log()
    }
    handleSubmit(e){
        e.preventDefault();
        let { title, description, content, formErrors } = this.state
        let flag = true;
        if(!title){
            flag = false;
            formErrors.title=' vui lòng nhập title'
        }
        if(!description){
            flag = false;
            formErrors.description=' vui lòng nhập description'
        }
        if (!flag) {
            this.setState({
              successMessage: '',
              formErrors: formErrors
            });
          } else {
            const data = {
                title: title,
                description: description,
            }
            API.put('blog/'+this.props.match.params.id,data).then(respone => {
                this.setState({successMessage: 'Add success'})
            })
          }
    }
    
    render() {
        return (
            
            <div className="col-5">
                <h2>Edit blog</h2>
                <FormErrors1 formErrors={this.state.formErrors} />
                <form onSubmit={this.handleSubmit} >
                    <div className="form-group" >
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" name="title" onChange = {this.handleInput} />
                    </div>
                    <div className="form-group" >
                        <label htmlFor="">Description</label>
                        <textarea  type="text" className="form-control" name="description" onChange = {this.handleInput}/>
                    </div>
                    <button type="submit" className="btn btn-primary mt-2">Submit</button>
                    <p>{this.state.successMessage}</p>
                </form>
            </div>
        );
    }
}
export default Edit;
