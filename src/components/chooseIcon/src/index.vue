<template>
  <el-button type="primary" @click="handleClick">
    <slot></slot>
  </el-button>
  {{ chooseIcon }}
  <div class="choose-icon-dialog-body-height">
    <el-dialog :title="title" v-model="dialogVisible" @close="handleClose">
      <div class="container">
        <div
          class="item"
          v-for="(item, index) in Object.keys(ElIcons)"
          :key="index"
          @click="clickItem(item)"
        >
          <div class="text">
            <component :is="`el-icon-${toLine(item)}`"></component>
          </div>
          <div class="icon">{{ item }}</div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import * as ElIcons from "@element-plus/icons"
import { watch, ref } from "vue"
import { toLine } from "../../../utils"
import { useCopy } from "../../../hooks/useCopy"
let chooseIcon = ref<string>("")
let props = defineProps<{
  // 弹出框的标题
  title: string
  // 控制弹出框的显示和隐藏
  visible: boolean
}>()
let emits = defineEmits(["update:visible"])
let handleClick = () => {
  // 在子组件中修改父组件的状态
  emits("update:visible", !props.visible)
}
let handleClose = () => {
  console.log("关闭弹窗")
  // emits("update:visible", !props.visible)
}
// 拷贝一份父组件传递过来的visible
let dialogVisible = ref<boolean>(props.visible)
// 监听visible的变化(只能监听第一次)
watch(
  () => props.visible,
  (val) => {
    // emits("update:visible", val)
    dialogVisible.value = val
  }
)
watch(
  () => dialogVisible.value,
  (val) => {
    emits("update:visible", val)
  }
)
// 点击图标复制
let clickItem = (item: string) => {
  let text: string = `<el-icon-${toLine(item)} />`
  chooseIcon.value = text
  useCopy(text)
  dialogVisible.value = false
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.item {
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  cursor: pointer;
  height: 70px;
}
svg {
  width: 2em;
  height: 2em;
}
.text {
  font-size: 14px;
}
.icon {
  flex: 1;
}
</style>
