<template>
  <div class="">
    <Header class="ml-20" />
    <div class="flex">
      <SideNavigation />
      <div class="flex-grow p-4 ml-20">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<script setup>
import SideNavigation from '~/components/SideNavigation.vue'; 
import Header from "~/components/Header.vue"; 
</script>

<style scoped>
.flex {
  display: flex;
}

.ml-64 {
  margin-left: 7rem; 
}

.flex-grow {
  flex-grow: 1; 
}

</style>
