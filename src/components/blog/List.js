import { React, Component } from "react";
import { Link } from "react-router-dom";

class List extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
       const {blogActionCreator} = this.props;
       const {fetchListBlog} =  blogActionCreator;
       fetchListBlog(); 
    }

    handleButton(id){
        // this.props.onDeleteBlog(id)
    }
    render() {
        let {blogList}= this.props
        console.log(blogList)
        return (
            <tbody>
                { blogList.map(blog =>  
                    <tr key={blog.id}>
                        <td >{blog.id}</td>
                        <td>{blog.title}</td>
                        <td className='w-25'>{blog.description}</td>
                        <td><button className="btn btn-success"><Link to={"/blog/edit/" + blog.id} >Edit</Link></button>
                            <button className="btn btn-danger mx-2" onClick={this.handleButton.bind(this,blog.id)}>Delete</button>
                        </td>
                    </tr>
                )}
            </tbody>
        );
    }
}


export default List;
