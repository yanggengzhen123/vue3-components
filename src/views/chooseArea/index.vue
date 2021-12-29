<template>
  <div>
    <choose-area @change="changeArea"></choose-area>
  </div>
</template>

<script setup lang="ts">
const changeArea = (val: any) => {
  console.log(val)
}
</script>

<style scoped></style>
