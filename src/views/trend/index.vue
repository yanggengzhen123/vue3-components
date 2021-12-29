<template>
  <div class="flex">
    <trend text="营业额"></trend>
    <trend text="销售额" type="down"></trend>
    <!-- slots插槽 用到hooks<useSlots> -->
    <trend>营业额 </trend>
    <br />
    <!-- 颜色反转 -->
    <trend text="颜色反转" reverseColor></trend>
    <trend text="默认颜色不反转" type="down" reverseColor></trend>
    <br />
    <!-- 文字颜色 -->
    <trend text="文字颜色" upTextColor="blue"></trend>
    <trend text="文字颜色" type="down" downTextColor="yellow"></trend>
    <!-- 自定义图标 -->
    <trend text="自定义图标" upIcon="CaretTop"></trend>
    <trend text="自定义图标" type="down" downIcon="CaretBottom"></trend>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.flex {
  display: flex;
  div {
    margin-right: 10px;
  }
}
</style>
