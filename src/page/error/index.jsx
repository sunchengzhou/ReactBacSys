import React from 'react'
import PageTitle from 'component/page-title/index.jsx'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'

class ErrorPage extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id="page-wrapper">
        <PageTitle title="出错啦!" />
        <div className="row">
            <div className="col-md-12">
                <span>找不到您要寻找的路径</span>
                <br/>
                <Link to="/">返回首页</Link>
            </div>
        </div>
        
      </div>
    )
  }
}
export default ErrorPage;