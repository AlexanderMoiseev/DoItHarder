<template>
  <div id="slider">
    <h1>{{ slider_message }}</h1>
  </div>
</template>

<script lang="ts">
export default {
  props: ['slider_message'],
  data: function () {
    return {
    }
  }
}
</script>

<style scoped>
p {
  font-size: 10em;
  text-align: center;
}
</style>
