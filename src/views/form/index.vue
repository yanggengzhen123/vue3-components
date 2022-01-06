<template>
  <div>
    <z-form
      :options="options"
      label-width="100px"
      @on-preview="handlePreview"
      @on-remove="handleRemove"
      @before-remove="beforeRemove"
      @on-success="handleSuccess"
      @on-onExceed="handleExceed"
      @on-change="handleChange"
      @beforeUpload="handleBeforeUpload"
    >
      <template #uploadArea>
        <el-button type="primary">Click to upload</el-button>
      </template>
      <template #uploadTip>
        <div style="color: #ccc">jpg/png文件小于500kb</div>
      </template>
    </z-form>
  </div>
</template>

<script setup lang="ts">
import { ElMessage, ElMessageBox } from "element-plus"
import type { UploadFile } from "element-plus/es/components/upload/src/upload.type"
import { FormOptions } from "../../components/form/src/types/types"
let options: FormOptions[] = [
  {
    type: "input",
    value: "",
    label: "用户名",
    prop: "username",
    placeholder: "请输入用户名",
    rules: [
      {
        required: true,
        message: "用户名不能为空",
        trigger: "blur",
      },
      {
        max: 6,
        min: 2,
        message: "用户名在2-6位之间",
        trigger: "blur",
      },
    ],
    attrs: {
      clearable: true,
    },
  },
  {
    type: "input",
    value: "",
    label: "密码",
    prop: "password",
    placeholder: "请输入密码",
    rules: [
      {
        required: true,
        message: "密码不能为空",
        trigger: "blur",
      },
      {
        max: 15,
        min: 6,
        message: "用户名在6-15位之间",
        trigger: "blur",
      },
    ],
    attrs: {
      showPassword: true,
      clearable: true,
    },
  },
  {
    type: "select",
    value: "",
    label: "职位",
    prop: "role",
    placeholder: "请选择职位",
    attrs: {
      style: {
        width: "100%",
      },
    },
    rules: [
      {
        required: true,
        message: "职位不能为空",
        trigger: "blur",
      },
    ],
    children: [
      {
        type: "option",
        label: "经理",
        value: "1",
      },
      {
        type: "option",
        label: "主管",
        value: "2",
      },
      {
        type: "option",
        label: "员工",
        value: "3",
      },
    ],
  },
  {
    // 多选
    type: "checkbox-group",
    value: [],
    prop: "like",
    label: "爱好",
    rules: [
      {
        required: true,
        message: "爱好不能为空",
        trigger: "blur",
      },
    ],
    children: [
      {
        type: "checkbox",
        label: "足球",
        value: "1",
      },
      {
        type: "checkbox",
        label: "篮球",
        value: "2",
      },
      {
        type: "checkbox",
        label: "打代码",
        value: "3",
      },
    ],
  },
  {
    //单选
    type: "radio-group",
    value: "",
    prop: "gender",
    label: "性别",
    rules: [
      {
        required: true,
        message: "性别不能为空",
        trigger: "blur",
      },
    ],
    children: [
      {
        type: "radio",
        label: "男",
        value: "male",
      },
      {
        type: "radio",
        label: "女",
        value: "female",
      },
      {
        type: "radio",
        label: "未知",
        value: "unknow",
      },
    ],
  },
  {
    type: "upload", //上传
    label: "上传",
    prop: "pic",
    uploadAttrs: {
      action: "https://jsonplaceholder.typicode.com/posts/",
      multiple: true,
      limit: 3,
    },
    rules: [
      {
        required: true,
        message: "图片不能为空",
        trigger: "blur",
      },
    ],
  },
]
interface uploadFile {
  file?: UploadFile
  fileList?: UploadFile[]
  files?: FileList
  response?: Response
}
const handleRemove = ({ file, fileList }: uploadFile) => {
  console.log(file, fileList)
}
const handlePreview = (file: UploadFile) => {
  console.log(file)
}
const handleExceed = ({ files, fileList }: uploadFile) => {
  ElMessage.warning(
    `The limit is 3, you selected ${files!.length} files this time, add up to ${
      files!.length + fileList!.length
    } totally`
  )
}
const beforeRemove = ({ file, fileList }: uploadFile) => {
  return ElMessageBox.confirm(`Cancel the transfert of ${file!.name} ?`)
}
const handleSuccess = ({ response, file, fileList }: uploadFile) => {
  console.log("handleSuccess")
}
const handleChange = ({ file, fileList }: uploadFile) => {
  console.log(file)
  console.log("====================================")
  console.log(fileList)
  console.log("====================================")
}
const handleBeforeUpload = (file: UploadFile) => {
  console.log("handleBeforeUpload")
  console.log(file)
}
</script>

<style scoped></style>
