<template>
	<div v-if="data" class="main-grid">
		<div class="row l-mt-2l l-mt-m-m">
			<div class="col-12">
				<PageIntro :smaller-spacing="true" :gray-text="true" :data="data" />
			</div>
		</div>
		<div v-if="filteredArticles && tags" class="row c-mb-l">
			<div class="col-12">
				<div class="tag-scroll tag-scroll--hide-scrollbar c-mb-4l-m c-mb-xxs">
					<TagButton
						:index="0"
						:tag="{ name: 'Alle', id: 'alle' }"
						:current-active-tag="currentActiveTag"
						@filter="filterByTag"
					/>
					<TagButton
						v-for="(tag, index) in showAllTags ? tags : isLargeScreen ? tags.slice(0, 7) : tags"
						:key="tag.id"
						:index="index + 1"
						:tag="tag"
						:current-active-tag="currentActiveTag"
						@filter="filterByTag"
					/>
					<TagButton
						v-if="!showAllTags && isLargeScreen && tags.length > 7"
						ref="showMore"
						:index="tags.slice(0, 7).length + 1"
						:tag="{ name: 'Vis flere', id: 'vis flere' }"
						:gray-bg="true"
						@filter="showAllTags = true"
					/>
					<TagButton
						v-if="showAllTags && isLargeScreen && tags.length > 7"
						ref="showMore"
						:index="tags.length + 1"
						:tag="{ name: 'Vis mindre', id: 'vis mindre' }"
						:gray-bg="true"
						@filter="showAllTags = false"
					/>
				</div>
			</div>
			<ImageCard
				v-for="(article, index) in filteredArticles"
				:key="index"
				col-classes="col-12 col-md-6 col-lg-3"
				:card="article"
				:index="index"
			/>
			<div class="col-12 l-mb-2xl c-mt-s c-mt-reset-m">
				<CustomPagination :total="total" :page-size="pageSize" @page-changed="fetchData" />
			</div>
		</div>
	</div>
</template>
<script lang="ts" src="./index.page"></script>
