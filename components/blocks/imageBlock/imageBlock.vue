<template>
	<div class="image-block">
		<img v-if="data.image" class="border-radius-10" :src="data.image.url" :alt="data.image.alt" />
	</div>
</template>

<script lang="ts" src="./imageBlock.ts"></script>
