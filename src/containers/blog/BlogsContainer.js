import { React, Component } from "react";
import List from "../../components/blog/List"
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import  PropTypes from 'prop-types'
import * as blogActions from './../../actions/blog'
class BlogsContainer extends Component {

    render() {            console.log(this.props.blogList);

        return (
            <List blogList = {this.props.blogList} blogActionCreator={this.props.blogActionCreator}/>
        );
    }
}
BlogsContainer.propTypes = {
    classes: PropTypes.object,
    blogActionCreator: PropTypes.shape({
        fetchListBlogRequest: PropTypes.func
    }),
    blogList : PropTypes.array

}

const mapStateToProps = (state) => {
    return {
        blogList: state.blogs.listblog
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        blogActionCreator: bindActionCreators(blogActions,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(BlogsContainer);
