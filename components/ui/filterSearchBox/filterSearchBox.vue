<template>
	<ais-search-box
		placeholder="Søg efter mærke, farve, udstyr osv."
		:autofocus="true"
		:show-loading-indicator="false"
		:class-names="{
			'ais-SearchBox': 'filter-search-box',
		}"
	>
		<template #submit-icon>
			<svg class="filter-search-box__icon" xmlns="http://www.w3.org/2000/svg">
				<use xlink:href="#icon__search" />
			</svg>
		</template>
	</ais-search-box>
</template>
<script lang="ts" src="./filterSearchBox.ts"></script>
