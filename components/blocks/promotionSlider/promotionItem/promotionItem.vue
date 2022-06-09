<template>
	<article class="promotion-item border-radius-10 p-relative">
		<figure class="c-mb-s c-mt-reset c-mx-reset">
			<img
				v-if="item.image"
				class="ratio-04-3 border-radius-10"
				:src="item.image.url"
				:alt="item.image.description"
			/>
		</figure>
		<NuxtLink :to="item.link.url" class="absolute-link">
			<h3 v-if="item.headline" class="headline-4 c-my-reset">{{ item.headline }}</h3>
		</NuxtLink>
		<svg class="promotion-item__icon" xmlns="http://www.w3.org/2000/svg">
			<use xlink:href="#icon__arrow" />
		</svg>
	</article>
</template>

<script lang="ts" src="./promotionItem.ts"></script>
<style lang="scss" src="./promotionItem.scss"></style>
