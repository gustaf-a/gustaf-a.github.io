<script setup>
import { RouterView } from "vue-router";
import NexerHeader from "@/components/NexerHeader.vue";
</script>

<template>
	<main>
		<div class="container">
			<div>
				<NexerHeader />
				<RouterView />
			</div>
		</div>
	</main>
</template>

<style scoped>
main {
	height: 100vh;
	width: 100vw;
	background-color: black;
}

.app-styling {
	height: 100vh;
	width: 100vw;
	margin: 0;
	padding: 0;
}

.container {
	max-width: 1000px;
	margin: auto auto;
}
</style>
