import Row from './row.vue';
import './row.less';

Row.install = function(Vue) {
  Vue.component(Row.name, Row);
};

export default Row;
