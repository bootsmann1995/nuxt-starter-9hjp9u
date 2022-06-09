<template>
	<div class="main-grid header-wrapper" :style="{ top: `${topPos}px` }">
		<div class="row header flex-center-center">
			<NuxtLink to="/" class="col-3 flex-start">
				<svg class="header__logo" xmlns="http://www.w3.org/2000/svg">
					<use xlink:href="#icon__logo" />
				</svg>
			</NuxtLink>
			<div
				class="col h-100 flex-center-center sub-menu-bg"
				:class="{ 'is-active': activeMenu !== -1 }"
				@click.self="openMenu(-1)"
			>
				<div v-for="(item, index) in menuLinks" :key="index" class="h-100">
					<button
						v-if="item.linkSections != null && item.linkSections.length !== 0"
						type="button"
						class="navigation-link flex-center-center c-px-reset"
						:class="[{ 'c-mr-xl': index != menuLinks.length - 1 }, { 'is-active': index === activeMenu }]"
						@click="openMenu(index)"
					>
						{{ item.text }}
					</button>
					<NuxtLink
						v-else
						:to="item.url"
						class="navigation-link flex-center-center"
						:class="[{ 'c-mr-xl': index != menuLinks.length - 1 }, { 'is-active': index === activeMenu }]"
					>
						{{ item.text }}
					</NuxtLink>
					<SubMenu
						v-if="item.linkSections != null && item.linkSections.length !== 0"
						:cta="item.cta"
						:link-sections="item.linkSections"
						:is-active="activeMenu === index"
					/>
				</div>
			</div>
			<div class="col-3 flex-end">
				<NuxtLink class="navigation-link navigation-link--small flex-center-center" :to="'/'">
					<svg class="header__function-link-icon c-mr-xxs" xmlns="http://www.w3.org/2000/svg">
						<use xlink:href="#icon__tool" />
					</svg>
					Book værksted
				</NuxtLink>
				<!-- <NuxtLink class="navigation-link navigation-link--small flex-center-center c-ml-xl" :to="'/'">
					<svg class="header__function-link-icon c-mr-xxs" xmlns="http://www.w3.org/2000/svg">
						<use xlink:href="#icon__avatar" />
					</svg>
					Log ind
				</NuxtLink> -->
			</div>
		</div>
		<div class="row">
			<div class="col-12 flex-end">
				<div class="border-bottom border-bottom--gray w-100"></div>
			</div>
		</div>
	</div>
</template>
<script lang="ts" src="./headerDesktop.ts"></script>
<style scoped lang="scss" src="./headerDesktop.scss"></style>
