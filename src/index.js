import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './components/pages/Home.js'
import Blog from './components/pages/blog/List.js'
import AddBlog from './components/pages/blog/Add.js'
import EditBlog from './components/pages/blog/Edit.js'
import NotFound from './components/pages/NotFound.js'
import Employee from './components/pages/employee/Employee.js'
import AddEmployee from './components/pages/employee/Add.js'
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/blog/add" component={AddBlog} />
                <Route path="/blog/edit/:id" component={EditBlog} />
                <Route path="/blog" component={Blog} />
                <Route path="/employee/add" component={AddEmployee} />
                <Route path="/employee" component={Employee} />
                <Route default component={NotFound} />
            </Switch>
        </App>
    </BrowserRouter>, document.getElementById("root"));

reportWebVitals();
