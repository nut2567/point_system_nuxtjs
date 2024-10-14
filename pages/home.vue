<template>
  <div class="flex flex-col items-center">
    <div class="flex flex-col items-center w-full max-w-4xl mt-4">
      <ProductCarousel />

      <div class="flex justify-between mt-4">
        <NuxtLink :to="'/reward'"
          class="flex items-center px-4 py-2 rounded-md border border-gray-300 text-gray-700 
          hover:border-gray-400 hover:text-gray-800"
        >
          <svg
            class="h-4 w-4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"              
              d="M9 5l7 7-7 7"
              d2="M15 19l-7-7 7-7"
            />
          </svg>
        </NuxtLink>
      </div>
      <div class="mt-4">
        <RewardCard />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "token",
});
</script>

<style scoped>
</style>
