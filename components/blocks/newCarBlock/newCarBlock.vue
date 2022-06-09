<template>
	<section class="card-wrapper w-100 flex-wrap c-mt-l-m">
		<CarCard v-for="(item, index) in data.items" :key="index" :item="item"></CarCard>
	</section>
</template>
<script lang="ts" src="./newCarBlock.ts"></script>
