<template>
  <el-dialog v-model="dialogVisible" @close="close" v-bind="$attrs">
    <template #default>
      <z-form ref="form" :options="options"></z-form>
    </template>
    <template #footer>
      <slot name="footer" :form="form"></slot>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { onMounted, PropType, ref, watch } from "vue"
import { FormOptions } from "../../form/src/types/types"
let props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  // 表单的配置选项
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true,
  },
})
let form = ref(null)
let emits = defineEmits(["update:visible"])
let dialogVisible = ref<boolean>(props.visible)
watch(
  () => props.visible,
  (val) => {
    if (val) {
      dialogVisible.value = !dialogVisible.value
      emits("update:visible", val)
    } else {
      dialogVisible.value = !dialogVisible.value
    }
  }
)
let close = () => {
  emits("update:visible", false)
}
</script>

<style scoped></style>
