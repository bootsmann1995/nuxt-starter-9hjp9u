<template>
	<div class="footer-links-collection flex-vertical-direction">
		<h3 class="footer-links c-mt-reset c-mb-l">{{ item.text }}</h3>

		<NuxtLink
			v-for="(link, index) in item.links"
			:key="index"
			class="footer-links-collection__link basic-link-animation footer-links c-mt-reset c-mb-xs"
			:to="link.url"
			:target="link.target"
		>
			<span> {{ link.text }} </span>
		</NuxtLink>
	</div>
</template>

<script lang="ts" src="./FooterLinkCollection.ts"></script>
<style lang="scss" src="./FooterLinkCollection.scss"></style>
