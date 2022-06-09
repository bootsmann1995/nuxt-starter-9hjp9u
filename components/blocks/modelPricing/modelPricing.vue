<template>
	<section ref="pricingSection">
		<div class="model-pricing border-radius-10 c-px-3l c-pt-3l c-pb-2xl c-pt-s-m c-px-s-m c-pb-2l-m">
			<span class="navigation-link navigation-link--small c-mb-xxs">FRA</span>
			<p ref="price" class="c-mt-reset c-mb-s headline-2">
				{{ item.price.toLocaleString().replace(",", ".") }} kr.
			</p>
			<a
				:id="item.link.id"
				class="model-pricing__finance-link flex"
				:href="item.link.url"
				:target="item.link.target"
			>
				<!-- Waiting for correct icon  -->
				<svg class="model-pricing__icon c-mr-xs" xmlns="http://www.w3.org/2000/svg">
					<use xlink:href="#icon__calculator" />
				</svg>
				<span class="footer-contact-text footer-contact-text--bold basic-link-animation">
					{{ item.link.text }}
				</span>
			</a>

			<div class="model-pricing__btn-wrapper flex">
				<button class="btn-primary c-mr-2l c-mr-reset-m" @click="modalBooking()">Book en prøvetur</button>
				<button class="btn-secondary c-mt-s-m" @click="modalExpert()">Book en ekspert</button>
			</div>
		</div>

		<teleport to="body">
			<SimpleModal v-if="bookingOpen" @close-modal="bookingOpen = false">
				<div>{{ item.jotform }}</div>
			</SimpleModal>
		</teleport>
		<teleport to="body">
			<SimpleModal v-if="bookingExpert" @close-modal="bookingExpert = false">
				<div>{{ item.jotform }}</div>
			</SimpleModal>
		</teleport>
	</section>
</template>

<script lang="ts" src="./modelPricing.ts"></script>
<style lang="scss" src="./modelPricing.scss"></style>
