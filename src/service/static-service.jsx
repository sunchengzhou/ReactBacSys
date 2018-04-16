import Mutil from 'util/mm.jsx'
const _mm = new Mutil();
class Static {
    // 请求统计
  getStatic() {
      return  _mm.request({
        type: 'post',
        url: '/manage/statistic/base_count.do'
      })
  }
}

export default new Static();