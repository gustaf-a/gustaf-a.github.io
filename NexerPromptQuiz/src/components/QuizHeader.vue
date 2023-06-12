<script setup>
const { questionStatus, progress } = defineProps([
  "questionStatus",
  "progress",
]);
</script>

<template>
  <header>
    <h4>Question {{ questionStatus }}</h4>
    <div class="bar">
      <div
        class="completion"
        :style="{ width: progress }"
      ></div>
    </div>
  </header>
</template>

<style scoped>
header h4 {
  font-size: 30px;
  color: white;
}

.bar {
  width: 300px;
  height: 50px;
  border: 3px solid white;
}

.completion {
  height: 100%;
  width: 0%;
  background-color: white;
}
</style>
