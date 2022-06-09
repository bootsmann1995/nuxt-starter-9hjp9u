<template>
	<div class="topbar-wrapper" :style="{ top: `${topPos}px` }">
		<div class="main-grid">
			<div class="row">
				<div class="col flex-center-center topbar-usp-wrapper">
					<div v-for="usp in uspItems" :key="usp.id" class="topbar-usp flex-center-center c-mx-2xl">
						<svg class="topbar-usp__icon c-mr-m" xmlns="http://www.w3.org/2000/svg">
							<use :xlink:href="`#icon__${usp.icon}`" />
						</svg>
						<p class="topbar-usp-text">{{ usp.text }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts" src="./topBar.ts"></script>
<style lang="scss" scoped src="./topBar.scss"></style>
