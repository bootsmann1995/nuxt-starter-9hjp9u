<template>
	<section ref="reference" class="reference-block w-100">
		<div class="flex-space-between flex-vertical-center col-12 c-mb-3l c-mb-4l-m">
			<h2 v-if="referenceBlock.header" class="reference-block__header c-my-reset">
				{{ referenceBlock.header }}
			</h2>

			<NuxtLink
				v-if="referenceBlock.link"
				:to="referenceBlock.link.url"
				:target="referenceBlock.link.target"
				class="btn-tertiary reference-block__btn-desktop"
			>
				<div class="flex-vertical-center">
					<span>
						{{ referenceBlock.link.text }}
					</span>
					<svg class="c-ml-xxs" xmlns="http://www.w3.org/2000/svg">
						<use xlink:href="#icon__arrow" />
					</svg>
				</div>
			</NuxtLink>
		</div>

		<div class="reference-block__article-wrapper flex-wrap">
			<ArticleComponent v-for="(item, index) in referenceBlock.articleCollection" :key="index" :item="item" />
		</div>

		<NuxtLink
			v-if="referenceBlock.link"
			:to="referenceBlock.link.url"
			:target="referenceBlock.link.target"
			class="btn-tertiary reference-block__btn-mobile col-12"
		>
			<div class="flex-vertical-center">
				<span>
					{{ referenceBlock.link.text }}
				</span>
				<svg class="c-ml-xxs" xmlns="http://www.w3.org/2000/svg">
					<use xlink:href="#icon__arrow" />
				</svg>
			</div>
		</NuxtLink>
	</section>
</template>

<script lang="ts" src="./referenceBlock.ts"></script>
<style lang="scss" src="./referenceBlock.scss"></style>
