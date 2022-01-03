<template>
  <div>
    <z-chooseTime
      :startOptions="startOptions"
      :endOptions="endOptions"
      @startChange="startChange"
      @endChange="endChange"
    ></z-chooseTime>
    <br />
    <br />
    <z-chooseDate
      @startChange="dateStartChange"
      @endChange="dateEndChange"
    ></z-chooseDate>
  </div>
</template>

<script setup lang="ts">
interface endValue {
  startTime: string
  endTime: string
}
interface dateEndValue {
  startDate: Date
  endDatev: Date
}
let startChange = (val: string) => {
  console.log(val)
}
let endChange = (val: endValue) => {
  console.log(val)
}
let dateStartChange = (val: Date) => {
  console.log(val)
}
let dateEndChange = (val: dateEndValue) => {
  console.log(val)
}
let startOptions = {
  size: "mini",
  clearable: false,
}
let endOptions = {
  size: "mini",
  clearable: true,
}
</script>

<style scoped></style>
