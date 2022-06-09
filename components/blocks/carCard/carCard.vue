<template>
	<div v-if="item.link" class="car-card col-lg-3 col-md-6 col-12">
		<NuxtLink
			:to="item.link.url"
			class="car-card__wrapper flex-vertical-direction flex-space-between border-radius-10"
		>
			<div>
				<figure class="car-card__figure c-mb-s c-mt-reset c-mx-reset">
					<span v-if="item.tag" class="car-card__tag card-tag card-tag--regal border-radius-5">
						{{ item.tag }}
					</span>
					<img v-if="item.image" :src="item.image.url" :alt="item.image.description" class="car-card__img" />
				</figure>

				<div class="car-card__content c-px-s flex-vertical-direction flex-space-between">
					<h2 v-if="item.headline" class="headline-4--mobile-large c-mt-reset c-mb-xxs">
						{{ item.headline }}
					</h2>
					<p
						v-if="item.description"
						class="car-card__description text-ellipsis text-ellipsis--2 text-p--small c-mt-reset c-mb-xxs text-shark--tint-80"
					>
						{{ item.description }}
					</p>
				</div>
			</div>
			<p class="card-price c-px-s c-pb-3l c-my-reset">fra {{ item.price }} kr</p>
		</NuxtLink>
	</div>
</template>

<script lang="ts" src="./carCard.ts"></script>
<style lang="scss" src="./carCard.scss"></style>
