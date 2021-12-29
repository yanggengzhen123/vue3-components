import { App } from "vue"
import chooseArea from "./src/index.vue"
export default {
  install(app: App) {
    // 全局注册组件
    app.component("choose-area", chooseArea)
  },
}
