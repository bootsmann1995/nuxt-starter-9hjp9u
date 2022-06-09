<template>
	<div class="department-cta flex-column">
		<h3 class="card-price c-mt-reset c-mb-l">{{ item.headline }}</h3>
		<div class="department-cta__link-wrapper flex-wrap w-100 border-radius-10">
			<a
				v-for="(department, index) in item.department"
				:key="index"
				class="department-cta__link footer-contact-text footer-contact-text--bold text-shark flex-center-center"
				:href="`#${department.id}`"
			>
				<span>{{ department.name }}</span>
				<svg class="department-cta__arrow" xmlns="http://www.w3.org/2000/svg">
					<use xlink:href="#icon__arrow" />
				</svg>
			</a>
		</div>
	</div>
</template>

<script lang="ts" src="./departmentCta.ts"></script>
<style lang="scss" src="./departmentCta.scss"></style>
