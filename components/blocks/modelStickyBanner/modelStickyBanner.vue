<template>
	<div class="model-banner w-100">
		<div class="model-banner__content flex-space-between flex-vertical-center c-py-xs c-pl-xs c-pr-l c-pr-xs-m">
			<div v-if="isDesktop" class="flex-vertical-center">
				<img class="model-banner__img c-mr-l" :src="carImage.image.url" :alt="carImage.image.alt" />
				<div>
					<h2 class="headline-4 c-my-reset">{{ carHeader }}</h2>
					<p class="card-tag c-my-reset">{{ carTagline }}</p>
				</div>
			</div>
			<div class="button-wrapper flex">
				<div v-if="isDesktop" class="card-price c-mr-l flex-vertical-center">
					<span>fra &nbsp;</span>
					<span> {{ item.price.toLocaleString().replace(",", ".") }} kr.</span>
				</div>
				<button class="btn-primary c-mr-2l c-m-reset-m" @click="modalBooking()">Book en prøvetur</button>
				<button class="btn-secondary" @click="modalExpert()">Book en ekspert</button>
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
	</div>
</template>

<script lang="ts" src="./modelStickyBanner.ts"></script>
<style lang="scss" src="./modelStickyBanner.scss"></style>
