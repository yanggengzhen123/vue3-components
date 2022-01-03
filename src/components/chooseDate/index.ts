import { App } from "vue"
import ZchooseDate from "./src/index.vue"
export default {
  install(app: App) {
    app.component("z-chooseDate", ZchooseDate)
  },
}
