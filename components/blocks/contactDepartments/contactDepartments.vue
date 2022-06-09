<template>
	<div :id="items.id" class="contact-departments flex-column">
		<div class="contact-departments__content-wrapper flex-space-between">
			<h2 v-if="items.headline" class="headline-3 c-mb-l-m">{{ items.headline }}</h2>
			<div class="contact-departments__btn-wrapper flex">
				<a
					v-if="items.linkCollection.directions && items.linkCollection.directions.url"
					:id="items.linkCollection.directions.id"
					class="text-navigation basic-link-animation"
					:href="items.linkCollection.directions.url"
					:target="items.linkCollection.directions.target"
				>
					<svg class="contact-departments__icon c-mr-xs" xmlns="http://www.w3.org/2000/svg">
						<use xlink:href="#icon__location" />
					</svg>
					<span>{{ items.linkCollection.directions.text }}</span>
				</a>
				<a
					v-if="items.linkCollection.phone && items.linkCollection.phone.url"
					:id="items.linkCollection.phone.id"
					class="text-navigation basic-link-animation"
					:href="'tel:' + items.linkCollection.phone.url"
					:target="items.linkCollection.phone.target"
				>
					<svg class="contact-departments__icon c-mr-xs" xmlns="http://www.w3.org/2000/svg">
						<use xlink:href="#icon__phone" />
					</svg>
					<span>{{ items.linkCollection.phone.text }}</span>
				</a>
				<a
					v-if="items.linkCollection.mail && items.linkCollection.mail.url"
					:id="items.linkCollection.mail.id"
					class="text-navigation basic-link-animation"
					:href="'mailto:' + items.linkCollection.mail.url"
					:target="items.linkCollection.mail.target"
				>
					<svg class="contact-departments__icon c-mr-xs" xmlns="http://www.w3.org/2000/svg">
						<use xlink:href="#icon__mail" />
					</svg>
					<span>{{ items.linkCollection.mail.text }}</span>
				</a>
			</div>
		</div>
		<div class="border-bottom border-bottom--gray w-100 c-mt-4l c-mb-2xl c-mt-l-m c-mb-4l-m"></div>
		<div class="contact-departments__contact-wrapper flex-wrap w-100">
			<ContactPerson
				v-for="(item, index) in items.contactPerson"
				:key="index"
				class="col-lg-6 col-12"
				:item="item"
			/>
		</div>
	</div>
</template>

<script lang="ts" src="./contactDepartments.ts"></script>
<style lang="scss" src="./contactDepartments.scss"></style>
