<template>
	<div class="main-grid">
		<section class="row">
			<h1 v-if="data.header" class="col-lg-9 col-12 headline-1 l-mt-2l l-mb-xs">{{ data.header }}</h1>
			<p class="col-lg-9 col-12 c-mt-reset text-shark--tint-80 l-mb-l">{{ data.teaser }}</p>
		</section>

		<section class="row">
			<div class="l-mb-l w-100">
				<div class="col-lg-9 col-12">
					<form class="search-bar" action="" role="search">
						<svg class="advantages__icon c-mr-s c-mr-s-m" xmlns="http://www.w3.org/2000/svg">
							<use xlink:href="#icon__search" />
						</svg>
						<input
							v-model="search"
							type="search"
							placeholder="Søg på mærke, adresse, postnummer eller by"
							class="w-100"
						/>
					</form>
				</div>

				<div v-for="item in searchedProducts" :key="item.departmentHeader">
					<div v-if="item.departmentHeader" class="col-12 col-lg-3 col-md-6 l-mt-l c-mb-l">
						<h2 class="headline-3">
							{{ item.departmentHeader }}
						</h2>
					</div>
					<div class="flex-wrap">
						<DepartmentCard
							v-for="(card, index) in item.department"
							:key="index"
							:card="card"
							class="col-12 col-lg-3 col-md-6"
						/>
					</div>
				</div>

				<h3 v-if="search && !searchedProducts.length" class="col-12 col-lg-9 l-my-l">
					<!-- Dictionary -->
					Vi kunne desværre ikke finde en afdeling, der matchede din søgning.
				</h3>
			</div>
		</section>

		<section v-if="!search" class="row">
			<div class="l-mb-l">
				<div v-for="item in data.departments" :key="item.departmentHeader" :item="item">
					<div v-if="item.departmentHeader" class="col-12 col-12 c-mt-reset c-mb-l">
						<h2 class="headline-3">
							{{ item.departmentHeader }}
						</h2>
					</div>
					<div class="flex-wrap">
						<DepartmentCard
							v-for="(card, index) in item.department"
							:key="index"
							class="col-lg-3 col-md-6 col-12"
							:card="card"
						/>
					</div>
				</div>
			</div>
		</section>

		<section class="row">
			<div class="offset-lg-1 col-lg-10 col-12 l-mb-l">
				<div class="text-p">{{ data.subTeaser }}</div>
			</div>
		</section>

		<!-- <BlockRouter /> -->
		<!-- <section class="row">
			<div class="col-12">
				<div class="l-mb-xl">
					<ReferenceBlock />
				</div>
			</div>
		</section> -->
	</div>
</template>
<script lang="ts" src="./index.page"></script>
