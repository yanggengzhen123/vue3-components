import { App } from "vue"
import ZchooseCity from "./src/index.vue"
export default {
  install(app: App) {
    app.component("z-chooseCity", ZchooseCity)
  },
}
