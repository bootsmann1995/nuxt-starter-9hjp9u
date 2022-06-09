<template>
	<div class="row">
		<div class="col-12">
			<div ref="wrapper" class="link-list-wrapper">
				<div v-for="item in data.imageLinks" ref="items" :key="item.image.url">
					<NuxtLink v-if="item.link" :to="item.link.url" class="link-list-item flex-center-center">
						<img class="border-radius-10 link-list-item__img" :src="item.image.url" alt="" />
					</NuxtLink>
				</div>
			</div>
		</div>
	</div>
</template>
<script src="./logoBanner.ts" lang="ts"></script>
<style src="./logoBanner.scss" lang="scss"></style>
