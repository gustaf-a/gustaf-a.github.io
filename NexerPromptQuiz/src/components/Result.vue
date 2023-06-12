<script setup>
import { RouterLink } from "vue-router";

const { quizQuestionLength, numberOfCorrectAnswers, messageToUser } = defineProps([
  "quizQuestionLength",
  "numberOfCorrectAnswers",
  "messageToUser"
]);

const messageToTheUser = messageToUser ? messageToUser : "Results"

</script>

<template>
  <div class="results">
    <p>{{ messageToTheUser }}</p>
    <h1>{{ numberOfCorrectAnswers }}/{{ quizQuestionLength }}</h1>
    <RouterLink to="/" class="back">Go Back</RouterLink>
  </div>
</template>

<style scoped>
.results {
  text-align: center;
  padding: 100px 0;
  color: white;
}

.back{
  color: white;
}

p {
  font-size: 25px;
}

h1 {
  font-size: 80px;
}
</style>
