<template>
	<section v-if="data" class="two-column-block" :class="{ 'is-reversed': data.reverse }">
		<div class="row">
			<template v-if="!data.reverse || isTablet">
				<div class="col-lg-6 offset-lg-1">
					<div class="two-column-block__media l-pr-3l">
						<template v-if="data.video">
							<VideoPlayer class="ratio-16-9" :data="data.video" />
						</template>
						<img
							v-if="data.image"
							class="border-radius-10 ratio-16-9"
							:src="data.image.url"
							:alt="data.image.alt"
						/>
					</div>
				</div>
				<div class="col-lg-4">
					<ContentBox :data="data.contentBlock" />
				</div>
			</template>
			<template v-else>
				<div class="col-lg-4 offset-lg-1">
					<ContentBox :data="data.contentBlock" />
				</div>
				<div class="col-lg-6">
					<div class="two-column-block__media l-pl-3l">
						<template v-if="data.video">
							<VideoPlayer class="ratio-16-9" :data="data.video" />
						</template>
						<img
							v-if="data.image"
							class="border-radius-10 ratio-16-9"
							:src="data.image.url"
							:alt="data.image.alt"
						/>
					</div>
				</div>
			</template>
		</div>
	</section>
</template>

<script lang="ts" src="./twoColumnBlock.ts"></script>
<style lang="scss" src="./twoColumnBlock.scss"></style>
