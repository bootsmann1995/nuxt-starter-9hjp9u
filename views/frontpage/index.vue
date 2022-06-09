<template>
	<div v-if="data" class="main-grid">
		<Hero v-if="data.hero" :hero="data.hero" />
		<div class="row">
			<div class="col-lg-10 l-mt-m">
				<h1 class="headline-0">
					Hos os kan du købe nye og brugte biler, lease biler, eller bestille tid hos vores værksted
				</h1>
			</div>
		</div>
		<div v-if="data.categorySliders" class="row l-my-xl">
			<div v-for="slider in data.categorySliders" :key="slider.headline" class="col-12">
				<CategorySlider :slider="slider" />
			</div>
		</div>

		<BlockRouter v-if="data.dynamicContent" :switch-array="data.dynamicContent" />

		<div class="row">
			<ReferenceBlock :reference-block="data.campaignSlider" class="l-mb-xl" />
		</div>
	</div>
</template>
<script lang="ts" src="./index.page"></script>
