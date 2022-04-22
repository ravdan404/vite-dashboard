<template>
  <div class="flex">
    <Navbar class="hidden md:flex" />
    <div class="w-full h-screen bg-neutral-200 text-black">
      <Header />
      <div class="px-4">
        <div class="w-full flex justify-between items-center px-2 py-4">
          <div>
            <p class="font-medium">Home</p>
          </div>
          <div class="flex space-x-2">
            <input
              class="rounded focus:outline-none text-sm p-1"
              type="search"
              name=""
              placeholder="Search"
            />
            <button
              class="flex items-center font-medium py-1 px-2 rounded text-neutral-800 bg-neutral-100"
            >
              <PlusCircleIcon class="w-5 h-5" />
              <span class="pl-1">ITEM</span>
            </button>
          </div>
        </div>
        <DataTable />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Header from "./Header.vue";
import DataTable from "./DataTable.vue";
import { PlusCircleIcon } from "@heroicons/vue/outline";

export default {
  components: { Navbar, PlusCircleIcon, Header, DataTable },
};
</script>

<style></style>
