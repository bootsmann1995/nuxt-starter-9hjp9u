<template>
	<div class="row">
		<div class="col-lg-10 offset-lg-1">
			<section ref="ctaBanner" class="cta-banner border-radius-10 flex-column flex-vertical-center">
				<h2 v-if="data.header" class="headline-3 c-mt-reset c-mb-l">{{ data.header }}</h2>
				<p
					v-if="data.highlightedText"
					class="cta-banner__text text-shark--tint-80 c-mt-reset c-mb-4l"
					v-html="data.highlightedText"
				></p>

				<LinkComponent :data="data.cta" />
			</section>
		</div>
	</div>
</template>

<script lang="ts" src="./ctaBanner.ts"></script>
<style lang="scss" src="./ctaBanner.scss"></style>
