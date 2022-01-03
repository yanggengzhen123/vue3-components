// 类型定义文件
export interface MenuItem {
  // 导航图标
  icon?: string
  // 处理之后的图标
  i?: any
  // 导航名字
  name: string
  // 导航标识router
  index: string
  // 导航子菜单
  children?: MenuItem[]
}
