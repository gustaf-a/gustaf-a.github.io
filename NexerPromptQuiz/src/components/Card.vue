<script setup>
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import quizImg1 from "@/assets/white-dog.jpeg";
import quizImg2 from "@/assets/computer-chat-gpt.jpg";
import quizImg3 from "@/assets/cheers-robot.jpg";

const router = useRouter();

const { quiz } = defineProps(["quiz"]);

const navigateToQuiz = () => {
	router.push(`/quiz/${quiz.id}`);
};

const imgSource = ref("");

onMounted(() => {
	if (quiz.id === 1) {
		imgSource.value = quizImg1;
	}
	if (quiz.id === 2) {
		imgSource.value = quizImg2;
	}
	if (quiz.id === 3) {
		imgSource.value = quizImg3;
	}
});
</script>

<template>
	<div
		class="card"
		@click="navigateToQuiz"
	>
		<img
			:src="imgSource"
			alt=""
		/>
		<div class="card-text">
			<h2>{{ quiz.name }}</h2>
			<p>{{ quiz.questions.length }} questions</p>
		</div>
	</div>
</template>

<style scoped>
.card {
	width: 310px;
	overflow: hidden;
	border-radius: 5%;
	box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
	margin-bottom: 35px;
	margin-right: 20px;
	cursor: pointer;
}

.card img {
	width: 100%;
	height: 190px;
	margin: 0;
}

.card .card-text {
	padding: 0 5px;
	color: white;
}

.card .card-text h2 {
	font-weight: bold;
}
</style>
