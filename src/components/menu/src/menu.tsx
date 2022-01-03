// 用jsx实现无限层级的el-menu
import { defineComponent, PropType, useAttrs } from "vue"
import { toLine } from "../../../utils"
import { MenuItem } from "./types"
export default defineComponent({
  props: {
    // 导航菜单的数据
    data: {
      type: Array as PropType<MenuItem[]>,
      require: true,
    },
    // 默认选中的菜单
    defaultActive: {
      type: String,
      default: "",
    },
    // 是否是路由模式
    router: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, ctx) {
    // 封装一个渲染无限层级菜单的方法
    let renderMenu = (data: MenuItem[]) => {
      return data.map((item: MenuItem) => {
        // 每个菜单的图标
        item.i = `el-icon-${toLine(item.icon!)}`
        // jsx中的插槽(处理sub-menu的插槽)
        let slots = {
          title: () => {
            return (
              <>
                <item.i />
                <span>{item.name}</span>
              </>
            )
          },
        }
        // 递归渲染children
        if (item.children && item.children.length) {
          return (
            <el-sub-menu index={item.index} v-slots={slots}>
              {renderMenu(item.children)}
            </el-sub-menu>
          )
        }
        // 正常渲染
        return (
          <el-menu-item index={item.index}>
            <item.i />
            <span>{item.name}</span>
          </el-menu-item>
        )
      })
    }
    let attrs = useAttrs()
    console.log(props)
    return () => {
      return (
        <el-menu
          default-active={props.defaultActive}
          router={props.router}
          {...attrs}
        >
          {renderMenu(props.data!)}
        </el-menu>
      )
    }
  },
})
