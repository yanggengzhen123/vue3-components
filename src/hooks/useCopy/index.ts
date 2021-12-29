// copy自定义hooks
import { ElMessage } from "element-plus"
//复制文本
export const useCopy = (text: string) => {
  // 创建输入框
  let input = document.createElement("input")
  input.value = text
  // 追加到body里面去
  document.body.appendChild(input)
  // 选择输入框的操作
  input.select()
  // 执行复制操作
  document.execCommand("Copy")
  document.body.removeChild(input)
  ElMessage.success("复制成功")
}
