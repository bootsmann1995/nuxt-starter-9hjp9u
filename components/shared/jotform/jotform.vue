<template>
	<button
		v-if="showButton"
		:class="[
			{ 'btn-primary': data.type === 'primary' },
			{ 'btn-secondary': data.type === 'secondary' },
			{ 'btn-tertiary': data.type === 'simple' },
		]"
		@click.prevent="openModal"
	>
		{{ data.ref.text }}
	</button>
	<teleport to="body">
		<transition name="fade-transition" mode="in-out">
			<div v-if="isRevealed" class="simple-modal-full-size flex-center-center" @click.self="closeModal">
				<div class="simple-modal-full-size__content main-grid l-pt-2l">
					<svg class="simple-modal-full-size__close" xmlns="http://www.w3.org/2000/svg" @click="closeModal">
						<use xlink:href="#icon__close" />
					</svg>
					<iframe
						v-if="!succeeded"
						:id="id"
						class="h-100 w-100"
						:src="`https://form.jotform.com/${id}`"
						frameborder="0"
					></iframe>
					<div v-else class="h-100 flex-center-center">
						<div class="simple-modal-full-size__confirm flex-center-center flex-column">
							<div class="c-mb-xl">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 93 92"
									class="simple-modal-full-size__confirm-icon"
								>
									<defs>
										<linearGradient id="a" x1="-45.644%" x2="107.761%" y1="-80.941%" y2="74.669%">
											<stop offset="0%" stop-color="#16A2FF" />
											<stop offset="100%" stop-color="#004878" />
										</linearGradient>
										<linearGradient id="b" x1="50%" x2="35.265%" y1="-67.578%" y2="72.158%">
											<stop offset="0%" stop-color="#16A2FF" />
											<stop offset="100%" stop-color="#004878" />
										</linearGradient>
									</defs>
									<g fill="none" fill-rule="evenodd" stroke-width="4" transform="translate(2.688 2)">
										<circle
											ref="circleIcon"
											cx="44"
											cy="44"
											r="44"
											stroke="url(#a)"
											transform="rotate(90 44 44)"
										/>
										<path
											ref="checkmarkIcon"
											stroke="url(#b)"
											stroke-linecap="round"
											d="M31.5702676,44.8 L39.7288964,52.9586288 C39.8070012,53.0367336 39.9336342,53.0367336 40.0117391,52.9586288 L56.3988326,36.5715353 L56.3988326,36.5715353"
										/>
									</g>
								</svg>
							</div>
							<h2 class="headline-4 c-mt-reset c-mb-l text-center">
								<template v-if="confirmObj.headline">
									{{ confirmObj.headline }}
								</template>
								<template v-else> Tak for din henvendelse </template>
							</h2>
							<p class="c-mb-3xl text-center">
								<template v-if="confirmObj.text">
									{{ confirmObj.text }}
								</template>
								<template v-else> Du vil modtage svar fra os inden for kort tid</template>
							</p>
							<button class="btn-secondary" @click="cancel">
								<template v-if="confirmObj.btnText">
									{{ confirmObj.btnText }}
								</template>
								<template v-else> Tilbage til siden </template>
							</button>
						</div>
					</div>
				</div>
			</div>
		</transition>
	</teleport>
</template>
<script lang="ts" src="./jotform.ts"></script>
