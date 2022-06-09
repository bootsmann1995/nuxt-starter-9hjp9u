<template>
	<div class="row hero-wrapper">
		<div v-if="hero" class="col-12">
			<div class="hero l-mt-m">
				<img
					v-if="hero.image"
					class="hero__image border-radius-10"
					:src="hero.image.url"
					alt="hero.image.alt"
				/>
				<div ref="focus">
					<FocusBox :data="hero.focusBox" :has-custom-links="false" :is-absolute="true" type="small" />
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts" src="./hero.ts"></script>
<style lang="scss" scoped src="./hero.scss"></style>
