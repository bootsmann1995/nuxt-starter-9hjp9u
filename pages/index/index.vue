<template>
  <div>
    <ais-instant-search
      :search-client="searchClient"
      index-name="dev-used-vehicles"
      :routing="routing"
    >
      <div>
        <ais-refinement-list
          attribute="brand"
          operator="or"
          :sort-by="['name']"
        />

        <ais-hits>
          <template #default="{ items }">
            <div class="row">
              <NuxtLink :to="'/about'"></NuxtLink>
            </div>
          </template>
        </ais-hits>
      </div>
    </ais-instant-search>
  </div>
</template>
<script lang="ts" src="./index.page"></script>
