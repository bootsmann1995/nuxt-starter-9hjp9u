<template>
	<div class="video-player border-radius-10">
		<div v-if="showOverlay && data.placeholder" class="video-player__placeholder" @click="playVideo()">
			<img
				v-if="data.placeholder"
				:src="data.placeholder.url"
				:alt="data.placeholder.alt"
				class="border-radius-10 ratio-16-9"
			/>
			<button class="video-player__play-icon btn-play-icon" @click="playVideo()">
				<svg xmlns="http://www.w3.org/2000/svg">
					<use xlink:href="#icon__play" />
				</svg>
			</button>
		</div>
		<iframe
			v-show="(!showOverlay && data.id) || (!data.placeholder && data.id)"
			ref="inlinePlayerRef"
			type="text/html"
			:src="`https://www.youtube.com/embed/${data.id}?autoplay=1`"
			frameborder="0"
		></iframe>
	</div>
</template>

<script lang="ts" src="./inlineVideoPlayer.ts"></script>
<style lang="scss" src="./inlineVideoPlayer.scss"></style>
