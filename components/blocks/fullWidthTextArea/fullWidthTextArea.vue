<template>
	<div v-if="data" class="row">
		<div class="offset-lg-1 col-lg-10">
			<BaseRichTextEditor :data="data.text" />
		</div>
	</div>
</template>
<script lang="ts" src="./fullWidthTextArea.ts"></script>
