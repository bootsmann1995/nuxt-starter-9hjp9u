<template>
	<ais-hits
		:class-names="{
			'ais-Hits': '',
			'ais-Hits-item': 'filter-hits-item col-lg-4 c-mb-xl',
			'ais-Hits-list': 'row',
		}"
	>
		<template #default="{ items }">
			<div class="row">
				<div v-if="items.length === 0" class="col-12 filter-no-result">
					<div class="flex-center-center flex-column l-mt-2xl">
						<svg class="filter-no-result__icon l-mb-l" xmlns="http://www.w3.org/2000/svg">
							<use xlink:href="#icon__no-results" />
						</svg>
						<h4 class="headline-4 filter-no-result__headline c-mb-s c-mb-xs-m">
							Der er ingen resultater der matcher din søgning
						</h4>
						<p class="c-my-reset filter-no-result__text">Prøv at justere dine filtre eller dine søgeorde</p>
					</div>
				</div>
				<!-- TO-DO: ret links til rigtige -->
				<NuxtLink
					v-for="item in items"
					:key="item.objectID"
					class="filter-hits-item col-lg-4 c-mb-xl"
					:to="'/'"
				>
					<article class="search-item h-100 flex-column">
						<template v-if="item.imageUrls.length <= 1">
							<div>
								<img
									class="filter-hits-item__img"
									:src="'https://autohusetvestergaard-autodesktop.imgix.net/b90499a5-5edd-4450-b535-fef233cee84b/6865588.jpeg?width=1024&upscale=false&q=80'"
									alt=""
								/>
							</div>
						</template>
						<template v-else>
							<div>
								<swiper
									:slides-per-view="1"
									:modules="modules"
									:lazy="true"
									:navigation="true"
									:pagination="true"
								>
									<swiper-slide v-for="image in item.imageUrls" :key="image">
										<img class="filter-hits-item__img" :src="image" alt="" />
									</swiper-slide>
								</swiper>
							</div>
						</template>
						<div class="c-px-s c-pt-s c-pb-4l flex-space-between flex-column h-100 c-py-2l-m">
							<div>
								<h2 class="filter-hits-item__name headline-4">{{ `${item.brand} ${item.model}` }}</h2>
								<p
									class="
										c-mt-xxs c-mb-xs
										text-navigation text-navigation--simple
										text-ellipsis text-ellipsis--1
										filter-hits-item__teaser
									"
								>
									{{ item.name }}
								</p>
								<div class="filter-hits-item__tags flex-wrap c-mt-xs c-mb-4l c-mb-2l-m">
									<template
										v-for="val in [item.modelYear, item.fuelType, item.kilometersDriven]"
										:key="val"
									>
										<span
											v-if="val"
											class="
												filter-hits-item__tag-item
												c-mr-xxs c-py-3xs c-px-xxs
												text-tagline text-tagline--compressed
												flex-center-center
											"
											>{{ val }}</span
										>
									</template>
								</div>
							</div>
							<div>
								<template v-if="isLeasing">
									<h3 class="text-manchet filter-hits-item__price">
										{{ item.monthlyPayment }} kr. / måned
									</h3>
									<p
										class="
											c-mt-3xs c-mb-reset
											text-tagline text-tagline--compressed
											flex-vertical-center
										"
									>
										Førstegangsydelse: {{ item.firstPayment }} kr.
									</p>
									<p
										class="
											c-mt-3xs c-mb-reset
											text-tagline text-tagline--compressed
											flex-vertical-center
										"
									>
										{{ item.kmPerYear }} km / år
									</p>
								</template>
								<template v-else-if="activePrice === 'Kontant'">
									<h3 class="text-manchet filter-hits-item__price">{{ item.price }} kr.</h3>
									<p
										class="
											c-mt-3xs c-mb-reset
											text-tagline text-tagline--compressed
											flex-vertical-center
										"
									>
										{{ item.price }} kr / måned
										<InfoModal
											:data="{
												headline: 'Vi tilbyder finansiering med billån',
												text: `Du kan finansiere bilen med billån. Du kan estimere dit billån i vores prisberegner længere
							nede på siden.`,
												btnText: 'Luk info',
											}"
											class="c-ml-xxs"
										/>
									</p>
								</template>

								<template v-else>
									<h3 class="text-manchet filter-hits-item__price aligned-icon">
										{{ item.price }} kr / måned
										<InfoModal
											:data="{
												headline: 'Vi tilbyder finansiering med billån',
												text: `Du kan finansiere bilen med billån. Du kan estimere dit billån i vores prisberegner længere
							nede på siden.`,
												btnText: 'Luk info',
											}"
											class="c-ml-xxs"
										/>
									</h3>
									<p class="c-mt-3xs c-mb-reset text-tagline text-tagline--compressed">
										{{ item.price }} kr.
									</p>
								</template>
							</div>
						</div>
					</article>
				</NuxtLink>
			</div>
		</template>
	</ais-hits>
</template>
<script lang="ts" src="./filterResultItems.ts"></script>
<style lang="scss" src="./filterResultItems.scss"></style>
