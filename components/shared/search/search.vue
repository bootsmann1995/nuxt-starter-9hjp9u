<template>
	<div class="main-grid">
		<ais-instant-search
			:search-client="searchClient"
			:hits-per-page.camel="24"
			:index-name="searchIndex"
			:routing="routing"
		>
			<div class="row l-mb-2xl">
				<div class="col-lg-3 l-mt-reset-m">
					<div v-if="!isMobile" ref="fixedEl" class="filter-desktop l-pb-l c-pr-4l">
						<div v-for="facet in refinements" :key="facet.filter">
							<template v-if="facet.type === 'checkbox'">
								<FilterAccordion :filter="facet.name" :filter-is-active="facet.filter === 'brand'">
									<RefinementList :filter="facet.filter" />
								</FilterAccordion>
							</template>
							<template v-else-if="facet.filter === 'price'">
								<FilterAccordion :filter="facet.name" :filter-is-active="true">
									<TabGroup
										:tabs="['Kontant', 'Finansiering']"
										:is-button-styling="true"
										@tab-change="tabChange"
									>
										<section :key="'Kontant'" :class="`panel-Kontant`">
											<FilterRangeInput :filter="facet.filter" />
										</section>

										<section :key="'Finansiering'" :class="`panel-Finansiering`">
											<FilterRangeInput filter="leasingMonthlyPayment" />
										</section>
									</TabGroup>
								</FilterAccordion>
							</template>
							<template v-else-if="facet.type === 'range'">
								<FilterAccordion :filter="facet.name">
									<FilterRangeInput :filter="facet.filter" />
								</FilterAccordion>
							</template>
						</div>
					</div>
				</div>
				<div class="col-lg-9 l-mt-2l l-mt-s-m">
					<PageIntro
						v-if="hero && hero.headline && hero.text"
						:is-search-page="true"
						:gray-text="true"
						:data="{ headline: hero.headline, teaser: hero.text }"
					/>
					<div v-if="!isMobile" class="filter-current-refinements-wrapper flex">
						<FilterCurrentRefinements />
					</div>
					<div class="c-mb-3l c-mb-4l-m c-mt-reset">
						<FilterSearchBox />
					</div>
					<div v-if="isMobile" class="filter-mobile-wrapper">
						<div class="flex-space-around border-bottom border-bottom--gray">
							<button
								class="btn btn-filter c-py-2l c-px-xxs flex-center-center"
								@click="openMobileFilter"
							>
								<svg class="c-mr-xs" xmlns="http://www.w3.org/2000/svg">
									<use xlink:href="#icon__filter" />
								</svg>
								Filtrer
								<span class="flex-center-center">
									<ais-current-refinements>
										<template #default="{ items }">
											<span v-if="items.length > 0" class="btn-filter__count c-ml-xxs">{{
												items.length
											}}</span>
										</template>
									</ais-current-refinements>
								</span>
							</button>
							<span class="border-left border-left--gray c-my-s d-block"></span>
							<button
								class="btn btn-filter c-py-2l c-px-xxs flex-center-center"
								@click="toggleSortByMobile()"
							>
								<svg class="c-mr-xs icon-sort" xmlns="http://www.w3.org/2000/svg">
									<use xlink:href="#icon__sort" />
								</svg>
								Sortér
							</button>
						</div>
						<MobileFilter
							:refinements="refinements"
							:is-active="mobileFilterIsActive"
							@close-filter="openMobileFilter"
							@tab-change="tabChange"
						/>
					</div>
					<div class="c-mb-4l c-mt-3l c-mt-l-m c-mb-2l-m flex-space-between">
						<FilterStats />
						<FilterSortBy :is-mobile="isMobile" :replicas="replicas" />
					</div>
					<div>
						<FilterResultItems :active-price="activePrice" />
					</div>
					<div>
						<ais-pagination>
							<template #default="{ nbHits, refine }">
								<CustomPagination :total="nbHits" :page-size="24" @page-changed="refine" />
							</template>
						</ais-pagination>
					</div>
				</div>
			</div>
		</ais-instant-search>
	</div>
</template>
<script lang="ts" src="./search.ts"></script>
