<template>
	<div>
		<div class="row">
			<div class="col-lg-10 offset-lg-1">
				<h2 class="c-mb-4l c-mb-l-m">{{ data.title }}</h2>
			</div>
		</div>
		<div class="flex-vertical-direction flex-gap-xxs">
			<accordion-item
				v-for="item in data.items"
				:key="item.id"
				:index="item.id"
				:item="item"
				:is-selected="selectedItem"
				@selected="handleSelected($event)"
			>
			</accordion-item>
		</div>
	</div>
</template>

<script lang="ts" src="./accordionList.ts"></script>
