<template>
	<ais-current-refinements>
		<template #default="{ items, createURL }">
			<ul class="reset-ul flex flex-wrap">
				<ais-clear-refinements :class-names="{ 'ais-ClearRefinements': 'c-mb-l' }">
					<template #resetLabel>
						<a class="c-px-s c-py-reset flex-center-center text-label">
							<svg class="c-mr-xxs" xmlns="http://www.w3.org/2000/svg">
								<use xlink:href="#icon__delete" />
							</svg>
							Ryd alle filtre
						</a>
					</template>
				</ais-clear-refinements>
				<template v-for="item in items" :key="item.attribute">
					<li
						v-for="refinement in item.refinements"
						:key="[refinement.attribute, refinement.type, refinement.value, refinement.operator].join(':')"
						class="filter-current-refinement c-ml-reset c-mb-l"
					>
						<a
							class="c-px-s c-py-reset flex-center-center text-label c-ml-reset c-mr-s ais-CurrentRefinements-category"
							:href="createURL(refinement)"
							@click.prevent="item.refine(refinement)"
						>
							{{ refinement.label }}
							<svg class="c-ml-xxs" xmlns="http://www.w3.org/2000/svg">
								<use xlink:href="#icon__close" />
							</svg>
						</a>
					</li>
				</template>
			</ul>
		</template>
	</ais-current-refinements>
</template>
<script lang="ts" src="./filterCurrentRefinements.ts"></script>
