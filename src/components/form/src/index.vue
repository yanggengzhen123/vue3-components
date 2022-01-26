<template>
  <el-form
    ref="form"
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
          v-if="item.type !== 'upload' && item.type !== 'editor'"
          :placeholder="item.placeholder"
          v-bind="item.attrs"
          :is="`el-${item.type}`"
          v-model="model[item.prop!]"
        ></component>
        <!-- upload组件特殊处理 -->
        <el-upload
          v-else-if="item.type === 'upload'"
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
        <div id="editor" v-else-if="item.type === 'editor'"></div>
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
            :label="child.value"
            :value="child.value"
          >
            {{ child.label }}
          </component>
        </component>
      </el-form-item>
    </template>
    <el-form-item>
      <slot name="action" :form="form" :model="model"></slot>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { PropType, ref, onMounted, watch, nextTick } from "vue"
import { FormOptions } from "./types/types"
import cloneDeep from "lodash/cloneDeep"
import { UploadFile } from "element-plus/es/components/upload/src/upload.type"
import E from "wangeditor"
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
let form = ref<any>(null)
let edit = ref()
let refUpload = ref(null)
let initForm = () => {
  if (props.options && props.options.length) {
    let m: any = {}
    let r: any = {}
    props.options.map((item: FormOptions) => {
      m[item.prop!] = item.value
      r[item.prop!] = item.rules
      if (item.type === "editor") {
        // 初始化富文本操作
        nextTick(() => {
          if (document.getElementById("editor")) {
            //创建富文本编辑器
            const editor = new E("#editor")
            editor.config.placeholder = item.placeholder!
            editor.create()
            // 初始化富文本内容
            editor.txt.html(item.value)
            editor.config.onchange = (newHtml: string) => {
              model.value[item.prop!] = newHtml
            }
            edit.value = editor
          }
        })
      }
    })
    model.value = cloneDeep(m)
    rules.value = cloneDeep(r)
  }
}

// 重写重置表单方法
let resetFields = () => {
  // 重置element-plus的表单
  console.log(form)
  form.value.resetFields()
  // 重置editor为初始值（富文本编辑器的内容）
  if (props.options && props.options.length) {
    let editorItem = props.options.find((item) => item.type === "editor")!
    edit.value.txt.html(editorItem.value)
  }
}
// 表单验证
let validate = () => {
  console.log(form)
  return form.value.validate()
}
// vue3新增分发方法。移除$children
defineExpose({
  resetFields, // 重置表单
  validate, // 表单验证
})
let test = ref()
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
const onRemove = (file: UploadFile, fileList: UploadFile[]) => {
  emits("on-remove", { file, fileList })
}
const onSuccess = (response: any, file: UploadFile, fileList: UploadFile[]) => {
  // 上传成功
  let uploadItem = props.options.find((item) => item.type === "upload")
  model.value[uploadItem!.prop!] = { response, file, fileList }
  emits("on-success", {
    response,
    file,
    fileList,
  })
}
const onError = (err: Error, file: UploadFile, fileList: UploadFile[]) => {
  emits("on-error", { err, file, fileList })
}
const onProgress = (event: Event, file: UploadFile, fileList: UploadFile[]) => {
  emits("on-progress", { event, file, fileList })
}
const onChange = (file: UploadFile, fileList: UploadFile[]) => {
  emits("on-change", { file, fileList })
}
const beforeUpload = (file: UploadFile) => {
  emits("before-upload", { file })
}
const beforeRemove = (file: UploadFile, fileList: UploadFile[]): any => {
  emits("before-remove", { file, fileList })
}
const onExceed = (files: FileList, fileList: UploadFile) => {
  emits("on-exceed", { files, fileList })
}
</script>

<style scoped></style>
