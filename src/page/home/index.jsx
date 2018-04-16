import React from 'react'
import PageTitle from 'component/page-title/index.jsx'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import './home.css'
import _static from 'service/static-service.jsx'
import Mutil from 'util/mm.jsx'
const _mm = new Mutil();

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userCount: 0,
      productCount: 0,
      orderCount: 0
    }
  }
  componentDidMount() {
    this.getData();
  }
  getData() {
    _static.getStatic().then(res => {
      this.setState(res)
    }, errorMsg =>{
      _mm.errorTips(errorMsg)
    })
  }
  render() {
    return (
      <div id="page-wrapper">
        <PageTitle title="首页"></PageTitle>
        <div className="row">
          <div className="col-md-4">
            <Link to="/user" className="color-box blue" tag="span">
              <p className="count">
                {this.state.userCount}
              </p>
              <p className="desc">
                <i className="fa fa-user fa-w"></i>
                <span>用户数量</span>
              </p>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/user" className="color-box green" tag="span">
              <p className="count">
                {this.state.orderCount}
              </p>
              <p className="desc">
                <i className="fa fa-list fa-w"></i>
                <span>订单数</span>
              </p>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/user" className="color-box red" tag="span">
              <p className="count">
                {this.state.productCount}
              </p>
              <p className="desc">
                <i className="fa fa-check-square-o fa-w"></i>
                <span>商品数</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
export default Home;