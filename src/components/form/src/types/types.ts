// 可配置的表单
import { RuleItem } from "./rule"
import { CSSProperties } from "vue"
// 表单每一项的配置选项
export interface FormOptions {
  // 表单项显示的元素
  type:
    | "cascader"
    | "checkbox"
    | "checkbox-group"
    | "checkbox-button"
    | "color-picker"
    | "date-picker"
    | "input"
    | "input-number"
    | "radio"
    | "radio-group"
    | "radio-button"
    | "rate"
    | "select"
    | "option"
    | "slider"
    | "switch"
    | "time-picker"
    | "time-select"
    | "transfer"
    | "upload"
    | "editor"
  // 表单项的值
  value?: any
  // 表单项的label
  label?: string
  // 表单项的标识
  prop?: string
  // 表单项的验证规则
  rules?: RuleItem[]
  // 表单项的占位符
  placeholder?: string
  // 表单元素特有的属性 暂时给个any类型
  attrs?: {
    // CSS样式
    style?: CSSProperties
    clearable?: boolean
    showPassword?: boolean
    disabled?: boolean
  }
  // 表单的子元素(例如下拉框的option，多选框或单选框中的checkbox)
  children?: FormOptions[]
  // 单独处理上传组件的属性和方法
  uploadAttrs?: {
    action: string //上传地址
    headers?: object //设置上传的请求头部
    method?: "post" | "put" | "get" //设置上传请求方法
    multiple?: boolean //是否支持多选文件
    data?: object //上传时附带的额外参数
    name?: string //上传的文件字段名
    withCredentials?: boolean //支持发送cookie凭证信息
    showFileList?: boolean //是否显示已上传文件列表
    drag?: boolean //是否启用拖拽上传
    accept?: string // 接受上传的文件类型
    thumbnailMode?: boolean //是否显示缩略图
    fileList?: any[] //上传的文件列表
    listType?: "text" | "picture" | "picture-card" //文件列表的类型
    autoUpload?: boolean
    disabled?: boolean
    limit?: number
  }
}
