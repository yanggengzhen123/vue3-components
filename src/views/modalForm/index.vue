<template>
  <div>
    <el-button type="primary" @click="open">open</el-button>
    <modalForm
      v-model:visible="visible"
      title="编辑用户"
      width="50%"
      :options="options"
    >
      <template #footer="{ form }">
        <el-button @click="cancel(form)">取消</el-button>
        <el-button type="primary" @click="confirm(form)">确认</el-button>
      </template>
    </modalForm>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus"
import { ref } from "vue"
import { FormOptions } from "../../components/form/src/types/types"

let visible = ref<boolean>(false)
const open = () => {
  visible.value = true
}
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
        trigger: "change",
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
        trigger: "change",
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
        trigger: "change",
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
  {
    type: "editor", // wangEditor
    value: "",
    prop: "desc",
    label: "描述",
    placeholder: "请输入描述",
    rules: [
      {
        required: true,
        message: "描述不能为空",
        trigger: "blur",
      },
    ],
  },
]
const cancel = (form: any) => {
  visible.value = false
}
const confirm = (form: any) => {
  console.log(form)

  // 表单验证
  form.validate((valid: any) => {
    if (valid) {
      ElMessage.success("验证成功")
    } else {
      ElMessage.error("验证失败")
    }
  })

  // visible.value = false
}
</script>

<style scoped></style>
