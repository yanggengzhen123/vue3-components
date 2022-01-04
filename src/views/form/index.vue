<template>
  <div>
    <z-form :options="options" label-width="100px"></z-form>
  </div>
</template>

<script setup lang="ts">
import { FormOptions } from "../../components/form/src/types/types"
let options: FormOptions[] = [
  {
    type: "input",
    value: "",
    label: "用户名",
    prop: "username",
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
]
</script>

<style scoped></style>
