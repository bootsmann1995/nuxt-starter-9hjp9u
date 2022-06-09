<template>
	<a v-if="item.value === 'phone'" class="model-contact-btn flex col-lg-6 col-12" :href="'tel:' + item.text">
		<div class="model-contact-btn__content flex-vertical-center footer-contact-text footer-contact-text--bold">
			<svg class="model-contact-btn__icon c-mr-xs c-mr-s-m" xmlns="http://www.w3.org/2000/svg">
				<use xlink:href="#icon__call" />
			</svg>
			<span>{{ item.text }}</span>
		</div>
	</a>
	<a v-else-if="item.value === 'finance'" class="model-contact-btn flex col-lg-6 col-12" :href="item.id">
		<div class="model-contact-btn__content flex-vertical-center footer-contact-text footer-contact-text--bold">
			<svg class="model-contact-btn__icon c-mr-xs c-mr-s-m" xmlns="http://www.w3.org/2000/svg">
				<use xlink:href="#icon__calculator" />
			</svg>
			<span>{{ item.text }}</span>
		</div>
	</a>
	<a v-if="item.value === 'read more'" class="model-contact-btn flex col-lg-6 col-12" :href="item.id">
		<div class="model-contact-btn__content flex-vertical-center footer-contact-text footer-contact-text--bold">
			<svg class="model-contact-btn__icon c-mr-xs c-mr-s-m" xmlns="http://www.w3.org/2000/svg">
				<use xlink:href="#icon__return" />
			</svg>
			<span>{{ item.text }}</span>
		</div>
	</a>
	<a v-if="item.value === 'map'" class="model-contact-btn flex col-lg-6 col-12" :href="item.id">
		<div class="model-contact-btn__content flex-vertical-center footer-contact-text footer-contact-text--bold">
			<svg class="model-contact-btn__icon c-mr-xs c-mr-s-m" xmlns="http://www.w3.org/2000/svg">
				<use xlink:href="#icon__location" />
			</svg>
			<span>{{ item.text }}</span>
		</div>
	</a>
</template>

<script lang="ts" src="./modelContactButton.ts"></script>
<style lang="scss" src="./modelContactButton.scss"></style>
