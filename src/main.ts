import { createApp } from "vue"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import App from "./App.vue"
import router from "./router/index"
import * as Icons from "@element-plus/icons"
const app = createApp(App)
// 全局注册图标 牺牲一点性能，但是方便
for (let i in Icons) {
  console.log((Icons as any)[i])
}
app.use(router).use(ElementPlus)
app.mount("#app")
