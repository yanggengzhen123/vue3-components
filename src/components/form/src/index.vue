<template>
  <el-form
    v-if="model"
    :validate-on-rule-change="false"
    :model="model"
    :rules="rules"
    v-bind="$attrs"
  >
    <template v-for="(item, index) in options" :key="index">
      <el-form-item
        v-if="!item.children || !item.children.length"
        :prop="item.prop"
        :label="item.label"
      >
        <component
          v-if="item.type !== 'upload'"
          :placeholder="item.placeholder"
          v-bind="item.attrs"
          :is="`el-${item.type}`"
          v-model="model[item.prop!]"
        ></component>
        <!-- upload组件特殊处理 -->
        <el-upload v-else></el-upload>
      </el-form-item>
      <el-form-item
        v-if="item.children && item.children.length"
        :prop="item.prop"
        :label="item.label"
      >
        <component
          :placeholder="item.placeholder"
          v-bind="item.attrs"
          :is="`el-${item.type}`"
          v-model="model[item.prop!]"
        >
          <component
            v-for="(child, i) in item.children"
            :key="i"
            :is="`el-${child.type}`"
            :label="child.label"
            :value="child.value"
          >
          </component>
        </component>
      </el-form-item>
    </template>
  </el-form>
</template>

<script setup lang="ts">
import { PropType, ref, onMounted, watch } from "vue"
import { FormOptions } from "./types/types"
import cloneDeep from "lodash/cloneDeep"
let props = defineProps({
  // 表单的配置项
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true,
  },
})
let model = ref<any>(null)
let rules = ref<any>(null)
let initForm = () => {
  if (props.options && props.options.length) {
    let m: any = {}
    let r: any = {}
    props.options.map((item: FormOptions) => {
      m[item.prop!] = item.value
      r[item.prop!] = item.rules
    })
    model.value = cloneDeep(m)
    rules.value = cloneDeep(r)
    console.log(model.value)
    console.log(rules.value)
  }
}
onMounted(() => {
  initForm()
})
// 监听父组件传递进来的options
watch(
  () => props.options,
  () => {
    initForm()
  },
  { deep: true }
)
</script>

<style scoped></style>
