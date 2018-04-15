import React from 'react'
import './login.css'
import Mutil from 'util/mm.jsx'
import User from 'service/user-service.jsx'
const _mm = new Mutil();
const _user = new User();

class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      redirect: _mm.getUrlParam('redirect') || '/'
    };
    // 绑定事件
    ["onInputChange", "onSubmit", "onInputKeyUp"].forEach((item) => {
      this[item] = this[item].bind(this)
    })
  }
  onInputChange (e) {
    var name = e.target.name,
        value = e.target.value;
    this.setState({
      [name]: e.target.value
    })
  }
  onInputKeyUp(e) {
    if(e.keyCode === 13) {
      this.onSubmit();
    }
  }
  onSubmit() {
    let loginInfo = {
      username: this.state.username,
      password: this.state.password
      },
      checkResult = _user.checkLoginInfo(loginInfo);
    // 验证信息通过
    if(checkResult.status) {
      _user.login({
        username: this.state.username,
        password: this.state.password
      }).then((res)=>{
        _mm.setStorage('userInfo', res)
        this.props.history.push(this.state.redirect)
      }).catch((errorMsg)=>{
        _mm.errorTips(errorMsg);
      })     
    }else{
    // 不通过    
      let checkMsg = checkResult.msg;
      _mm.errorTips(checkMsg)  
    }
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <div className="panel panel-default panel-login">
              <div className="panel-heading">欢迎登录</div>
              <div className="panel-body">
                  <div>
                    <div className="form-group">
                      <label htmlFor="InputUser">用户名:</label>
                      <input type="text"
                       className="form-control"
                       name="username"
                       onKeyUp ={e => this.onInputKeyUp(e)}
                       onChange={e => this.onInputChange(e)}/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="InputWord">密码:</label>
                      <input type="password" className="form-control"
                      name="password"
                      onKeyUp ={e => this.onInputKeyUp(e)}
                      onChange={e => this.onInputChange(e)}/>
                    </div>
                    <button  className="btn btn-primary btn-lg btn-block"
                    onClick={e => this.onSubmit(e)}>登录</button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Login;