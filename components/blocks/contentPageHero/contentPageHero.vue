<template>
	<div class="row hero-wrapper">
		<div class="col-12">
			<div class="hero c-mt-4l">
				<img class="hero__image border-radius-10" :src="hero.image.url" alt="hero.image.alt" />
				<div ref="focus">
					<FocusBox :data="hero.focusBox" :has-custom-links="true" :is-absolute="true" type="large" />
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts" src="./contentPageHero.ts"></script>
<style lang="scss" src="./contentPageHero.scss"></style>
