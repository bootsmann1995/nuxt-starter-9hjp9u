<template>
	<div class="video-player">
		<div class="video-player__placeholder">
			<img :src="data.placeholder.url" :alt="data.placeholder.alt" />
			<button class="video-player__play-icon btn-play-icon" @click="playVideo()">
				<svg xmlns="http://www.w3.org/2000/svg">
					<use xlink:href="#icon__play" />
				</svg>
			</button>
		</div>
		<teleport to="body">
			<SimpleModal
				v-if="showVideo"
				:options="{ backgroundColor: 'black', layout: 'fullscreen' }"
				@close-modal="showVideo = false"
			>
				<iframe
					type="text/html"
					:src="`https://www.youtube.com/embed/${data.id}?autoplay=1`"
					frameborder="0"
				></iframe>
			</SimpleModal>
		</teleport>
	</div>
</template>

<script lang="ts" src="./videoPlayer.ts"></script>
<style lang="scss" src="./videoPlayer.scss"></style>
