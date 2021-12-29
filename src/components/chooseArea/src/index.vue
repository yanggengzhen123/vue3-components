<template>
  <div>
    <el-select clearable v-model="province" placeholder="请选择省份">
      <el-option v-for="item in areas" :key="item.code" :value="item.code" :label="item.name"></el-option>
    </el-select>
    <el-select clearable :disabled="!province" v-model="city" placeholder="请选择城市" style="margin: 0 10px">
      <el-option v-for="item in selectCity" :key="item.code" :value="item.code" :label="item.name"></el-option>
    </el-select>
    <el-select clearable :disabled="!city || !province" v-model="area" placeholder="请选择区域">
      <el-option v-for="item in selectArea" :key="item.code" :value="item.code" :label="item.name"></el-option>
    </el-select>
  </div>
</template>

<script setup lang="ts">
import allAreas from '../lib/pca-code.json'
import { ref, watch, computed } from 'vue'
let province = ref<string>('') //省
let city = ref<string>('') //市
let area = ref<string>('') //区域
let areas = ref(allAreas) //全部区域
// selectCity city[]
let selectCity = ref<any[]>([])

let selectArea = ref<any[]>([])
watch(
  () => province.value,
  (val) => {
    if (val) {
      let cities = areas.value.find(
        (item) => item.code === province.value
      )!.children
      selectCity.value = cities
    }
    city.value = ''
    area.value = ''
  }
)
watch(
  () => city.value,
  (val) => {
    if (val) {
      let area = selectCity.value.find(
        (item) => item.code === city.value
      )!.children
      selectArea.value = area
    }
    area.value = ''
  }
)
</script>

<style scoped lang="scss"></style>
