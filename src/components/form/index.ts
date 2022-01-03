import { App } from "vue"
import zForm from "./src/index.vue"
export default {
  install(app: App) {
    app.component("z-form", zForm)
  },
}
