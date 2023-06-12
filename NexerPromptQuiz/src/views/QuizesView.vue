<script setup>
import q from "../data/quizes.json";

import { ref, watch } from "vue";
import Card from "../components/Card.vue";

import gsap from "gsap";

const quizes = ref(q);
const search = ref("");

watch(search, () => {
  quizes.value = q.filter((quiz) =>
    quiz.name.toLowerCase().includes(search.value.toLowerCase())
  );
});

//To handle animation duration, we install gsap
const beforeEnter = (elementCalledFrom) => {
  //card-enter-from
  elementCalledFrom.style.opacity = 0;
  elementCalledFrom.style.transform = "translateY(-30px)";
};

const enter = (elementCalledFrom) => {
  gsap.to(elementCalledFrom, {
    y: 0,
    opacity: 1,
    duration: 0.4,
    delay: elementCalledFrom.dataset.indexSentToDataset * 0.4,
  });
};
</script>

<template>
  <div>
    <div class="cards-container">
      <TransitionGroup
        name="card"
        appear
        @after-enter="afterEnter"
        @before-enter="beforeEnter"
        @enter="enter"
      >
        <Card
          v-for="(quiz, index) in quizes"
          :key="quiz.id"
          :quiz="quiz"
          :data-index-sent-to-dataset="index"
        ></Card>
      </TransitionGroup>
    </div>
  </div>
</template>

<style scoped>

.cards-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
}

/* CARD
.card-enter-from {
  transform: translateY(-50px);
  opacity: 0;
}

.card-enter-to {
  transform: translateY(0px);
  opacity: 1;
}

.card-enter-active {
  transition: all 0.4s ease;
} */
</style>
