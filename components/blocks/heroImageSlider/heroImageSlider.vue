<template>
	<section ref="imageSliderRef" class="hero-slider w-100 p-relative">
		<!-- SWIPER DESKTOP -->

		<swiper
			ref="swiper"
			class="hero-slider__main-slider c-mb-2l c-mb-l-m"
			:slides-per-view="1"
			:modules="[Controller, Scrollbar]"
			:controller="{ control: secondSwiper }"
			:scrollbar="{ draggable: true }"
			@swiper="setFirstSwiper"
		>
			<swiper-slide v-for="slide in slider" :key="slide" @click="openModal()">
				<div class="hero-slider__slide">
					<img
						v-if="slide.image && slide.image.url"
						class="hero-slider__img border-radius-10 image-reveal"
						:src="slide.image.url"
						:alt="slide.image.alt"
					/>
					<template v-if="slide.video && slide.video.id">
						<InlineVideoPlayer v-if="slide.video" :data="slide.video" />
					</template>
					<div
						v-if="isDesktop"
						class="slide-backdrop flex-center-center mobile-function-link mobile-function-link--bold"
					>
						<span v-if="slide">Se {{ getImages() }} billeder og {{ getVideos() }} video</span>
					</div>
				</div>
			</swiper-slide>
		</swiper>
		<swiper
			v-if="isDesktop"
			ref="thumbSwiper"
			class="hero-slider__thumbnail-slider"
			:slides-per-view="2"
			:space-between="24"
			:free-mode="true"
			:watch-slides-progress="true"
			:modules="[Controller]"
			:controller="{ control: firstSwiper }"
			@swiper="setSecondSwiper"
		>
			<swiper-slide v-for="slide in slider" :key="slide" @click="openModal()">
				<div class="hero-slider__slide">
					<img
						v-if="slide.image && slide.image.url"
						class="hero-slider__img border-radius-10 image-reveal"
						:src="slide.image.url"
						:alt="slide.image.alt"
					/>
					<template v-if="slide.video && slide.video.id">
						<img :src="slide.video.placeholder.url" :alt="slide.video.placeholder.alt" />
					</template>
					<div class="slide-backdrop flex-center-center mobile-function-link mobile-function-link--bold">
						<span v-if="slide">Se {{ getImages() }} billeder og {{ getVideos() }} video</span>
					</div>
				</div>
			</swiper-slide>
		</swiper>

		<!-- SWIPER MODAL -->
		<teleport to="body">
			<SimpleModal
				v-if="isOpen && isDesktop"
				class="hero-modal flex-horizontal-center"
				:options="{ layout: 'fullwidth', backgroundColor: 'default' }"
				@close-modal="isOpen = false"
			>
				<div class="hero-modal__wrapper">
					<swiper
						ref="modalSwiper"
						class="hero-slider__modal-slider"
						:slides-per-view="1.3"
						:centered-slides="true"
						:space-between="24"
						:watch-slides-progress="true"
						:navigation="true"
						:modules="[Scrollbar, Pagination, Navigation]"
						:scrollbar="{ draggable: true }"
						:pagination="{
							type: 'fraction',
						}"
						@swiper="swiperModal"
					>
						<swiper-slide v-for="slide in slider" :key="slide">
							<div class="hero-slider__slide">
								<img
									v-if="slide.image && slide.image.url"
									class="hero-slider__img border-radius-10 image-reveal"
									:src="slide.image.url"
									:alt="slide.image.alt"
								/>
								<template v-if="slide.video && slide.video.id">
									<InlineVideoPlayer v-if="slide.video" :data="slide.video" />
								</template>
							</div>
						</swiper-slide>
					</swiper>
				</div>
			</SimpleModal>
		</teleport>
	</section>
</template>

<script lang="ts" src="./heroImageSlider.ts"></script>
<style lang="scss" src="./heroImageSlider.scss"></style>
