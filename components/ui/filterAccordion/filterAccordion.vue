<template>
	<div v-if="filter" ref="filterEl" class="filter-list" :class="{ 'is-open': filterIsOpen }">
		<button
			class="
				filter-list__button
				btn--no-bg
				flex-vertical-center flex-space-between
				c-pt-l c-pb-s c-px-reset
				w-100
			"
			@click="toggleFilter"
		>
			{{ filter }}
			<svg
				class="filter-list__button-icon"
				:class="{ 'is-open': filterIsOpen }"
				xmlns="http://www.w3.org/2000/svg"
			>
				<use xlink:href="#icon__arrow-small" />
			</svg>
		</button>
		<slot @set-height="setFilterHeight"></slot>
	</div>
</template>
<script lang="ts" src="./filterAccordion.ts"></script>
<style lang="scss" src="./filterAccordion.scss"></style>
