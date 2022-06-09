<template>
	<div v-if="data" ref="advantagesSection" class="advantages w-100 h-100 flex">
		<div class="advantages__advantage-section col-lg-4 offset-lg-1 col-12">
			<h2 v-if="isDesktop" class="headline-3 c-mb-4l c-mt-reset">{{ data.header }}</h2>
			<div
				v-for="(advantage, index) in data.text"
				:key="index"
				class="
					advantages__single-advantage
					c-mb-s
					sub-headline-text sub-headline-text--bold
					flex-vertical-center
				"
			>
				<svg class="advantages__icon c-mr-s c-mr-s-m" xmlns="http://www.w3.org/2000/svg">
					<use xlink:href="#icon__confirmed" />
				</svg>
				<span> {{ advantage }} </span>
			</div>
		</div>
		<div class="advantages__video-section col-lg-5 offset-lg-1 col-12 c-mb-2l-m">
			<template v-if="data.video">
				<InlineVideoPlayer v-if="data.video" :data="data.video" />
			</template>
			<img v-else-if="data.image" class="border-radius-10" :src="data.image.url" :alt="data.image.alt" />
		</div>
		<h2 v-if="!isDesktop" class="col-12 c-mb-4l c-mt-reset">{{ data.header }}</h2>
	</div>
</template>

<script lang="ts" src="./advantagesComponent.ts"></script>
<style lang="scss" src="./advantagesComponent.scss"></style>
