<template>
	<div class="focus-box border-radius-10" :class="[{ 'is-absolute': isAbsolute }, type ? `is-${type}` : '']">
		<p v-if="data.tag" class="focus-box__tag c-mt-reset c-mb-xxs focus-box-tagline">{{ data.tag }}</p>
		<p v-if="data.headline" class="focus-box__headline c-my-reset focus-box-headline">
			{{ data.headline }}
		</p>
		<p v-if="data.text" class="focus-box__text focus-box-text c-my-reset c-mt-xs">{{ data.text }}</p>
		<div v-if="data.primaryLink || data.secondaryLink" class="focus-box__buttons-wrapper c-mt-4l">
			<template v-if="!hasCustomLinks">
				<LinkComponent class="c-mr-2l" :data="data.primaryLink" />
				<LinkComponent :data="data.secondaryLink" />
			</template>
			<template v-else>
				<LinkComponent class="c-mr-2l" :data="data.primaryLink" />
				<LinkComponent :data="data.secondaryLink" />
			</template>
		</div>
	</div>
</template>
<script lang="ts" src="./focusBox"></script>
<style lang="scss" src="./focusBox.scss"></style>
