<template>
	<div class="category-item flex-center-center p-relative" :class="{ 'has-text': showText }">
		<div class="flex-column flex-center-center flex-c-gap-xxs category-item__content-wrap">
			<div class="category-item__image-wrapper">
				<img v-if="item.image" :src="item.image.url" :alt="item.image.alt" />
			</div>
			<span v-if="showText && item.name" class="spec-text">
				{{ item.name }}
			</span>
		</div>
		<NuxtLink v-if="item.link" class="absolute-link" :to="item.link.url">
			<span v-if="item.name" class="visually-hidden">
				{{ item.name }}
			</span>
		</NuxtLink>
	</div>
</template>

<script lang="ts" src="./categoryItem.ts"></script>
<style lang="scss" scoped src="./categoryItem.scss"></style>
