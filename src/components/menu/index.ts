import { App } from "vue"
import zMenu from "./src/index.vue"
import infiniteMenu from "./src/menu"
export default {
  install(app: App) {
    app.component("zMenu", zMenu)
    app.component("infinite-menu", infiniteMenu)
  },
}
