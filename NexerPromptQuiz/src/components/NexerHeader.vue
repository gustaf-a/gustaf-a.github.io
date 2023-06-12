<script setup>
import { useRouter } from "vue-router";
import logoSrc from '@/assets/nexer_logo.png';

const router = useRouter();

// const logoSrc = "https://nexergroup.com/wp-content/uploads/2021/04/nexer-og.png";
// const logoSrc = 'src/assets/nexer_logo.png';

const navigateToHome = () => {
    router.push(`/`);
};
</script>

<template>
	<header>
		<div>
			<img
				@click="navigateToHome"
				:src="logoSrc"
				alt="Logo"
				class="logo"
			/>
		</div>
		<div class="titles">
			<h1 class="quizes-title">Nexer AI Prompting Quiz!</h1>
			<p class="quizes-subtitle">
				What do you know about working with language models?
			</p>
		</div>
	</header>
</template>

<style scoped>
header {
	margin-bottom: 0px;
	margin-top: 0px;
	padding-top: 3vh;
	padding-bottom: 0vh;
	display: flex;
	align-items: center;
	justify-content: start;
}

.logo {
	margin-right: 3vw;
	max-width: 20vw;
    cursor: pointer;
}

.titles {
	display: flex;
	align-items: start;
	justify-content: start;
	flex-direction: column;
}

.quizes-title {
	font-weight: bold;
	color: white;
	font-size: 2.52em;
}

.quizes-subtitle {
	color: white;
	font-size: larger;
}

header input {
	border: none;
	background-color: rgba(128, 128, 128, 0.1);
	padding: 10px;
	border-radius: 10px;
}
</style>
