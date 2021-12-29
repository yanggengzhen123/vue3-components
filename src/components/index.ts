import { App } from "vue"
import chooseArea from "./chooseArea"
import chooseIcon from "./chooseIcon"
import trend from "./trend"
const component = [chooseArea, chooseIcon, trend]

export default {
  install(app: App) {
    component.map((item) => app.use(item))
  },
}
