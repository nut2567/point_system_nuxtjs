<template>
  <div class="bg-gray-100 min-h-screen">
    <!-- Cover Photo -->
    <div
      class="bg-cover bg-center h-60 relative"
      style="
        background-image: url('https://doggystickers.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F2800%2F2014%2Fproducts%2Fmockup-6aeffeca.jpg%3Fv%3D1617396810&w=3840&q=75');
      "
    >
      <!-- Profile Picture -->
      <div
        class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
      >
        <img
          src="https://doggystickers.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F2800%2F2014%2Fproducts%2Fmockup-6aeffeca.jpg%3Fv%3D1617396810&w=3840&q=75"
          alt="Profile Picture"
          class="w-32 h-32 rounded-full border-4 border-white"
        />
      </div>
    </div>

    <!-- Profile Info Section -->
    <div class="flex flex-col items-center mt-16">
      <!-- User Name -->
      <h1 class="text-3xl font-bold">
        {{ store.userinfo.name }} {{ store.userinfo.lastname || "walkker" }}
      </h1>
      <p class="text-gray-600">Some interesting bio or tagline goes here</p>

      <!-- Profile Actions -->
      <div class="mt-4">
        <div class="flex space-x-4">
          <!-- Gold -->
          <button v-if=" store.userinfo.tier == 'Gold' " class="tier-button gold">Gold</button>
          <!-- Bronze -->
          <button v-else-if=" store.userinfo.tier == 'Bronze' " class="tier-button bronze">Bronze</button>
          <!-- Platinum -->
          <button v-else-if=" store.userinfo.tier == 'Platinum' " class="tier-button platinum">Platinum</button>
          <!-- Silver -->
          <button v-else class="tier-button silver">Silver</button>
        </div>
      </div>
    </div>

    <!-- Profile Menu -->
    <div class="bg-white shadow-sm mt-6">
      <div class="max-w-5xl mx-auto">
        <ul class="flex justify-center space-x-4 py-4">
          <li>
            <a href="#" class="text-gray-700 hover:text-blue-500 font-semibold"
              >Posts</a
            >
          </li>
          <li>
            <a href="#" class="text-gray-700 hover:text-blue-500 font-semibold"
              >About</a
            >
          </li>
          <li>
            <a href="#" class="text-gray-700 hover:text-blue-500 font-semibold"
              >Friends</a
            >
          </li>
          <li>
            <a href="#" class="text-gray-700 hover:text-blue-500 font-semibold"
              >Photos</a
            >
          </li>
        </ul>
      </div>
    </div>

    <div class="max-w-5xl mx-auto mt-6">
      <div class="bg-white p-4 rounded-lg shadow-md mb-4">
        <div class="flex space-x-4">
          <input
            type="text"
            placeholder="What's on your mind?"
            class="w-full bg-gray-100 rounded-full px-4 py-2"
          />
        </div>
      </div>

      <div class="bg-white p-4 rounded-lg shadow-md mb-4">
        <div class="flex items-start space-x-4">
          <div class="flex-1">
            <div class="flex justify-between">
              <h3 class="font-semibold">Friend Name</h3>
              <span class="text-gray-500 text-sm">2 hrs ago</span>
            </div>
            <p class="mt-2 text-gray-700">
              This is a sample post on the user's timeline. It can include text,
              images, or both.
            </p>

            <div class="flex justify-between items-center mt-4 text-gray-600">
              <button class="hover:text-blue-500">Like</button>
              <button class="hover:text-blue-500">Comment</button>
              <button class="hover:text-blue-500">Share</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMyStore } from "~/stores/index";

const store = useMyStore();
store.fetchUserProfile();

definePageMeta({
  middleware: "token",
});
</script>

<style scoped>
.tier-button {
  @apply px-4 py-2 text-white font-bold rounded-md shadow-lg transition-transform transform hover:scale-105;
}

.tier-button.gold {
  @apply bg-gradient-to-r from-yellow-400 to-yellow-600 border-2 border-yellow-500;
  box-shadow: 0 4px 15px rgba(255, 223, 0, 0.7);
}

.tier-button.bronze {
  @apply bg-gradient-to-r from-yellow-900 to-orange-600 border-2 border-yellow-700;
  box-shadow: 0 4px 15px rgba(184, 115, 51, 0.7);
}

.tier-button.platinum {
  @apply bg-gradient-to-r from-gray-300 to-gray-500 border-2 border-gray-400;
  box-shadow: 0 4px 15px rgba(224, 224, 224, 0.7);
}

.tier-button.silver {
  @apply bg-gradient-to-r from-gray-400 to-gray-600 border-2 border-gray-500;
  box-shadow: 0 4px 15px rgba(192, 192, 192, 0.7);
}

.tier-button:hover {
  @apply scale-110;
}
</style>
