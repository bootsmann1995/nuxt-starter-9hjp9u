<template>
	<NuxtLink
		v-if="data && data.ref.url != null"
		:to="data.ref.url"
		:class="[
			{ 'btn-primary': data.type === 'primary' },
			{ 'btn-secondary': data.type === 'secondary' },
			{ 'btn-tertiary': data.type === 'simple' },
		]"
		:target="data.ref.target"
		:download="data.ref.download"
	>
		<template v-if="data.type !== 'simple'">
			{{ data.ref.text }}
		</template>

		<div v-else class="flex-vertical-center">
			<span>{{ data.ref.text }}</span>
			<svg class="c-ml-xxs" xmlns="http://www.w3.org/2000/svg">
				<use xlink:href="#icon__arrow" />
			</svg>
		</div>
	</NuxtLink>
	<Jotform v-else-if="data && data.ref.jotformId" :data="data" :confirm="confirm"> </Jotform>
</template>
<script lang="ts" src="./LinkComponent.ts"></script>
