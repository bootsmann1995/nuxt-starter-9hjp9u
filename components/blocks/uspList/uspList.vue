<template>
	<div class="row">
		<div v-if="data" class="offset-lg-1 col-lg-10">
			<div class="row" :class="{ 'flex-row-reverse': data.reverse }">
				<div v-if="!isDesktop" class="col-12">
					<h2 class="c-mb-4l" :class="[{ 'headline-3': isDesktop }, { 'headline-2': !isDesktop }]">
						{{ data.headline }}
					</h2>
					<div class="c-mb-2l-m">
						<VideoPlayer v-if="data.video" class="usp-video" :data="data.video" />
					</div>
				</div>
				<div class="col-lg-6">
					<div class="c-pr-3l">
						<h2 v-if="isDesktop" class="headline-3 c-mb-4l">{{ data.headline }}</h2>
						<ul class="reset-ul">
							<li
								v-for="(item, index) in data.usps"
								:key="item + index"
								class="usp-item c-mb-s c-mb-xs-m"
							>
								<div class="usp-item__icon-wrap flex-center-center c-mr-xs-m c-mr-s">
									<!-- <span class=""> -->
									<svg class="usp-item__icon" xmlns="http://www.w3.org/2000/svg">
										<use xlink:href="#icon__confirmed" />
									</svg>
									<!-- 								</span>
 -->
								</div>
								<p class="text-p text-p--bold c-mb-reset c-mt-3xs usp-item__text">{{ item }}</p>
							</li>
						</ul>
					</div>
				</div>
				<div v-if="data.image || data.video" class="col-lg-6">
					<VideoPlayer v-if="data.video && isDesktop" class="usp-video" :data="data.video" />
					<img
						v-if="data.image"
						class="border-radius-10 usp-image"
						:src="data.image.url"
						:alt="data.image.alt"
					/>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts" src="./uspList.ts"></script>
<style lang="scss" src="./uspList.scss"></style>
