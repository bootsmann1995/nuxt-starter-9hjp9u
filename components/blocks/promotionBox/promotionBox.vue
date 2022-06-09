<template>
	<div class="row l-my-xl" :class="data.reverse ? 'flex-row-reverse' : ''">
		<div class="col-lg-8">
			<img ref="image" class="promotion-box-img border-radius-10" :src="data.image.url" :alt="data.image.alt" />
		</div>
		<div class="col-lg-4">
			<div ref="text" class="promotion-box-text c-mt-xl c-mt-xs-m">
				<FocusBox :data="data" />
			</div>
		</div>
	</div>
</template>
<script lang="ts" src="./promotionBox"></script>
