import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/index.js';
import reportWebVitals from './reportWebVitals';
import HomePage from './pages/Homepage/HomePage'
import BlogListPage from './pages/BlogListPage/BlogListPage'
import BlogActionPage from './pages/BlogActionPage/BlogActionPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import BlogEditPage from './pages/BlogEditPage/BlogEditPage'


ReactDOM.render(
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/blog/add" component={BlogActionPage} />
                <Route path="/blog/edit/:id" component={BlogEditPage} />
                <Route path="/blog" component={BlogListPage} />
                <Route default component={NotFoundPage} />
            </Switch>
        </App>
    </BrowserRouter>, document.getElementById("root"));

reportWebVitals();
