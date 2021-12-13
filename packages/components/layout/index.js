import Col from './col/col.vue'
import Row from './row/row.vue'
import './col/col.less'
import './row/row.less'

Col.install = function (Vue) {
  Vue.component(Col.name, Col)
}
Row.install = function (Vue) {
  Vue.component(Row.name, Row)
}

const Layout = {
  Col,
  Row,
}
export { Col, Row }
export default Layout
