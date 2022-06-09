<template>
	<div :class="{ 'is-active': isActive }" class="sub-menu">
		<div class="main-grid sub-menu__content">
			<div class="row l-mt-2l">
				<div
					v-for="(linkSection, index) in linkSections"
					:key="index"
					class="col-2 fade-in-text"
					:class="{ 'offset-md-1': index === 0 }"
				>
					<div class="fade-in-text__content">
						<p
							class="sub-menu-link sub-menu-link--medium sub-menu-link--no-hover sub-menu-link--gray c-mb-l c-mt-reset"
						>
							{{ linkSection.text }}
						</p>
						<NuxtLink
							v-for="item in linkSection.links"
							:key="item.id"
							class="d-block sub-menu-link c-mb-m"
							:to="item.url"
						>
							{{ item.text }}
						</NuxtLink>
					</div>
				</div>
				<div v-if="cta" class="offset-1 col-5">
					<NuxtLink
						:to="cta.url"
						class="d-block sub-menu-link sub-menu-link--blue animation-fade-in sub-menu__cta"
					>
						<div class="border-radius-10 sub-menu__image c-mb-xs"></div>
						<span class="sub-menu__cta-text">
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
</template>
<script lang="ts" src="./subMenu.ts"></script>
<style scoped lang="scss" src="./subMenu.scss"></style>
