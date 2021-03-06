import { React, Component } from "react";
import FormErrors1 from '../../components/FormErrors1'
import API from '../../components/API/Api';
import {connect} from 'react-redux';
import {actGetBlogRequest,actUpdateBlogRequest} from '../../actions/index';

class BlogEditPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            content: '',
            formErrors: {},
            successMessage: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this)
    }
    handleInput(e) {
        const nameInput = e.target.name
        const value = e.target.value
        this.setState({
            [nameInput]: value
        })
    }

    componentDidMount() {
        this.props.SetBlog(this.props.match.params.id)
       
    }
    componentWillReceiveProps(nextProps){
        if (nextProps && nextProps.blogdetail){
            const {blogdetail} = nextProps

            this.setState({
                title: blogdetail.title,
                description: blogdetail.description
            })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let { title, description, formErrors } = this.state
        let flag = true;
        if (!title) {
            flag = false;
            formErrors.title = 'vui lòng nhập title'
        }
        if (!description) {
            flag = false;
            formErrors.description = 'vui lòng nhập description'
        }
        if (!flag) {
            this.setState({
                successMessage: '',
                formErrors: formErrors
            });
        } else {
            const data = {
                id: this.props.match.params.id,
                title: title,
                description: description,
            }
            // API.put('blog/' + this.props.match.params.id, data).then(respone => {
            //     this.setState({ successMessage: 'Update success' })
            // })
            this.props.onUpdateBlog(data)
        }
    }

    render() {
        const {blogdetail} = this.props
        console.log(blogdetail)
        return (
            <div className="col-5">
                <h2>Edit blog</h2>
                <FormErrors1 formErrors={this.state.formErrors} />
                <form onSubmit={this.handleSubmit} >
                    <div className="form-group" >
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" value={this.state.title} name="title" onChange={this.handleInput} />
                    </div>
                    <div className="form-group" >
                        <label htmlFor="">Description</label>
                        <textarea type="text" className="form-control" value={this.state.description} name="description" onChange={this.handleInput} />
                    </div>
                    <button type="submit" className="btn btn-primary mt-2">Update Blog</button>
                    <p>{this.state.successMessage}</p>
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        blogdetail: state.blogs
    }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
        SetBlog : (id) => {
            dispatch(actGetBlogRequest(id))
    },
    onUpdateBlog : (blog) =>{
        dispatch(actUpdateBlogRequest(blog))
    }
}
}
export default connect(mapStateToProps,mapDispatchToProps)(BlogEditPage);
