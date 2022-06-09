<template>
	<div ref="accordionEl" class="accordion-item" :class="[{ 'is-active': isActive }]" @click="toggleAccordionItem()">
		<button v-if="item != null" class="accordion-item__heading col flex-space-between c-px-reset c-py-2l">
			<h3 class="footer-contact-text footer-contact-text--medium c-my-reset">{{ item.text }}</h3>
			<svg class="accordion-item__icon" xmlns="http://www.w3.org/2000/svg">
				<use xlink:href="#icon__facet" />
			</svg>
		</button>
		<div class="accordion-item__body-text flex-vertical-start flex-columns c-mt-l">
			<NuxtLink
				v-for="(link, index) in item.links"
				:key="index"
				:to="link.link"
				class="sub-menu-link-mobile sub-menu-link-mobile--medium c-mb-2l-m c-ml-xxs"
			>
				{{ link.text }}
			</NuxtLink>
		</div>
	</div>
</template>

<script lang="ts" src="./FooterAccordion.ts"></script>
<style lang="scss" src="./FooterAccordion.scss"></style>
