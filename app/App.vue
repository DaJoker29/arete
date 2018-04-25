<template>
  <div>
    <h2>Howdy Y'All Balls</h2>
    <input 
      v-model="todo" 
      type="text" 
      placeholder="To Do">
    <span>{{ todo }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todo: '',
    };
  },
};
</script>

<style>
</style>
