<template>
	<ArticleList v-if="page.typename === 'ArticleListPage'"></ArticleList>
	<ArticlePage v-else-if="page.typename === 'ArticlePage'" :slug="page.slug"></ArticlePage>
	<NewCars v-else-if="page.typename === 'BrandListViewPage'" :slug="page.slug"></NewCars>
	<Brand v-else-if="page.typename === 'BrandUniversePage'" :slug="page.slug"></Brand>
	<Content v-else-if="page.typename === 'ContentPage'" :slug="page.slug"></Content>
	<Contact v-else-if="page.typename === 'DepartmentListViewPage'"></Contact>
	<ContactDetail v-else-if="page.typename === 'DepartmentDetailPage'"></ContactDetail>
	<Frontpage v-else-if="page.typename === 'FrontPage'"></Frontpage>
	<Model v-else-if="page.typename === 'ModelDetailPage'"></Model>
	<UsedCars v-else-if="page.typename === 'UsedCarFilterPage'"></UsedCars>
	<!-- <LeasingModel v-else-if="page.typename === 'LeasingModelDetailPage'"></LeasingModel> -->
	<div v-else-if="page.typename === 'ApiUsedCar'">{{ data }}</div>
	<Error404 v-else-if="page.typename === 'Error404'">{{ data }}</Error404>
	<LeasingCars v-else-if="page.typename === 'LeasingCarListViewPage'"></LeasingCars>
</template>
<script lang="ts" src="./index.page"></script>
