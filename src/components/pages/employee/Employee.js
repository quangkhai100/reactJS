import {React,Component} from "react";
import axios from 'axios';
import {Link} from "react-router-dom";

class Employee extends Component {
    constructor(props)
    {
      super(props)
      this.state={
          persons:[]
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users').then(
          res=>{
            const persons = res.data
            this.setState({ persons })
          }
        )
        .catch(error => console.log(error))
      }
      render()
      {
        console.log(this.state.persons)
        return (
          // <ul>{this.state.persons.map(person => <li key={person.id}>{person.name} / Phone: {person.phone}</li>)}</ul>
            <div className="col-lg-12">
            <div className="card">
              <div className="card-header"><i className="fa fa-align-justify" />Employee Management</div>
              <div className="card-body">
                <table className="table table-responsive-sm">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Employee Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                      {this.state.persons.map(person=> 
                      <tr key={person.id}>
                      <td>{person.id}</td>
                      <td>{person.name}</td>
                      <td>{person.email}</td>
                      <td>{person.phone}</td>
                      <td><button className="btn btn-success">Edit</button>
                      <button className="btn btn-danger mx-2">Delete</button></td>
                      </tr>
                      )}          
                  </tbody>
                </table>
               <Link to="/employee/add" className="btn btn-info mt-2">Add New</Link>
              </div>
            </div>
          </div>
          );
      }
}

export default Employee;
