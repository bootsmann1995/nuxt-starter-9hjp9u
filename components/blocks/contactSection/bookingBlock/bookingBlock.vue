<template>
	<div class="booking-block border-radius-10 flex-column c-px-3l c-py-4l">
		<h3 class="card-price c-my-reset c-mb-l">{{ item.headline }}</h3>
		<NuxtLink class="btn-primary booking-block__button" :to="item.link.url" :target="item.link.target">
			{{ item.link.text }}
		</NuxtLink>
	</div>
</template>

<script lang="ts" src="./bookingBlock.ts"></script>
<style lang="scss" src="./bookingBlock.scss"></style>
