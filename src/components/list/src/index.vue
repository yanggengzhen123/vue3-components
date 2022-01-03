<template>
  <div>zhenList</div>
</template>

<script setup lang="ts">
import { PropType } from "vue"
import { ListOptions, ActionOptions } from "./types"
let props = defineProps({
  // 列表内容
  list: {
    type: Array as PropType<ListOptions[]>,
    require: true,
  },
  // 操作的内容
  action: {
    type: Array as PropType<ActionOptions[]>,
    default: () => [],
  },
})
</script>

<style scoped></style>
