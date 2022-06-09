<template>
	<div v-if="pageCount !== 1 && total !== 0" class="flex-center-center pagination">
		<div class="pagination__next-prev-wrapper">
			<!-- Previous button for pagination -->
			<button class="pagination__prev" :disabled="isFirstPage" @click="prev">
				<svg xmlns="http://www.w3.org/2000/svg">
					<use xlink:href="#icon__arrow" />
				</svg>
			</button>

			<span class="pagination__seperator"></span>

			<!-- Next button for pagination MOBILE -->
			<button class="pagination__next pagination__next-mobile" :disabled="isLastPage" @click="next">
				<svg xmlns="http://www.w3.org/2000/svg">
					<use xlink:href="#icon__arrow" />
				</svg>
			</button>
		</div>
		<div class="flex">
			<!-- Pagination numbers -->
			<template v-for="item in pageCount" :key="item">
				<span
					v-if="item === pageCount && currentPage + 4 <= pageCount"
					class="pagination__dots c-px-xs spec-text--medium"
					>...</span
				>
				<div
					v-if="showPaginationDecider(item, currentPage, pageCount)"
					class="pagination__number spec-text spec-text--medium c-px-xs"
					:class="{ 'is-active': currentPage === item }"
				>
					<button
						class="c-py-3xs spec-text spec-text--medium"
						:class="{ 'spec-text--bold': currentPage === item }"
						@click="currentPage = item"
					>
						{{ item.toString().length === 1 ? "0" + item : item }}
					</button>
				</div>
				<span v-if="currentPage >= 5 && item === 1" class="pagination__dots c-px-xs spec-text--medium"
					>...</span
				>
			</template>
		</div>

		<!-- Next button for pagination -->
		<button class="pagination__next" :disabled="isLastPage" @click="next">
			<svg xmlns="http://www.w3.org/2000/svg">
				<use xlink:href="#icon__arrow" />
			</svg>
		</button>
	</div>
</template>
<script lang="ts" src="./customPagination.ts"></script>
<style lang="scss" src="./customPagination.scss"></style>
