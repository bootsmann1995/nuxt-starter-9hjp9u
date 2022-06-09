<template>
	<NuxtLink :to="url"> {{ text != null ? text.toString() : "INGEN TEXT" }}</NuxtLink>
</template>
<script lang="ts" src="./customLink.ts"></script>
<style lang="scss" scoped src="./customLink.scss"></style>
