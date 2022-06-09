<template>
	<div v-if="data">
		<TopBar :usp-items="data.topbarItems" />
		<HeaderDesktop :menu-links="data.menu" />
		<HeaderMobile :menu-links="data.menu" />
	</div>
</template>
<script lang="ts" src="./theHeader.ts"></script>
