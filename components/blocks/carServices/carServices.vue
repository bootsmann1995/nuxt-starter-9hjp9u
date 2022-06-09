<template>
	<div class="car-services c-mb-2l-m">
		<h2 class="card-tag text-shark c-mt-reset c-mb-m">{{ item.headline }}</h2>
		<div class="car-services__link-wrapper flex-wrap">
			<div v-for="(car, index) in item.cars" :key="index" class="car-services__link-item p-relative">
				<img :src="car.image.url" :alt="car.image.alt" />
				<NuxtLink class="absolute-link" :to="car.url"></NuxtLink>
			</div>
		</div>
	</div>
</template>

<script lang="ts" src="./carServices.ts"></script>
<style lang="scss" src="./carServices.scss"></style>
