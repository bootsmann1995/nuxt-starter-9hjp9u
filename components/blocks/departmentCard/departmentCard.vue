<template>
	<article v-if="card" class="department-card c-mb-m c-pb-3l p-relative border-radius-10">
		<figure class="department-card__figure c-my-m c-mx-reset border-radius-10">
			<img
				v-if="card.image"
				class="department-card__img border-radius-10"
				:src="card.image.url"
				:alt="card.image.alt"
			/>
		</figure>
		<div class="c-mb-xxs focus-box-tagline focus-box-tagline--normal-letters focus-box-tagline--no-transform">
			<span v-if="card.openingHours[day].value"> Åbent i dag {{ card.openingHours[day].value }} </span>
			<span v-else>Lukket i dag</span>
		</div>

		<h3 v-if="card.city" class="c-mt-reset c-mb-xxs">{{ card.city }}</h3>
		<div class="footer-links text-shark--tint-80 c-mb-m">
			<span v-if="card.address.street"> {{ card.address.street }} </span>
			<div v-if="card.address.postCode || card.address.city">
				{{ card.address.postCode }}, {{ card.address.city }}
			</div>
			<span v-if="card.phone"> Tlf: {{ card.phone }}</span>
		</div>
		<div class="department-card__car-collection flex-wrap">
			<p v-if="card.cars" class="c-my-reset card-tag text-shark--tint-80">{{ card.cars.join(", ") }}</p>
		</div>

		<NuxtLink :to="card.link.url" class="absolute-link"></NuxtLink>
		<svg class="department-card__arrow" xmlns="http://www.w3.org/2000/svg">
			<use xlink:href="#icon__arrow" />
		</svg>
	</article>
</template>

<script lang="ts" src="./departmentCard.ts"></script>
<style lang="scss" src="./departmentCard.scss"></style>
