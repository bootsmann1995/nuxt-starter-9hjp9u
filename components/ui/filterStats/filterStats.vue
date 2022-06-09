<template>
	<ais-stats>
		<template #default="{ hitsPerPage, nbHits, page }">
			<p class="text-navigation text-navigation--dark c-my-reset">
				{{ (page + 1) * hitsPerPage - hitsPerPage + 1 }} -
				{{ (page + 1) * hitsPerPage - hitsPerPage + (nbHits < hitsPerPage ? nbHits : hitsPerPage) }}
				af {{ nbHits }} biler
			</p>
		</template>
	</ais-stats>
</template>
