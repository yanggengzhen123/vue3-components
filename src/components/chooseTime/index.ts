import { App } from "vue"
import ZchooseTime from "./src/index.vue"
export default {
  install(app: App) {
    app.component("z-chooseTime", ZchooseTime)
  },
}
