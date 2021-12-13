import Icon from "./icon.vue";
import "./icon.less";

Icon.install = function(Vue) {
  Vue.component(Icon.name, Icon);
};

export default Icon;
