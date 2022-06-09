<template>
	<div>
		<div
			v-for="(item, index) in switchArray"
			:key="item.typename + index"
			class="l-my-xl"
			:class="[{ 'l-my-xl': !item.data.lessSpacing }, { 'l-my-l': !item.data.lessSpacing }]"
		>
			<Component :is="RenderComponent(item.typename)" :data="item.data" />
		</div>
	</div>
</template>
<script lang="ts" src="./blockRouter.ts"></script>
