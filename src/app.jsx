import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'

import Layout from 'component/layout/index.jsx'
import Home from 'page/home/index.jsx'
import Login from 'page/login/index.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Router>
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/" render={ props => (
              <Layout>
                  <Switch>
                    <Route exact path="/" component={Home} />
                  </Switch>
              </Layout>
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