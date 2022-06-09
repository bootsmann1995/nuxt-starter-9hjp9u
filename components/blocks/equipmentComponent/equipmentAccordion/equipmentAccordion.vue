<template>
	<div>
		<h3 class="col-lg-3 c-px-reset-m c-mb-l-m col-12h headline-4">{{ equipment.headline }}</h3>
		<div class="equipment__item col-lg-9 col-12 c-px-reset-m flex-wrap" :class="[{ 'is-expanded': isExpanded }]">
			<p
				v-for="single in equipment.equipment"
				:key="single"
				class="col-lg-4 col-12 focus-box-text c-mt-reset c-mb-2l c-mb-xs-m"
			>
				{{ single }}
			</p>
		</div>
		<button class="c-pl-2l c-pl-xs-m c-pr-reset c-mt-2l c-mt-s-m offset-lg-3" @click="toggleReadMore()">
			<span v-if="!isExpanded">Vis mere</span>
			<span v-if="isExpanded">Vis mindre</span>
		</button>
	</div>
</template>

<script lang="ts" src="./equipmentAccordion.ts"></script>
