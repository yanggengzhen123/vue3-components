<template>
  <div>
    <z-chooseCity @changeCity="changeCity"></z-chooseCity>
  </div>
</template>

<script setup lang="ts">
import { City } from "../../components/chooseCity/src/types"
let changeCity = (item: City) => {
  console.log(item)
}
</script>

<style scoped></style>
