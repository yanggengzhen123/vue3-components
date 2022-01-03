import { App } from "vue"
import zhenList from "./src/index.vue"
export default {
  install(app: App) {
    app.component("zhenList", zhenList)
  },
}
