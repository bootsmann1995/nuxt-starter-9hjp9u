<template>
	<div class="address-block border-radius-10 flex c-px-3l c-py-4l">
		<div v-if="item.address || item.direction" class="flex-column">
			<h3 class="card-price c-my-reset c-mb-l">Adresse</h3>
			<div class="flex-column footer-contact-text">
				<span class="text-shark--tint-80"> {{ item.address.street }} </span>
				<span class="text-shark--tint-80">{{ item.address.postCode }} {{ item.address.city }} </span>

				<a
					:id="item.direction.id"
					class="c-mt-xs footer-contact-text--medium text-regal basic-link-animation"
					:href="item.direction.url"
					:target="item.direction.target"
				>
					{{ item.direction.text }}
				</a>
			</div>
		</div>
		<div v-if="item.contact" class="flex-column">
			<h3 class="card-price c-my-reset c-mb-l">Kontakt</h3>
			<div v-for="(contact, index) in item.contact" :key="index" class="flex footer-contact-text">
				<span>{{ contact.text }}:&nbsp;</span>
				<a class="footer-contact-text--medium text-regal basic-link-animation" :href="contact.url">
					{{ contact.url }}</a
				>
			</div>
		</div>
	</div>
</template>

<script lang="ts" src="./addressBlock.ts"></script>
<style lang="scss" src="./addressBlock.scss"></style>
