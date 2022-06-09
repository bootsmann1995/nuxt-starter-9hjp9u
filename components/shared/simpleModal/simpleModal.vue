<template>
	<div class="modal" :class="[`modal--${options.layout}`]">
		<OnClickOutside @trigger="$emit('closeModal')">
			<div class="modal__content flex-center-center" :class="[`bg-${options.backgroundColor}`]">
				<button
					class="modal__close-btn flex-center-center is-active"
					type="button"
					@click="$emit('closeModal')"
				>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</button>
				<slot></slot>
			</div>
		</OnClickOutside>
	</div>
</template>

<script lang="ts" src="./simpleModal.ts"></script>
<style lang="scss" src="./simpleModal.scss"></style>
