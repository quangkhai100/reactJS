import React, {Component} from 'react'
import Login from '../../components/member/Login'
import RegisterContainer from '../../containers/member/RegisterContainer'
class Homepage extends Component{
    render(){
        return (
            <div>
                <Login />
                <RegisterContainer />
            </div>
        )
    }
}
export default Homepage;