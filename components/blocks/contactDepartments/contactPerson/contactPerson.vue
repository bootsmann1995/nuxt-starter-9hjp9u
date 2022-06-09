<template>
	<div class="flex contact-person">
		<img class="contact-person__img c-mr-2l" :src="item.image.url" :alt="item.image.alt" />
		<div class="flex-column c-py-xxs">
			<span class="card-tag text-shark--tint-80 c-mb-3xs">{{ item.tagline }}</span>
			<h3 class="card-price text-shark c-mb-xxs">{{ item.name }}</h3>

			<div class="footer-contact-text footer-contact-text--medium c-mb-3xs p-relative">
				<span class="text-shark--tint-80">Tlf: </span>
				<a class="text-regal basic-link-animation" :href="'tel:' + item.phone.url"> {{ item.phone.url }} </a>
			</div>
			<div class="footer-contact-text footer-contact-text--medium c-mb-3xs p-relative">
				<span class="text-shark--tint-80">Email: </span>
				<a class="text-regal basic-link-animation" :href="'mailto:' + item.mail.url"> {{ item.mail.url }} </a>
			</div>
		</div>
	</div>
</template>

<script lang="ts" src="./contactPerson.ts"></script>
<style lang="scss" src="./contactPerson.scss"></style>
