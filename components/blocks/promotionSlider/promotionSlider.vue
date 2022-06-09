<template>
	<section v-if="data" ref="promotionSliderRef" class="category-slider promotion-slider overflow-right">
		<div class="flex-space-between c-mb-4l w-100">
			<h2 v-if="data.header" class="headline-2 c-my-reset">{{ data.header }}</h2>
			<NuxtLink v-if="isDesktop" class="btn-tertiary" :to="data.link.url">
				<div class="flex-vertical-center">
					<span>{{ data.link.text }}</span>
					<svg class="c-ml-xxs" xmlns="http://www.w3.org/2000/svg">
						<use xlink:href="#icon__arrow" />
					</svg>
				</div>
			</NuxtLink>
		</div>

		<swiper
			:modules="[Scrollbar]"
			:slides-per-view="isMobile ? 1.43 : isDesktop ? 3 : 2"
			:space-between="isMobile ? 12 : 24"
			:scrollbar="{ draggable: true }"
			@swiper="setSwiper"
		>
			<swiper-slide v-for="slide in data.items" :key="slide">
				<PromotionItem :item="slide" />
			</swiper-slide>
		</swiper>
		<div v-if="!isDesktop" class="flex-horizontal-center">
			<NuxtLink class="btn-tertiary c-mt-3l-m" :to="data.link.url">
				<div class="flex-vertical-center">
					<span>{{ data.link.text }}</span>
					<svg class="c-ml-xxs" xmlns="http://www.w3.org/2000/svg">
						<use xlink:href="#icon__arrow" />
					</svg>
				</div>
			</NuxtLink>
		</div>
	</section>
</template>

<script lang="ts" src="./promotionSlider.ts"></script>
<style lang="scss" src="./promotionSlider.scss"></style>
