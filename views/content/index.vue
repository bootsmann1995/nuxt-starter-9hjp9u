<template>
	<main v-if="data" class="main-grid">
		<ContentPageHero class="l-mb-2l" :hero="data.hero" :class="[{ 'c-mb-reset-m': data.introText }]" />

		<div v-if="data.introText" class="row rte l-my-2l c-mt-reset-m">
			<div class="offset-lg-1 col-lg-10 col-12">
				<BaseRichTextEditor :data="data.introText" />
			</div>
		</div>

		<BlockRouter v-if="data.dynamicContent" :switch-array="data.dynamicContent" />

		<div v-if="data.campaignSlider" class="row">
			<ReferenceBlock :reference-block="data.campaignSlider" class="l-mb-xl" />
		</div>
	</main>
</template>

<script lang="ts" src="./index.page"></script>
