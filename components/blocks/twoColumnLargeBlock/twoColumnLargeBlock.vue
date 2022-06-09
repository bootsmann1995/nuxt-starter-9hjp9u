<template>
	<section v-if="data" class="two-column-large-block" :class="{ 'is-reversed': data.reverse }">
		<div class="row">
			<div class="col-12 col-lg-10 offset-lg-1">
				<div class="two-column-large-block__container flex">
					<template v-if="!data.reverse || isTablet">
						<div class="two-column-large-block__media">
							<template v-if="data.video">
								<VideoPlayer :data="data.video" />
							</template>
							<img
								v-if="data.image"
								class="ratio-04-3"
								:src="data.image.url"
								:alt="data.image.description"
							/>
						</div>
						<div class="two-column-large-block__content">
							<ContentBox :data="data.contentBlock" />
						</div>
					</template>
					<template v-else>
						<div class="two-column-large-block__content">
							<ContentBox :data="data.contentBlock" />
						</div>
						<div class="two-column-large-block__media">
							<template v-if="data.video">
								<VideoPlayer :data="data.video" />
							</template>
							<img
								v-if="data.image"
								class="ratio-04-3"
								:src="data.image.url"
								:alt="data.image.description"
							/>
						</div>
					</template>
				</div>
			</div>
		</div>
	</section>
</template>
<script lang="ts" src="./twoColumnLargeBlock.ts"></script>
<style lang="scss" src="./twoColumnLargeBlock.scss"></style>
