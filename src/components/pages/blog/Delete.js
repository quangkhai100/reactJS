import { React, Component } from "react";
import API from '../../API/Api';

class Delete extends Component {
    constructor (props) {
        super(props)
        this.DeleteProduct=this.DeleteProduct.bind(this)
      }
      
      DeleteProduct(){
        API.delete('blog/'+this.props.id).then(
            res => {
                alert('xóa thành công')
                console.log(res)
            }
        ).catch(error => console.log(error))
      }
      render () {
        console.log(this.props.id)
        return (
              <button className="btn btn-danger mx-2" onClick={this.DeleteProduct}>Delete</button> 
            )
        }
}
export default Delete