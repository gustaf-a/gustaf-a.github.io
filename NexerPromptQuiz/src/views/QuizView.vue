<script setup>
import { useRoute } from "vue-router";
import { ref, computed } from "vue";

import quizes from "../data/quizes.json";
import allQuizResponses from "../data/responses.json";
import Question from "../components/Question.vue";
import QuizHeader from "../components/QuizHeader.vue";
import Result from "../components/Result.vue";

import NotFound from "../views/404View.vue";

const route = useRoute();

const quizId = parseInt(route.params.id);
const quiz = quizes.find((q) => q.id == quizId);

const currentQuestionIndex = ref(0);
const numberOfCorrectAnswers = ref(0);

const showResults = ref(false);
const showNextButton = ref(false);
const answerGiven = ref(false);

const questionStatus = computed(
	() => `${currentQuestionIndex.value + 1}/${quiz.questions.length}`
);
const progress = computed(
	() => `${(currentQuestionIndex.value / quiz.questions.length) * 100}%`
);

const messageToUser = computed(() => {
	let quizResponses = allQuizResponses[quizId-1];
	
	const scaledValue = calculateScaledValue(quizes[quizId].questions.length, numberOfCorrectAnswers.value)
	let messageToUser = quizResponses[scaledValue];

	return messageToUser;
});


const onOptionSelected = (isCorrect) => {
	if (answerGiven.value) return;

  answerGiven.value = true;

	if (isCorrect) {
		numberOfCorrectAnswers.value++;
	}

	showNextButton.value = true;
};

const nextQuestion = () => {
	currentQuestionIndex.value++;

	answerGiven.value = false;
	showNextButton.value = false;

	if (quiz.questions.length <= currentQuestionIndex.value) {
		showResults.value = true;
	}
};

// const getMessageToUser = () => {
// 	let quizResponses = allQuizResponses[quizId-1];
	
// 	const scaledValue = calculateScaledValue(quiz.questions.length, numberOfCorrectAnswers.value)
// 	let messageToUser = quizResponses[scaledValue];

// 	return messageToUser;
// };

function calculateScaledValue(maxValue, actualValue) {
  if (maxValue <= 0 || actualValue < 0) {
    throw new Error("Invalid input. maxValue should be > 0 and actualValue should be >= 0.");
  }

  let ratio = actualValue / maxValue;
  let scaledValue = ratio * 10;
  let roundedScaledValue = Math.round(scaledValue);
  return Math.min(roundedScaledValue, 10);
}
</script>

<template>
	<div v-if="quiz">
		<div>
			<Question
				v-if="!showResults"
				:question="quiz.questions[currentQuestionIndex]"
				@selectOption="onOptionSelected"
			/>
			<Result
				v-else
				:quizQuestionLength="quiz.questions.length"
				:numberOfCorrectAnswers="numberOfCorrectAnswers"
				:messageToUser="messageToUser"
			></Result>
		</div>
		<div class="quizheader">
			<QuizHeader
				v-if="!showResults"
				:questionStatus="questionStatus"
				:progress="progress"
			/>
			<div class="next-button-container">
				<button
					v-if="showNextButton"
					class="next-question"
					@click="nextQuestion"
				>
					Next Question
				</button>
			</div>
		</div>
	</div>
	<div v-else>
		<NotFound />
	</div>
</template>

<style scoped>
.quizheader {
	display: flex;
	align-items: end;
	justify-content: center;
}

.next-button-container {
	width: 20vw;
}

.next-question {
	font-size: 2em;
	margin-left: 2vw;
	margin-bottom: 1vh;
	cursor: pointer;
}
</style>
