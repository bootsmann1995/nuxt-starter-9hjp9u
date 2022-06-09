<template>
	<div
		class="main-grid header-wrapper"
		:class="{ 'border-bottom border-bottom--gray': !menuActive }"
		:style="{ top: `${topPos}px` }"
	>
		<div class="row">
			<div class="col-12">
				<div :class="{ 'border-bottom border-bottom--gray': menuActive }">
					<div class="row header flex-center-center">
						<NuxtLink to="/" class="col-6 flex-start">
							<svg class="header__logo" xmlns="http://www.w3.org/2000/svg">
								<use xlink:href="#icon__logo" />
							</svg>
						</NuxtLink>
						<div class="col-6 flex-end">
							<button
								class="header-burger flex-center-center"
								:class="{ 'is-active': menuActive }"
								type="button"
								@click="setMobileMenu"
							>
								<span v-for="item in 4" :key="item"></span>
							</button>
						</div>
						<Menu :menu-links="menuLinks" :is-active="menuActive" @close-menu="menuActive = false" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts" src="./headerMobile.ts"></script>
<style scoped lang="scss" src="./headerMobile.scss"></style>
