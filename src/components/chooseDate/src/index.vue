<template>
  <div style="display: flex">
    <div style="margin-right: 20px">
      <el-date-picker
        v-model="startDate"
        type="date"
        :placeholder="startPlaceholder"
      >
      </el-date-picker>
    </div>
    <div style="margin-right: 20px">
      <el-date-picker
        v-model="endDate"
        type="date"
        :placeholder="endPlaceholder"
        :disabled="endDateDisabled"
      >
      </el-date-picker>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
let props = defineProps({
  // 开始日期的占位符
  startPlaceholder: {
    type: String,
    default: "请选择开始日期",
  },
  // 结束日期的占位符
  endPlaceholder: {
    type: String,
    default: "请选择结束日期",
  },
  // 是否禁用选择今天之前的日期
  disableToday: {
    type: Boolean,
    default: true,
  },
})
// 开始日期
let startDate = ref<Date | undefined>(undefined)
// 结束日期
let endDate = ref<Date | undefined>(undefined)
// 控制结束日期的禁用状态
let endDateDisabled = ref<boolean | undefined>(true)
// 禁用开始日期的函数
let startDisabledDate = (time: Date) => {
  if (props.disableToday) {
  }
}
</script>

<style scoped></style>
