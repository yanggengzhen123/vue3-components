import { App } from "vue"
import chooseArea from "./chooseArea"
import chooseIcon from "./chooseIcon"
import trend from "./trend"
import notification from "./notification"
import zhenList from "./list"
import zMenu from "./menu"
import zProgress from "./progress"
import ZchooseTime from "./chooseTime"
import ZchooseDate from "./chooseDate"
import ZchooseCity from "./chooseCity"
import zForm from "./form"
const component = [
  chooseArea,
  chooseIcon,
  trend,
  notification,
  zhenList,
  zMenu,
  zProgress,
  ZchooseTime,
  ZchooseDate,
  ZchooseCity,
  zForm,
]
export default {
  install(app: App) {
    component.map((item) => app.use(item))
  },
}
