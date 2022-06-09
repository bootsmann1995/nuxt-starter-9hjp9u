<template>
	<article class="article col-lg-3 col-md-6 col-12 border-radius-10 p-relative">
		<figure class="article__figure w-100 c-mx-reset c-mt-xs c-mt-reset-m border-radius-10">
			<img v-if="item.image" class="article__img ratio-04-3" :src="item.image.url" alt="" />
		</figure>
		<span v-if="item.tagline" class="article__tagline focus-box-tagline focus-box-tagline--normal-letters">
			{{ item.tagline }}
		</span>
		<h3 v-if="item.headline" class="c-my-reset headline-4">{{ item.headline }}</h3>
		<svg class="article__icon" xmlns="http://www.w3.org/2000/svg">
			<use xlink:href="#icon__arrow" />
		</svg>
		<NuxtLink v-if="item.link" :to="item.link.url"></NuxtLink>
	</article>
</template>

<script lang="ts" src="./articleComponent.ts"></script>
<style lang="scss" src="./articleComponent.scss"></style>
