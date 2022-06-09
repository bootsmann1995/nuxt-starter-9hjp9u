<template>
	<button
		ref="el"
		class="tag c-mr-xs c-mb-xs c-mb-reset-m"
		:class="[{ 'is-active': currentActiveTag.id === tag.id }, { 'tag--gray-bg': grayBg === true }]"
		@click="$emit('filter', tag)"
	>
		<span>{{ tag.name }}</span>
	</button>
</template>
<script lang="ts" src="./tagButton.ts"></script>
<style lang="scss" src="./tagButton.scss" scoped></style>
