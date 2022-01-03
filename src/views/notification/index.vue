<template>
  <div>
    <notification :value="50" :max="30"></notification>
    <br />
    <notification icon="chatRound" :value="50" :max="30">
      <template #default>
        <zhenList></zhenList>
      </template>
    </notification>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
