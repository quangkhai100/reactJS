import { React, Component } from "react";
import {connect} from 'react-redux';
import {actionRegisterRequest} from '../../actions/member.js';
import Register from "../../components/member/Register";
class RegisterContainer extends Component {

    render() {
        return (
            <Register actionRegister = {this.props.actionRegister} />
        );
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        actionRegister: (body) => {
            dispatch(actionRegisterRequest(body))
        },
    }
}

export default connect(null,mapDispatchToProps)(RegisterContainer);
