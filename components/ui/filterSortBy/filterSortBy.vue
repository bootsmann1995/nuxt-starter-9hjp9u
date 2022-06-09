<template>
	<div ref="filter">
		<ais-sort-by v-if="replicas" :class-names="{ 'ais-SortBy': 'filter-sort-by-wrapper' }" :items="replicas">
			<template #default="{ items, currentRefinement, refine }">
				<p
					v-if="!isMobile"
					class="filter-toggle text-navigation cursor-pointer text-navigation--simple c-my-reset"
					@click.prevent="openSortBy()"
				>
					Sorter efter:

					<template v-for="item in items">
						<span
							v-if="item.value === currentRefinement"
							:key="item.value + 'current'"
							class="text-navigation--bold text-navigation--dark c-ml-3xs"
						>
							{{ item.label }}
						</span>
					</template>
					<svg ref="filterToggle" class="sort-by-arrow c-ml-3xs" xmlns="http://www.w3.org/2000/svg">
						<use xlink:href="#icon__arrow-small" />
					</svg>
				</p>
				<div
					v-if="isMobile"
					ref="filterSortByBrackdrop"
					class="filter-sort-by-backdrop"
					@click="openSortBy"
				></div>
				<div ref="filterSortBy" class="filter-sort-by c-p-2l flex-column c-pt-reset-m">
					<div v-if="isMobile" class="filter-sort-by__header flex-center-center c-mb-m">
						<svg class="filter-sort-by__close" xmlns="http://www.w3.org/2000/svg" @click="openSortBy">
							<use xlink:href="#icon__close" />
						</svg>
						<p class="headline-5">Sorter</p>
					</div>
					<a
						v-for="item in items"
						:key="item.value"
						href="#"
						class="filter-sort-by__item c-my-reset text-navigation text-navigation--dark text-navigation--regular"
						:class="[
							{ 'c-mb-m': !isMobile },
							{ 'text-navigation--bold': item.value === currentRefinement && !isMobile },
							{ 'is-active': item.value === currentRefinement && isMobile },
							{ 'c-py-s c-pl-xl flex-space-between flex-vertical-center': isMobile },
						]"
						:value="item.value"
						@click.prevent="refine(item.value), openSortBy()"
					>
						{{ item.label }}
						<svg
							v-if="isMobile"
							:class="[{ 'is-active': item.value === currentRefinement && isMobile }]"
							class="filter-sort-by__checkmark"
							xmlns="http://www.w3.org/2000/svg"
						>
							<use xlink:href="#icon__checkmark" />
						</svg>
					</a>
				</div>
			</template>
		</ais-sort-by>
	</div>
</template>
<script lang="ts" src="./filterSortBy.ts"></script>
