import React from 'react'
import { Link, NavLink } from 'react-router-dom'

class NavSide extends React.Component {
  render() {
    return (
      <nav className="navbar-default navbar-side" role="navigation">
        <div className="sidebar-collapse">
          <ul className="nav" id="main-menu">
            <li>
              <NavLink exact to="/"  activeClassName="active-menu">
                <i className="fa fa-dashboard"></i>
                <span>首页</span>
              </NavLink>
            </li>
            <li className="active">
              <Link to="/product">
                <i className="fa fa-desktop"></i>
                <span>商品</span>
                <span className="fa arrow"></span>
              </Link>
              <ul className="nav nav-second-level collapse in">
                <li>
                  <NavLink  activeClassName="active-menu" to="/product">商品管理</NavLink>
                </li>
                <li>
                  <NavLink  activeClassName="active-menu" to="/product-category">商品种类</NavLink>
                </li>
              </ul>
            </li>
            <li className="active">
              <Link to="/order">
                <i className="fa fa-desktop"></i>
                <span>订单</span>
                <span className="fa arrow"></span>
              </Link>
              <ul className="nav nav-second-level collapse in">
                <li>
                  <NavLink  activeClassName="active-menu" to="/order">订单管理</NavLink>
                </li>
                <li>
                  <NavLink  activeClassName="active-menu" to="/order-category">订单分类</NavLink>
                </li>
              </ul>
            </li>
            <li className="active">
              <Link to="/user">
                <i className="fa fa-desktop"></i>
                <span>用户</span>
                <span className="fa arrow"></span>
              </Link>
              <ul className="nav nav-second-level collapse in">
                <li>
                  <NavLink activeClassName="active-menu" to="/user">用户管理</NavLink>
                </li>
              </ul>
            </li>
          </ul>

        </div>

      </nav>
    )
  }
}

export default NavSide