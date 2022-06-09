<template>
	<div v-if="data" class="main-grid">
		<div class="row">
			<div class="col-12 c-mb-4l l-mb-m-m">
				<div class="c-mt-l c-mt-s-m">
					<NuxtLink v-if="data.backUrl" class="text-navigation text-navigation--back" :to="data.backUrl">
						<svg class="c-mr-xxs" xmlns="http://www.w3.org/2000/svg">
							<use xlinkHref="#icon__arrow" />
						</svg>
						Tilbage til oversigt
					</NuxtLink>
				</div>
			</div>
			<div v-if="!viewportMd" class="col-1">
				<div class="text-label">
					<div class="border-top border-top--gray c-mb-l c-mt-l c-mt-reset-m"></div>
					<p class="c-my-reset text-label">Dato:</p>
					<p class="c-mb-s c-mt-reset text-label">{{ data.date }}</p>
					<p class="c-my-reset text-label">Emne:</p>
					<p class="c-my-reset text-label">{{ data.subject }}</p>
				</div>
			</div>
			<div class="col-12 offset-lg-1 col-lg-9">
				<PageIntro
					:data="{ headline: data.headline, teaser: data.subHeadline }"
					:teaser-is-manchet="true"
					:smaller-spacing="true"
				/>
			</div>
			<div v-if="viewportMd" class="col-12 l-mb-m">
				<div class="text-label flex-start">
					<span class="c-mr-s border-left border-left--gray"></span>
					<div class="c-mr-s">
						<p class="c-my-reset text-label">Dato:</p>
						<p class="c-mb-s c-mt-reset c-mb-reset-m text-label">{{ data.date }}</p>
					</div>
					<div>
						<p class="c-my-reset text-label">Emne:</p>
						<p class="c-my-reset text-label">{{ data.subject }}</p>
					</div>
				</div>
			</div>
			<div class="col-12 col-lg-10 offset-lg-2">
				<img v-if="data.img" class="border-radius-10" :src="data.img.url" :alt="data.img.alt" />
			</div>
		</div>
		<div class="row">
			<div class="col-lg-10 offset-lg-2">
				<BlockRouter :switch-array="data.dynamicContent" />
			</div>
		</div>
		<div v-if="data.showReferenceBlock" class="row">
			<ReferenceBlock :reference-block="data.referenceBlock" class="l-mb-xl" />
		</div>
	</div>
</template>

<script lang="ts" src="./index.page"></script>
