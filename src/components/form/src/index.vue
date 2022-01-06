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
        <el-upload
          v-else
          v-bind="item.uploadAttrs"
          :on-preview="onPreview"
          :on-remove="onRemove"
          :on-success="onSuccess"
          :on-error="onError"
          :on-progress="onProgress"
          :on-change="onChange"
          :before-upload="beforeUpload"
          :before-remove="beforeRemove"
          :http-request="httpRequest"
          :on-exceed="onExceed"
        >
          <slot name="uploadArea"></slot>
          <template #tip>
            <slot name="uploadTip"></slot>
          </template>
        </el-upload>
      </el-form-item>
      <!-- checkbox-group select等 -->
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
  // 用户自定义上传方法
  httpRequest: {
    type: Function,
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
// upload上传组件的所有方法
let emits = defineEmits([
  "on-preview",
  "on-remove",
  "on-success",
  "on-error",
  "on-progress",
  "on-change",
  "before-upload",
  "before-remove",
  "on-exceed",
])
const onPreview = () => {
  emits("on-preview")
}
const onRemove = (file: any, fileList: any) => {
  emits("on-remove", { file, fileList })
}
const onSuccess = (response: any, file: any, fileList: any) => {
  emits("on-success", { response, file, fileList })
}
const onError = (err: any, file: any, fileList: any) => {
  emits("on-error", { err, file, fileList })
}
const onProgress = (event: any, file: any, fileList: any) => {
  emits("on-progress", { event, file, fileList })
}
const onChange = (file: any, fileList: any) => {
  emits("on-change", { file, fileList })
}
const beforeUpload = (file: any) => {
  emits("before-upload", { file })
}
const beforeRemove = (file: any, fileList: any): any => {
  emits("before-remove", { file, fileList })
}
const onExceed = (files: any, fileList: any) => {
  emits("on-exceed", { files, fileList })
}
</script>

<style scoped></style>
