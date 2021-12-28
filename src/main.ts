import { createApp } from "vue"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import App from "./App.vue"
import router from "./router/index"
import * as Icons from "@element-plus/icons"
import { toLine } from "./utils"
const app = createApp(App)
console.log(Icons)

// 全局注册图标 牺牲一点性能，但是方便
for (let i in Icons) {
  // 注册全局组件
  app.component(`el-icon-${toLine(i)}`, (Icons as any)[i])
}
app.use(router).use(ElementPlus)
app.mount("#app")
