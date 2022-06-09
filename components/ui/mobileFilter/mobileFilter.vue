<template>
	<div>
		<div
			class="filter-mobile hide-scroll c-pt-xxs"
			:class="[{ 'is-active': isActive }, { 'has-child-active': currentActive !== '' }]"
		>
			<!-- FILTER HEADER -->
			<div class="flex-space-between flex-vertical-center c-pb-3xs c-px-xxs">
				<button class="c-p-reset filter-mobile__close" @click="$emit('close-filter')">
					<svg class="w-100 h-100" xmlns="http://www.w3.org/2000/svg">
						<use xlink:href="#icon__close" />
					</svg>
				</button>
				<p class="c-p-reset headline-5 p-absolute p-center c-py-reset">Filtrer</p>
				<ais-clear-refinements :class-names="{ 'ais-ClearRefinements': ' ' }">
					<ais-clear-refinements>
						<template #default="{ refine, createURL }">
							<p :href="createURL()" class="text-p text-p--bold" @click.prevent="refine">Ryd alle</p>
						</template>
					</ais-clear-refinements>
				</ais-clear-refinements>
			</div>

			<div class="filter-mobile__wrapper">
				<!-- MAIN FILTER MENU -->
				<div v-for="(item, index) in refinements" :key="'mobile' + item.filter">
					<button
						:class="[
							{ 'c-mb-menu': index === refinements.length - 1 },
							{ 'border-top border-top--mischka-20': index === 0 },
						]"
						class="
							filter-mobile__item
							flex-space-between flex-vertical-center
							mobile-menu-link mobile-menu-link--small
							c-px-3xs
						"
						@click="setCurrentActive(item.filter)"
					>
						{{ item.name }}
						<svg class="filter-mobile__item-icon" xmlns="http://www.w3.org/2000/svg">
							<use xlink:href="#icon__arrow-small" />
						</svg>
						<ais-current-refinements
							:included-attributes="[item.filter]"
							:class-names="{ 'ais-CurrentRefinements': 'filter-mobile__refinements' }"
						>
							<template #default="{ items }">
								<ul
									v-for="refinementLists in items"
									:key="refinementLists.attribute"
									class="reset-ul flex flex-wrap"
								>
									<span
										v-for="refinement in refinementLists.refinements"
										:key="
											[
												refinement.attribute,
												refinement.type,
												refinement.value,
												refinement.operator,
											].join(':')
										"
										class="
											filter-current-refinement
											c-ml-reset c-mr-3xs
											text-ellipsis text-ellipsis--1
										"
									>
										{{ refinement.label }}
									</span>
								</ul>
							</template>
						</ais-current-refinements>
					</button>
				</div>
				<button class="btn-primary w-100 close-filter-button c-mt-xl" @click="$emit('close-filter')">
					Se
					<ais-stats :class-names="{ 'ais-Stats': 'close-filter-button__count' }">
						<template #default="{ nbHits }">
							{{ nbHits }}
						</template>
					</ais-stats>
					biler
				</button>
			</div>
		</div>
		<!-- SUB FILTER MENU -->
		<div
			v-for="item in refinements"
			:key="'mobile' + item"
			class="filter-mobile-sub c-pt-l flex-column flex-space-between"
			:class="{ 'is-active': currentActive === item.filter }"
		>
			<div>
				<div class="flex flex-vertical-center">
					<button
						class="btn-tertiary btn-tertiary--icon-first btn-tertiary--big flex-vertical-center"
						@click="setCurrentActive('')"
					>
						<svg class="c-mr-xxs" xmlns="http://www.w3.org/2000/svg">
							<use xlink:href="#icon__arrow-small" />
						</svg>
						Alle filtre
					</button>
					<p class="c-p-reset headline-5 p-absolute p-center c-my-reset">{{ item.name }}</p>
				</div>
				<template v-if="item.type === 'checkbox'">
					<RefinementList :filter="item.filter" />
				</template>
				<template v-else-if="item.filter === 'price'">
					<TabGroup
						:tabs="['Kontant', 'Finansiering']"
						:is-button-styling="true"
						@tab-change="$emit('tab-change')"
					>
						<section :key="'Kontant'" :class="`panel-Kontant`">
							<FilterRangeInput :filter="item.filter" />
						</section>

						<section :key="'Finansiering'" :class="`panel-Finansiering`">
							<FilterRangeInput filter="leasingMonthlyPayment" />
						</section>
					</TabGroup>
				</template>
				<template v-else-if="item.type === 'range'">
					<div class="l-mt-s c-pt-3l border-top border-top--mischka-20">
						<FilterRangeInput :filter="item.filter" />
					</div>
				</template>
			</div>
			<button class="btn-primary w-100 close-filter-button" @click="$emit('close-filter'), setCurrentActive('')">
				Se
				<ais-stats :class-names="{ 'ais-Stats': 'close-filter-button__count' }">
					<template #default="{ nbHits }">
						{{ nbHits }}
					</template>
				</ais-stats>
				biler
			</button>
		</div>
	</div>
</template>
<script lang="ts" src="./mobileFilter.ts"></script>
<style lang="scss" src="./mobileFilter.scss"></style>
