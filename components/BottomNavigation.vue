<template>
    <nav class="bottom-navigation">
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/reward">Reward</nuxt-link>
      <nuxt-link to="/profile">Profile</nuxt-link>
    </nav>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .bottom-navigation {
    display: flex;
    justify-content: space-around;
    background: #f8f9fa;
    padding: 10px 0;
  }
  </style>
  