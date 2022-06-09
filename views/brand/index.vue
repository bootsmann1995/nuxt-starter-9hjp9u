<template>
	<main v-if="data" class="main-grid">
		<div class="row">
			<div class="col-12 c-mb-3l l-mb-m-m">
				<div class="c-mt-l">
					<NuxtLink class="text-navigation text-navigation--back" :to="data.backUrl">
						<svg class="c-mr-xxs" xmlns="http://www.w3.org/2000/svg">
							<use xlink:href="#icon__arrow" />
						</svg>
						Alle mærker
					</NuxtLink>
				</div>
			</div>

			<div class="col-lg-9 col-12 l-mb-l">
				<h1 class="headline-1 c-mt-reset c-mb-l c-mb-xs-m">{{ data.headline }}</h1>
				<p
					id="subheadline"
					ref="subheadline"
					class="sub-headline sub-headline-text c-my-reset sub-headline-text--tint-80"
					:class="[{ 'is-active': isExpanded }]"
				>
					{{ data.subHeadline }}
				</p>

				<button
					v-if="viewportTab"
					class="text-navigation text-navigation--text-line-height c-px-reset"
					@click="toggleReadMore()"
				>
					<span v-if="!isExpanded">Læs mere</span>
					<span v-if="isExpanded">Læs mindre</span>
				</button>
			</div>

			<!-- <section class="card-wrapper w-100 flex-wrap c-mt-l-m">
				<CarCard v-for="(item, index) in data.carCollection" :key="index" :item="item"></CarCard>
			</section> -->
		</div>

		<BlockRouter class="offset-lg-1 col-lg-10 col-12" :switch-array="data.dynamicContent" />
	</main>
</template>
<script lang="ts" src="./index.page"></script>
