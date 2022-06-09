<template>
	<div id="app">
		<div id="smooth-wrapper">
			<div id="smooth-content">
				<TheHeader />
				<div class="page-wrapper">
					<div>
						{{ data }}
						FEJL SIDE
						{{ error }}
					</div>
				</div>
				<TheFooter />
			</div>
		</div>
		<Sprite />
	</div>
</template>

<script lang="ts" src="./error.layout"></script>
