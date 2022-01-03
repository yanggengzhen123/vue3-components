<template>
  <el-popover placement="bottom" :width="300" trigger="click">
    <!-- <template #default> 是 el-popover弹出层的匿名插槽-->
    <template #default>
      <slot></slot>
    </template>
    <template #reference>
      <el-badge
        style="cursor: pointer"
        :value="value"
        :max="max"
        :idDot="idDot"
      >
        <component :is="`el-icon-${toLine(icon)}`"></component>
      </el-badge>
    </template>
  </el-popover>
</template>

<script setup lang="ts">
import { toLine } from "../../../utils"
let props = defineProps({
  // 显示图标
  icon: {
    type: String,
    default: "Bell",
  },
  // 通知数量
  value: {
    type: [String, Number],
    default: "",
  },
  // 最大值
  max: {
    type: Number,
  },
  // 是否显示小圆点
  idDot: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped lang="scss">
svg {
  width: 1em;
  height: 1em;
}
</style>
