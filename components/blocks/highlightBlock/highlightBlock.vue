<template>
	<div ref="highlightBlockRef" class="row fade-in-animation">
		<div class="col-lg-4 offset-lg-1">
			<h2 class="c-mb-l">{{ data.highlightContent }}</h2>
		</div>
		<div class="col-lg-5 offset-lg-1" :class="[{ 'flex-columns flex-vertical-center': isMobile }]">
			<div class="c-my-reset text-shark--tint-80">
				<BaseRichTextEditor :data="data.detailedContent.description" />
			</div>
			<div class="flex">
				<NuxtLink
					v-if="data.detailedContent.ctaLink || data.detailedContent.ctaLink"
					class="btn-primary c-mt-4l align-center--tablet"
					:to="data.detailedContent.ctaLink.id"
				>
					{{ data.detailedContent.ctaLink }}
				</NuxtLink>
			</div>
		</div>
	</div>
</template>
<script lang="ts" src="./highlightBlock"></script>
