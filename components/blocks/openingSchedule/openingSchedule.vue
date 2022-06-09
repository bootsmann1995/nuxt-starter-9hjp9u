<template>
	<div ref="schedule" class="opening-schedule border-radius-10 c-p-3xl c-p-2xl-m">
		<h3 class="headline-3 c-mt-reset c-mb-4l">{{ data.headline }}</h3>

		<div class="flex-wrap opening-schedule__wrapper">
			<div v-for="item in data.schedule" :key="item.headline">
				<h4 class="text-manchet c-mb-xs">{{ item.headline }}</h4>
				<div
					v-for="(day, index) in weekdays"
					:key="index"
					class="opening-schedule__date-wrapper flex footer-contact-text"
				>
					<span class="c-mr-l"> {{ day.name }} </span>
					<span class="c-mr-l"> {{ getWeekDays(index) }}</span>
					<span v-if="item[day.id].value"> {{ item[day.id].value }} </span>
					<span v-else>Lukket</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" src="./openingSchedule.ts"></script>
<style lang="scss" src="./openingSchedule.scss"></style>
