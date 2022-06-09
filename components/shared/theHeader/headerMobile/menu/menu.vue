<template>
	<div class="menu" :class="{ 'is-active': isActive }">
		<div class="main-grid">
			<div class="row">
				<div v-for="(item, index) in menuLinks" :key="item.id + index" class="col-12">
					<button
						v-if="item.linkSections != null && item.linkSections.length >= 1"
						type="button"
						class="menu__item flex-space-between flex-vertical-center mobile-menu-link c-px-3xs"
						:class="{ 'border-top border-top--gray': index === 0 }"
						@click="setSubMenu(index)"
					>
						{{ item.text }}
						<svg class="menu__item-icon" xmlns="http://www.w3.org/2000/svg">
							<use xlink:href="#icon__arrow-small" />
						</svg>
					</button>
					<NuxtLink
						v-else
						:to="item.url"
						class="menu__item flex-space-between flex-vertical-center mobile-menu-link c-px-3xs"
					>
						{{ item.text }}
					</NuxtLink>
					<SubMenu
						:link-sections="item.linkSections"
						:cta="item.cta"
						:menu-text="item.text"
						:is-active="activeMenu === index"
						@go-back="setSubMenu(-1)"
						@close-menu="closeParentChild(), $emit('closeMenu')"
					/>
				</div>
			</div>
		</div>
		<div class="menu__functional">
			<div class="main-grid">
				<div class="row">
					<div class="col-12">
						<div class="flex flex-start menu__functional-wrapper border-bottom border-bottom--gray">
							<NuxtLink class="flex-center-center mobile-function-link c-mb-m c-mr-xl" :to="'/'">
								<svg class="menu__function-link-icon c-mr-xs" xmlns="http://www.w3.org/2000/svg">
									<use xlink:href="#icon__tool" />
								</svg>
								Book værksted
							</NuxtLink>
							<NuxtLink class="flex-center-center mobile-function-link c-mb-m" :to="'/'">
								<svg
									class="menu__function-link-icon mobile-function-link c-mr-s"
									xmlns="http://www.w3.org/2000/svg"
								>
									<use xlink:href="#icon__avatar" />
								</svg>
								Log ind
							</NuxtLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts" src="./menu.ts"></script>
<style scoped lang="scss" src="./menu.scss"></style>
