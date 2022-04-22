<template>
  <div class="flex flex-col justify-between bg-neutral-100 rounded">
    <div class="">
      <div class="flex items-center px-4 pr-20 py-2 text-2xl">
        <PaperAirplaneIcon class="w-6 h-6 font-bold text-indigo-600" />
        <span class="text-gray-800 font-semibold">RAET</span>
      </div>
      <hr />
      <div class="flex flex-col my-4 space-y-1">
        <router-link
          class="flex items-center py-1.5 mr-2 px-4 hover:bg-indigo-500 hover:shadow-md hover:shadow-indigo-400 hover:text-white rounded-r"
          to="/"
        >
          <HomeIcon class="w-5 h-5 mr-1" />
          <span>Home</span>
        </router-link>

        <router-link
          class="flex items-center py-1.5 mr-2 px-4 hover:bg-indigo-500 hover:shadow-md hover:shadow-indigo-400 hover:text-white rounded-r"
          to="/table"
        >
          <TableIcon class="w-5 h-5 mr-1" />
          <span>Table</span>
        </router-link>
      </div>
    </div>
    <div
      class="flex justify-center py-4 items-center space-x-2 border-t border-gray-300"
    >
      <img
        class="w-9 h-9 rounded-full"
        src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
        alt="profile"
      />
      <div>
        <h1 class="font-medium">Ravdan</h1>
        <p class="text-gray-400 text-xs">Admin</p>
      </div>
      <button class="hover:text-indigo-500">
        <router-link to="/login">
          <ArrowSmDownIcon class="w-6 h-6"
        /></router-link>
      </button>
    </div>
  </div>
</template>

<script>
import { PaperAirplaneIcon } from "@heroicons/vue/outline";
import { HomeIcon } from "@heroicons/vue/outline";
import { TableIcon } from "@heroicons/vue/outline";
import { ArrowSmDownIcon } from "@heroicons/vue/outline";

export default {
  components: {
    PaperAirplaneIcon,
    HomeIcon,
    TableIcon,
    ArrowSmDownIcon,
  },
};
</script>

<style>
.router-link-active {
  @apply text-white shadow bg-indigo-600;
}
</style>
