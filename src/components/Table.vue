<template>
  <div class="w-full h-screen flex">
    <Navbar class="hidden md:flex" />
    <div class="relative overflow-x-auto w-full bg-neutral-200 text-black">
      <Header />
      <div class="px-4">
        <div class="flex justify-between items-center px-4 py-5">
          <div>
            <p class="font-medium">Table</p>
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
        <div class="w-full h-screen">
          <DataTable class="w-table" :headers="dataHeader" :data="dataBase">
            <template #body_id="{ db }">
              {{ db.key }}
            </template>
          </DataTable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Header from "./Header.vue";
import DataTable from "./DataTable.vue";
import { PlusCircleIcon } from "@heroicons/vue/outline";
import axios from "axios";

export default {
  data() {
    return {
      dataHeader: [
        { key: "id", title: "#" },
        { key: "name", title: "Name" },
        { key: "genres", title: "Genres" },
        { key: "year", title: "Year" },
        { key: "author", title: "Author" },
        { key: "description", title: "Description" },
      ],
      dataBase: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/dataBase")
      .then(res => {
        this.dataBase = res.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  components: { Navbar, Header, DataTable, PlusCircleIcon },
};
</script>

<style></style>
