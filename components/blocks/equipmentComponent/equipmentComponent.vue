<template>
	<div class="equipment">
		<div class="equipment__header p-relative c-pb-2l c-pb-xxs-m">
			<h2 class="c-mt-reset c-mb-xxs">
				{{ item.header }}
			</h2>
			<span class="sub-headline-text sub-headline-text--small">
				{{ item.tagline }}
			</span>
		</div>
		<EquipmentAccordion
			v-for="(equipment, index) in item.equipmentCollection"
			:key="index"
			:equipment="equipment"
			class="equipment__collection p-relative flex-wrap w-100"
		/>
	</div>
</template>

<script lang="ts" src="./equipmentComponent.ts"></script>
<style lang="scss" src="./equipmentComponent.scss"></style>
