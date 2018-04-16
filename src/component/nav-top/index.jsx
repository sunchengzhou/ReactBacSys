import React from 'react'
import { Link } from 'react-router-dom'
import Mutil from 'util/mm.jsx'
import User from 'service/user-service.jsx'
const _mm = new Mutil();
const _user = new User();

class NavTop extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
          username: _mm.getStorage('userInfo').username
      };
      this.onLogout = this.onLogout.bind(this);
  }
  onLogout() {
        console.log('logout')
      _user.logout().then(res=>{
        _mm.removeStorage('userInfo')
        window.location.href = '/login';
      },errorMsg => {
        _mm.errorTips(errorMsg)
    })
  }
  render() {
    return (
      <nav className="navbar navbar-default top-navbar" role="navigation">
            <div className="navbar-header">
                <Link className="navbar-brand" to="/"><b>Welcome</b>scz</Link>
            </div>

            <ul className="nav navbar-top-links navbar-right">

                <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
                        <i className="fa fa-user fa-fw"></i>
                            <span>欢迎你，{this.state.username ? this.state.username : "游客"}</span>
                        <i className="fa fa-caret-down"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-user">
                        <li><span onClick={e => this.onLogout(e)}><i className="fa fa-sign-out fa-fw"></i> 退出登录</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
  }
}

export default NavTop