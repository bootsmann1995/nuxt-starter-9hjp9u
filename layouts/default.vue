<template>
  <div id="app">
    <transition appear @after-appar="test"></transition>
    <div class="page-wrapper">
			lay
      <slot />
    </div>
  </div>
</template>
<script lang="ts" src="./default.layout"></script>
