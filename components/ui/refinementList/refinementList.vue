<template>
	<ais-refinement-list
		class="refinement-list-item c-pb-2l"
		:attribute="filter"
		show-more
		:show-more-limit="isDesktop ? 7 : 99"
		:sort-by="['name']"
	>
		<template #default="{ items, isShowingMore, canToggleShowMore, refine, createURL, toggleShowMore }">
			<ul class="reset-ul c-mt-reset c-mt-l-m">
				<li
					v-for="item in items"
					:key="item.value"
					class="filter-list-item c-mb-xxs"
					:class="[{ 'is-active': item.isRefined }, { 'is-color-checkbox': filter === 'color' }]"
				>
					<NuxtLink
						class="flex flex-vertical-center"
						:to="createURL(item)"
						@click.prevent="refine(item.value)"
					>
						<span
							class="filter-list-item__checkbox c-mr-xxs flex-center-center"
							:class="[{ 'is-active': item.isRefined }, { 'is-color-checkbox': filter === 'color' }]"
							:style="{ backgroundColor: filter === 'color' ? mapColor(item.value) : null }"
						>
							<svg xmlns="http://www.w3.org/2000/svg">
								<use xlink:href="#icon__checkmark" />
							</svg>
						</span>
						<p class="filter-list-item__value c-my-reset c-mr-3xs text-navigation text-navigation--simple">
							<span
								v-if="filter === 'color'"
								class="c-mr-xxs flex-center-center mobile-color-box"
								:class="[{ 'is-color-checkbox': filter === 'color' }]"
								:style="{ backgroundColor: filter === 'color' ? mapColor(item.value) : null }"
							>
							</span>
							{{ item.value }}
							<span class="filter-list-item__count c-my-reset c-ml-3xs"
								>({{ item.count.toLocaleString() }})</span
							>
						</p>

						<svg class="filter-list-item__checkbox-mobile" xmlns="http://www.w3.org/2000/svg">
							<use xlink:href="#icon__checkmark" />
						</svg>
					</NuxtLink>
				</li>
			</ul>
			<button v-if="items.length > 6 && isDesktop" :disabled="!canToggleShowMore" @click="toggleShowMore">
				{{ !isShowingMore ? "+ Mere" : "- Mindre" }}
			</button>
		</template>
	</ais-refinement-list>
</template>
<script lang="ts" src="./refinementList.ts"></script>
<style lang="scss" src="./refinementList.scss" scoped></style>
