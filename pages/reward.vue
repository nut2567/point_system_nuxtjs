<template>
  <div class="flex flex-col items-center">
    <div class="reward-list">
      <RewardCard 
      :itemsPerPage="10" 
      />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'token'
});

const router = useRouter();

</script>

<style scoped>
.reward-list {
  display: flex;
  flex-direction: column;
}
</style>
