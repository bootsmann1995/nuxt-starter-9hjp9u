<template>
	<section class="contact-section">
		<div class="contact-section__contact-wrapper flex l-mb-l">
			<AddressBlock
				:item="{ contact: items.contactInformation, address: items.address, direction: items.direction }"
			/>
			<BookingBlock :item="items.booking" />
		</div>
		<DepartmentCta :item="items.employeesCta" />
	</section>
</template>

<script lang="ts" src="./contactSection.ts" />
<style lang="scss" src="./contactSection.scss" />
