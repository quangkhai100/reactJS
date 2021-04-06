import { React, Component } from "react";
import { Link } from "react-router-dom";
import BlogsContainer from "../../containers/blog/BlogsContainer";

class BlogListPage extends Component {
  render() {
    return (
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header">
            <i className="fa fa-align-justify" />
            Blog Management
          </div>
          <form>
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
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
              <BlogsContainer />
            </table>
            <Link to="/blog/add" className="btn btn-info mt-2">
              Add New
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogListPage;
