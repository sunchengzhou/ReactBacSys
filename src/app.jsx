import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'

import Layout from 'component/layout/index.jsx'
import Home from 'page/home/index.jsx'
import ErrorPage from 'page/error/index.jsx'
import Login from 'page/login/index.jsx'
import UserList from 'page/user/index.jsx'

let layoutRouter = (
  <Layout>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/user" component={UserList} />
    <Route component={ErrorPage} />
  </Switch>
  </Layout>
)
class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/" render={ props => (
              layoutRouter
            )} />
        </Switch>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);