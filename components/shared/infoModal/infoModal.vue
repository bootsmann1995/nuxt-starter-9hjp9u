<template>
	<div class="simple-modal-wrapper">
		<button class="open-info-modal" @click.prevent="reveal">
			<svg xmlns="http://www.w3.org/2000/svg">
				<use xlink:href="#icon__info" />
			</svg>
		</button>
		<teleport to="body">
			<transition name="fade-transition" mode="in-out">
				<div v-if="isRevealed" class="simple-modal flex-center-center" @click.self="cancel">
					<div class="simple-modal__content c-p-l c-pb-4l c-pr-2xl c-pt-3l c-p-4l-m c-pt-2xl-m">
						<svg class="simple-modal__close" xmlns="http://www.w3.org/2000/svg" @click="cancel">
							<use xlink:href="#icon__close" />
						</svg>
						<h2 class="simple-modal__headline text-p text-p--bold c-mt-reset c-mb-m c-mb-s-m">
							{{ data.headline }}
						</h2>
						<p class="simple-modal__text c-mt-reset c-mb-l c-mb-4l-m">
							{{ data.text }}
						</p>
						<div class="text-center">
							<button
								class="
									simple-modal__btn
									btn-secondary
									btn-secondary--medium
									btn-secondary--dodger-border
									btn-secondary--width-unset
								"
								@click="cancel"
							>
								{{ data.btnText }}
							</button>
						</div>
					</div>
				</div>
			</transition>
		</teleport>
	</div>
</template>
<script lang="ts" src="./infoModal.ts"></script>
<style lang="scss" src="./infoModal.scss"></style>
