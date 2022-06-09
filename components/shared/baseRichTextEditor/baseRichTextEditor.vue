<template>
	<div class="base-rte text">
		<NuxtRichText :document="data" :node-renderers="renderNodes()" />
	</div>
</template>

<script lang="ts" src="./baseRichTextEditor.ts"></script>
<style lang="scss" src="./baseRichTextEditor.scss"></style>
