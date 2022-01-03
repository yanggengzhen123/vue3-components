<template>
  <div style="display: flex">
    <div style="margin-right: 20px">
      <el-date-picker
        v-model="startDate"
        type="date"
        :placeholder="startPlaceholder"
        :disabled-date="startDisabledDate"
        v-bind="$attrs.startOptions"
      >
      </el-date-picker>
    </div>
    <div style="margin-right: 20px">
      <el-date-picker
        v-model="endDate"
        type="date"
        :placeholder="endPlaceholder"
        :disabled="endDateDisabled"
        :disabled-date="endDisabledDate"
        v-bind="$attrs.endOptions"
      >
      </el-date-picker>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue"
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
    return time.getTime() < Date.now() - 1000 * 60 * 60 * 24
  }
}
let endDisabledDate = (time: Date) => {
  if (startDate.value) {
    return time.getTime() < startDate.value.getTime() + 1000 * 60 * 60 * 24
  }
}
let emits = defineEmits(["startChange", "endChange"])
// 监听开始的事件
watch(
  () => startDate.value,
  (val: Date | undefined) => {
    if (!val) {
      endDateDisabled.value = true
      endDate.value = undefined
    } else {
      emits("startChange", val)
      endDateDisabled.value = false
    }
  }
)
// 监听结束日期的函数
watch(
  () => endDate.value,
  (val: Date | undefined) => {
    if (val) {
      emits("endChange", {
        startDate: startDate.value,
        endDate: val,
      })
    }
  }
)
</script>

<style scoped></style>
