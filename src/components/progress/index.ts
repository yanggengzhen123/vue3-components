import { App } from "vue"
import zProgress from "./src/index.vue"
export default {
  install(app: App) {
    app.component("zProgress", zProgress)
  },
}
