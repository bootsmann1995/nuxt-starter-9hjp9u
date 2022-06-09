<template>
	<main class="main-grid">
		<div class="col-12">
			<div class="c-mt-l c-mt-s-m">
				<NuxtLink
					:id="data.backButton.id"
					:target="data.backButton.target"
					class="text-navigation text-navigation--back"
					:to="data.backButton.url"
				>
					<svg class="c-mr-xxs" xmlns="http://www.w3.org/2000/svg">
						<use xlink:href="#icon__arrow" />
					</svg>
					{{ data.backButton.text }}
				</NuxtLink>
			</div>
		</div>
		<ContentPageHero class="l-mb-m" :hero="data.hero" />

		<section v-if="data.carService" class="row col-12 l-mb-m">
			<CarServices :item="data.carService[0]" class="l-mr-l" />
			<CarServices :item="data.carService[1]" />
		</section>
		<div class="border-bottom border-bottom--mischka-60 l-mb-2l"></div>

		<section v-if="data.header || data.subHeader" class="col-lg-9 offset-lg-1 col-12 l-mb-l">
			<h2 v-if="data.header" class="headline-1 c-mt-reset c-mb-l">{{ data.header }}</h2>
			<p v-if="data.subHeader" class="c-my-reset text-default text-shark--tint-80" v-html="data.subHeader"></p>
		</section>

		<ContactSection :items="data.contactSection" class="col-lg-10 offset-lg-1 col-12" />

		<BlockRouter :switch-array="blockRouterArray" />

		<ContactDepartments
			v-for="(items, index) in data.contactDepartments"
			:key="index"
			class="col-lg-10 offset-lg-1 col-12 l-mb-xl"
			:items="items"
		/>
	</main>
</template>

<script lang="ts" src="./index.page"></script>
