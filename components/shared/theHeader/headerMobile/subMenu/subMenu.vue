<template>
	<div>
		<div class="sub-menu" :class="{ 'is-active': isActive }">
			<div class="main-grid">
				<div class="row">
					<div class="col-12">
						<div class="border-bottom border-bottom--gray">
							<div class="flex-space-between flex-vertical-center">
								<button
									class="sub-menu__back flex-center-center"
									type="button"
									@click="$emit('goBack')"
								>
									<svg class="sub-menu__back-icon c-mr-m" xmlns="http://www.w3.org/2000/svg">
										<use xlink:href="#icon__arrow-small" />
									</svg>
									{{ menuText }}
								</button>
								<button
									class="sub-menu__close flex-center-center"
									type="button"
									@click="$emit('closeMenu')"
								>
									<span v-for="item in 2" :key="'span' + item"></span>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div class="row c-mt-4l c-mb-xxs">
					<div v-for="(linkSection, index) in linkSections" :key="index + 'section'" class="col-12">
						<p
							class="sub-menu-link-mobile sub-menu-link-mobile--small sub-menu-link-mobile--gray sub-menu-link-mobile--no-hover c-mt-reset c-mb-l"
						>
							{{ linkSection.text }}
						</p>
						<NuxtLink
							v-for="(link, i) in linkSection.links"
							:key="link.id"
							class="d-block sub-menu-link-mobile c-mb-2l"
							:class="{
								'c-mb-xl': i === linkSection.links.length - 1 && index !== linkSections.length - 1,
							}"
							:to="link.url"
						>
							{{ link.text }}
						</NuxtLink>
					</div>
				</div>
				<div v-if="cta" class="row">
					<div class="col-12">
						<NuxtLink
							:to="cta.url"
							class="sub-menu__cta border-top border-top--gray c-pt-4l l-pb-menu d-block"
						>
							<div class="sub-menu__image border-radius-10"></div>
							<span class="sub-menu__cta-text c-mt-m">
								{{ cta.text }}
								<svg class="sub-menu__cta-icon c-ml-xxs" xmlns="http://www.w3.org/2000/svg">
									<use xlink:href="#icon__arrow" />
								</svg>
							</span>
						</NuxtLink>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts" src="./subMenu.ts"></script>
<style scoped lang="scss" src="./subMenu.scss"></style>
