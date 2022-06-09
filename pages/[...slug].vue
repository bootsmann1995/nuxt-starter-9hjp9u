<template>
  <div>
    {{ testCount() }}
  </div>
</template>
<script setup>
let count = 0;
function testCount() {
  count = count + 1;
  console.log(count);
  return count;
}
</script>
