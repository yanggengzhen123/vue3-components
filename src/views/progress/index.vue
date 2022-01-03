<template>
  <z-progress isAnimation :percentage="60"></z-progress>
  <z-progress
    isAnimation
    :text-inside="true"
    :stroke-width="24"
    :percentage="100"
    status="success"
  ></z-progress>
  <z-progress isAnimation type="circle" :percentage="100" status="success" />
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
