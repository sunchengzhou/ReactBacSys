import React from 'react'
import PageTitle from 'component/page-title/index.jsx'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import Pagination from 'util/pagination/index.jsx'
import User from 'service/user-service.jsx'
import Mutil from 'util/mm.jsx'
const _mm = new Mutil();
const _user = new User();

class UserList extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      pageNum : 1
    }
  }
  componentDidMount() {
    this.getList()
  }
  getList() {
    _user.getUserList(this.state.pageNum).then(data =>{
      console.log(data)
      this.setState(data)
    },errorMsg => {
      _mm.errorTips(errorMsg);
    })
  }
  pageNumChange(pageNum) {
    this.setState({
      pageNum: pageNum
    },() => {
      this.getList();
    })
  }
  render() {
    let userLists = this.state.list.map((item, index) =>{
         return (
          <tr key={index}>
              <td>{item.username}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>{item.question}</td>
              <td>{item.updateTime}</td>
            </tr>           
         )
    });
    return (
      <div id="page-wrapper">
        <PageTitle title="用户列表" />
        <div className="row">
            <div className="col-md-12">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>用户名：</th>
                      <td>电话：</td>
                      <td>邮箱：</td>
                      <td>问题：</td>
                      <td>更新时间：</td>
                    </tr>
                  </thead>
                  <tbody>
                  {userLists}
                  </tbody>
                </table>
            </div>
        </div>
        <Pagination current={this.state.pageNum} total={this.state.total} 
        onChange={(pageNum) =>this.pageNumChange(pageNum)}/>
      </div>
    )
  }
}
export default UserList;