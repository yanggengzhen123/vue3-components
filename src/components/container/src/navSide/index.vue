<template>
  <!-- <el-menu
    :collapse="collapse"
    default-active="2"
    class="el-menu-vertical-demo"
  >
    <el-menu-item index="1">
      <el-icon-menu></el-icon-menu>
      <span>首页</span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon-menu></el-icon-menu>
      <span>图标选择器</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon-menu></el-icon-menu>
      <span>趋势标记</span>
    </el-menu-item>
  </el-menu> -->
  <z-menu
    :collapse="collapse"
    :data="data"
    router
    :defaultActive="$route.path"
  ></z-menu>
</template>

<script setup lang="ts">
defineProps<{
  collapse: boolean
}>()
let data = [
  {
    icon: "HomeFilled",
    name: "首页",
    index: "/",
  },
  {
    icon: "Check",
    name: "图标选择器",
    index: "/chooseIcon",
  },

  {
    icon: "Location",
    name: "省市区选择器",
    index: "/chooseArea",
  },
  {
    icon: "Sort",
    name: "趋势标记",
    index: "/trend",
  },
  {
    icon: "Timer",
    name: "时间选择",
    index: "/chooseTime",
  },
  {
    icon: "Bell",
    name: "通知菜单",
    index: "/notification",
  },
  {
    icon: "Menu",
    name: "菜单",
    index: "/Menu",
  },
  {
    icon: "TurnOff",
    name: "城市选择",
    index: "/chooseCity",
  },
  {
    icon: "DArrowRight",
    name: "进度条",
    index: "/progress",
  },
  {
    icon: "ScaleToOriginal",
    name: "日历",
    index: "/calendar",
  },
  {
    icon: "Setting",
    name: "表单",
    index: "/form",
  },
  {
    icon: "ShoppingBag",
    name: "弹出框表单",
    index: "/modalForm",
  },
  {
    icon: "ShoppingBag",
    name: "表格",
    index: "/table",
  },
]
</script>

<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
