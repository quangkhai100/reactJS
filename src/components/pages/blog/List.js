import { React, Component } from "react";
import API from '../../API/Api';
import {Link} from "react-router-dom";
import Delete from "./Delete.js";

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            blogList: [],
        }
    }
    componentDidMount() {
        API.get('blog').then(
            res => {
                const blogList = res.data.data
                this.setState({ blogList })
            }
        )
            .catch(error => console.log(error))
    }
    Blog(blogList){
        this.setState({
            blogList: blogList
        });
    }

    render() {
        return (
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-header"><i className="fa fa-align-justify" />Blog Management</div>
                    <div className="card-body">
                        <table className="table table-responsive-sm">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Title</th>
                                    <th>description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.blogList.map(blog =>
                                    <tr key={blog.id}>
                                        <td>{blog.id}</td>
                                        <td>{blog.title}</td>
                                        <td className='w-25'>{blog.description}</td>
                                        <td><button className="btn btn-success"><Link to={"/blog/edit/"+blog.id} >Edit</Link></button>
                                            <Delete id={blog.id} />
                                            </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        <Link to="/blog/add" className="btn btn-info mt-2">Add New</Link>
                    </div>

                </div>
            </div>
        );
    }
}

export default List;
