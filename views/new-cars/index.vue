<template>
	<div v-if="data" class="main-grid">
		<div class="row l-mt-2l l-mt-m-m">
			<div class="col-lg-9">
				<PageIntro :data="data" :gray-text="true" :is-default="true" />
			</div>
		</div>
		<div class="row l-mb-xl">
			<LogoBanner :data="data.brands" />
		</div>
		<BlockRouter class="offset-lg-1 col-lg-10 col-12" :switch-array="data.dynamicContent" />
	</div>
</template>
<script lang="ts" src="./index.page"></script>
