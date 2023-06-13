<script setup>
import { ref, watch } from "vue";

const emit = defineEmits(["selectOption"]);

const props = defineProps(["question"]);

const optionLabels = ["A", "B", "C", "D", "E", "F"];

const selectedOption = ref(null);
const correctAnswerIndex = ref(null);

const hasAnswered = ref(false);

const emitSelectedOption = (isCorrect, index) => {
	if (hasAnswered.value) return;

	hasAnswered.value = true;

	selectedOption.value = index;

	correctAnswerIndex.value = props.question.options.findIndex(
		(option) => option.isCorrect
	);
	emit("selectOption", isCorrect);
};

watch(
	() => props.question.text,
	(newVal, oldVal) => {
		if (newVal !== oldVal) {
			selectedOption.value = null;
			correctAnswerIndex.value = null;
			hasAnswered.value = false;
		}
	}
);
</script>

<template>
	<div class="question-container">
		<h1 class="question">{{ props.question.text }}</h1>
	</div>

	<div class="options-container">
		<div
			class="option"
			v-for="(alternative, index) in props.question.options"
			:key="index"
			@click="emitSelectedOption(alternative.isCorrect, index)"
		>
			<p
				class="option-label"
				:class="{
					'wrong-answer': hasAnswered && alternative.isCorrect == false,
					'correct-answer': hasAnswered && alternative.isCorrect,
				}"
			>
				{{ optionLabels[index] }}
			</p>
			<div
				class="option-value"
				:class="{
					'selected-answer': hasAnswered && selectedOption.value === index,
				}"
			>
				<p
					:class="{
						'correct-answer-text': hasAnswered && alternative.isCorrect,
					}"
				>
					{{ alternative.text }}
				</p>
			</div>
		</div>
	</div>

	<div
		v-if="hasAnswered"
		class="trivia"
	>
		<h3>{{ props.question.trivia }}</h3>
	</div>
</template>

<style scoped>
.question-container {
	margin-top: 20px;
}

.question {
	font-size: 2em;
	margin-bottom: 20px;
	color: white;
}

.option {
	display: flex;
	margin-bottom: 20px;
	cursor: pointer;
}

.option-label {
	background-color: rgb(199, 199, 199);
	width: 50px;
	height: 50px;
	font-size: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.option-value {
	background-color: rgb(244, 239, 239);
	width: 100%;
	font-size: 30px;
	padding: 0 20px;
}

.correct-answer {
	background-color: rgba(0, 128, 0, 1);
	color: black;
	font-weight: 800;
}

.correct-answer-text {
	font-weight: 800;
}

.wrong-answer {
	background-color: rgba(255, 0, 0, 1);
	color: rgba(199, 199, 199, 0.8);
}

.trivia {
	font-size: 1.3em;
	margin-bottom: 20px;
	color: white;
}
</style>
