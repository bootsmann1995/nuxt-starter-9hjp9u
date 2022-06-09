<template>
	<div ref="accordionEl" class="accordion-wrapper offset-lg-1 col-lg-10">
		<button
			:id="'accordion-title-' + index"
			class="accordion-item"
			type="button"
			:aria-controls="'sect-' + index"
			@click="handleClick()"
		>
			<h3 class="headline-4">{{ item.title }}</h3>
			<svg
				class="accordion-item__icon c-ml-xxs"
				:class="{ 'is-open': isSelected === item.id }"
				xmlns="http://www.w3.org/2000/svg"
			>
				<use xlink:href="#icon__plus" />
			</svg>
		</button>
		<div
			:id="'sect-' + index"
			class="accordion-content flex"
			role="region"
			:aria-labelledby="'accordion-title-' + index"
		>
			<BaseRichTextEditor :data="item.text" />
		</div>
	</div>
</template>

<script lang="ts" src="./accordionItem.ts"></script>
<style lang="scss" scoped src="./accordionItem.scss"></style>
