<template>
  <div class="header">
    <span @click="toggle">
      <el-icon-expand v-if="collapse"></el-icon-expand>
      <el-icon-fold v-else></el-icon-fold>
    </span>
  </div>
</template>

<script setup lang="ts">
let props = defineProps<{
  collapse: boolean
}>()
let emits = defineEmits(["update:collapse"])
let toggle = () => {
  // 在子组件中直接修改父组件的数据
  emits("update:collapse", !props.collapse)
}
</script>

<style scoped lang="scss">
.header {
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
</style>
