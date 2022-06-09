<template>
	<div v-if="data" class="w-100">
		<h1 v-if="data.headline" class="headline-1" :class="{ 'headline-2': isSearchPage }">{{ data.headline }}</h1>
		<p
			class="page-intro-teaser"
			:class="[
				{ 'text-manchet': teaserIsManchet },
				{ 'c-mb-4l c-mt-xs-m c-mb-l-m': smallerSpacing },
				{ 'c-my-2l-m': smallerSpacing === false && !isSearchPage && !isDefault },
				{ 'c-mb-2xl': smallerSpacing === false && !isSearchPage },
				{ 'page-intro-teaser--gray': grayText },
				{ 'c-mt-s c-mb-2l': isSearchPage },
				{ 'c-mt-l': !isSearchPage && !grayText && !smallerSpacing && !teaserIsManchet },
				{ 'c-mt-xs-m': isDefault },
			]"
		>
			{{ data.teaser != null ? data.teaser : "" }}
		</p>
	</div>
</template>
<script lang="ts" src="./pageIntro.ts"></script>
<style lang="scss" src="./pageIntro.scss"></style>
