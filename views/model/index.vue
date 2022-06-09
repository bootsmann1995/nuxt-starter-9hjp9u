<template>
	<main class="main-grid">
		<div class="row">
			<div class="col-12 c-mb-4l l-mb-m-m">
				<div class="c-mt-s">
					<NuxtLink v-if="data.backUrl" class="text-navigation text-navigation--back" :to="data.backUrl.url">
						<svg class="c-mr-xxs" xmlns="http://www.w3.org/2000/svg">
							<use xlink:href="#icon__arrow" />
						</svg>
						{{ data.backUrl.text }}
					</NuxtLink>
				</div>
			</div>
		</div>
		<section ref="el" class="row l-mb-xl">
			<div class="col-lg-7">
				<div class="c-pr-xxs c-pr-reset-m">
					<HeroImageSlider :slider="data.imageSlider" />
				</div>
			</div>
			<div ref="pricingSection" class="pricing-section col-lg-5">
				<div class="c-pl-xxs c-pl-reset-m">
					<div class="c-mb-4l c-mb-l-m">
						<h1 class="headline-1 c-mt-reset c-mb-xxs c-mb-xs-m">
							{{ data.header }}
						</h1>
						<span class="card-price"> {{ data.tagline }} </span>
					</div>

					<ModelPricing class="c-mb-2l c-mb-reset-m" :item="data.finance" />

					<div v-if="data.contactInfo" class="p-relative c-mb-xl flex-wrap">
						<ModelContactButton v-for="(item, index) in data.contactInfo" :key="index" :item="item" />
					</div>

					<div v-if="data.credentials[0]" class="credentials flex-vertical-center flex c-mb-l">
						<svg class="credentials__icon c-mr-s c-mr-s-m" xmlns="http://www.w3.org/2000/svg">
							<use xlink:href="#icon__insurance" />
						</svg>
						<p class="footer-contact-text--small text-shark footer-contact-text--medium c-my-reset">
							{{ data.credentials[0].text }}
						</p>
					</div>
					<div v-if="data.credentials[1]" class="credentials flex-vertical-center flex c-mb-l">
						<svg class="credentials__icon c-mr-s c-mr-s-m" xmlns="http://www.w3.org/2000/svg">
							<use xlink:href="#icon__support" />
						</svg>
						<p class="footer-contact-text--small text-shark footer-contact-text--medium c-my-reset">
							{{ data.credentials[1].text }}
						</p>
					</div>
					<div v-if="data.credentials[2]" class="credentials flex-vertical-center flex c-mb-l">
						<svg class="credentials__icon c-mr-s c-mr-s-m" xmlns="http://www.w3.org/2000/svg">
							<use xlink:href="#icon__trustpilot2" />
						</svg>
						<p class="footer-contact-text--small text-shark footer-contact-text--medium c-my-reset">
							{{ data.credentials[2].text }}
						</p>
					</div>
				</div>
			</div>
		</section>
		<BlockRouter :switch-array="blockRouterArrayOne" />

		<section class="row l-mb-xl">
			<EquipmentComponent class="col-lg-10 offset-lg-1 col-12" :item="data.equipment" />
		</section>

		<BlockRouter :switch-array="blockRouterArrayTwo" />

		<ModelStickyBanner
			:class="[{ 'is-active': y > 745 }]"
			:car-image="data.imageSlider[0]"
			:car-header="data.header"
			:car-tagline="data.tagline"
			:item="data.finance"
		/>
	</main>
</template>
<script lang="ts" src="./index.page"></script>
