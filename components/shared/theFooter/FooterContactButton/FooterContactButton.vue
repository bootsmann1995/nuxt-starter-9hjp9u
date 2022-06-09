<template>
	<div v-if="item.type === 'info'" class="flex-vertical-center">
		<!-- <img class="footer__banner-icon c-mr-xs c-mr-s-m" src="https://via.placeholder.com/24" alt="/" /> -->

		<svg class="footer__banner-icon c-mr-xs c-mr-s-m" xmlns="http://www.w3.org/2000/svg">
			<use xlink:href="#icon__support" />
		</svg>

		<p class="flex-columns c-my-reset">
			<span class="c-mb-xxs c-mb-3xs-m footer-contact-text--small">{{ item.headline }}</span>
			<span class="footer-contact-text">{{ item.text }}</span>
		</p>
	</div>
	<div v-else-if="item.type === 'phone'" class="flex-vertical-center">
		<svg class="footer__banner-icon c-mr-xs c-mr-s-m" xmlns="http://www.w3.org/2000/svg">
			<use xlink:href="#icon__phone" />
		</svg>
		<div class="flex-columns c-my-reset">
			<span class="c-mb-xxs c-mb-3xs-m footer-contact-text--small">{{ item.headline }}</span>
			<a :href="`tel:${item.value}`" class="footer-contact-text basic-link-animation">{{ item.text }}</a>
		</div>
	</div>
	<div v-else-if="item.type === 'chat'" class="flex-vertical-center">
		<svg class="footer__banner-icon c-mr-xs c-mr-s-m" xmlns="http://www.w3.org/2000/svg">
			<use xlink:href="#icon__chat" />
		</svg>
		<div class="flex-columns basic-link-animation c-my-reset">
			<span class="c-mb-xxs c-mb-3xs-m footer-contact-text--small">{{ item.headline }}</span>
			<button class="footer-contact-text basic-link-animation" @click="$emit('triggerModal')">
				{{ item.text }}
			</button>
		</div>
	</div>
	<div v-else-if="item.type === 'mail'" class="flex-vertical-center">
		<svg class="footer__banner-icon c-mr-xs c-mr-s-m" xmlns="http://www.w3.org/2000/svg">
			<use xlink:href="#icon__mail" />
		</svg>
		<div class="flex-columns basic-link-animation c-my-reset">
			<span class="c-mb-xxs c-mb-3xs-m footer-contact-text--small">{{ item.headline }}</span>
			<a :href="`mailto:${item.value}`" class="footer-contact-text basic-link-animation">{{ item.text }}</a>
		</div>
	</div>
</template>

<script lang="ts" src="./FooterContactButton.ts"></script>
