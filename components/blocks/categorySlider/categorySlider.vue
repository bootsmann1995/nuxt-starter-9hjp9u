<template>
	<section ref="categorySliderRef" class="category-slider overflow-right">
		<h2 class="headline-2">{{ slider.headline }}</h2>

		<!-- Multiple sliders with tabs -->
		<TabGroup v-if="slider.categories.length > 1" :tabs="categoryNames">
			<section
				v-for="category in slider.categories"
				:key="category.categoryName"
				:class="`panel-${category.categoryName}`"
			>
				<swiper
					:modules="[Scrollbar]"
					:slides-per-view="isDesktop ? 6 : isTablet ? 3.5 : 2"
					:space-between="isTablet ? 24 : 8"
					:scrollbar="{ draggable: true }"
					@swiper="setSwiper"
				>
					<swiper-slide v-for="slide in category.items" :key="slide.id">
						<CategoryItem :item="slide" :show-text="slide.name != null && slide.name.length > 0" />
					</swiper-slide>
				</swiper>
			</section>
		</TabGroup>

		<!-- Single slider -->
		<swiper
			v-else
			:modules="[Scrollbar]"
			:slides-per-view="isDesktop ? 6 : isTablet ? 3.5 : 2"
			:space-between="isTablet ? 24 : 8"
			:scrollbar="{ draggable: true }"
			@swiper="setSwiper"
		>
			<swiper-slide v-for="slide in slider.categories[0].items" :key="slide.id"
				><CategoryItem :item="slide" :show-text="slide.name != null && slide.name.length > 0" />
			</swiper-slide>
		</swiper>
	</section>
</template>

<script lang="ts" src="./categorySlider.ts"></script>
<style lang="scss" src="./categorySlider.scss"></style>
