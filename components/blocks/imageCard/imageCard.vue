<template>
	<NuxtLink
		v-if="card && card.link"
		:to="card.link.url"
		class="c-mb-2l c-mb-4l-m image-card border-radius-10"
		:class="colClasses"
	>
		<div ref="item" class="c-pt-xs c-pb-2l c-pt-reset-m c-pb-reset-m">
			<img v-if="card.image" class="image-card__img c-mb-m border-radius-10" :src="card.image.url" alt="" />
			<p v-if="card.date" class="image-card__date c-mb-3xs c-mt-reset text-label">{{ card.date }}</p>
			<h2 v-if="card.headline" class="headline-4 c-mb-reset image-card__headline text-ellipsis text-ellipsis--2">
				{{ card.headline }}
				<svg class="image-card__icon" xmlns="http://www.w3.org/2000/svg">
					<use xlink:href="#icon__arrow" />
				</svg>
			</h2>
		</div>
	</NuxtLink>
</template>
<script lang="ts" src="./imageCard.ts"></script>
<style lang="scss" src="./imageCard.scss" scoped></style>
