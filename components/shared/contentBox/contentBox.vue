<template>
	<div class="content-box">
		<p v-if="data.tag" class="text-tagline c-mt-reset c-mb-xxs">{{ data.tag }}</p>
		<h2 v-if="data.headline" class="headline-3 c-mb-xs">
			{{ data.headline }}
		</h2>
		<div v-if="data.text" class="text-shark--tint-80 c-mb-4l">
			<BaseRichTextEditor :data="data.text" />
		</div>
		<div v-if="data.primaryLink" class="content-box__buttons-wrapper">
			<LinkComponent :data="data.primaryLink" />
		</div>
	</div>
</template>
<script lang="ts" src="./contentBox"></script>
<style lang="scss" src="./contentBox.scss"></style>
