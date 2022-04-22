<template>
  <div class="relative overflow-x-auto shadow-md rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-slate-800 dark:text-gray-400"
      >
        <tr>
          <th
            v-for="(header, i) in headers"
            :key="i"
            scope="col"
            class="px-6 py-3"
          >
            {{ header.key }}
          </th>
        </tr>
      </thead>
      <tbody class="overflow-x-auto">
        <tr
          v-for="(db, j) in data"
          :key="j"
          class="border-b odd:bg-white even:bg-neutral-100"
        >
          <td
            v-for="(head, index) in headers"
            :key="index"
            class="px-6 py-2 whitespace-nowrap"
          >
            <slot :name="'body_' + head.key" :item="item">
              {{ db[head.key] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "DataTable",
  props: {
    headers: { required: true, type: Array },
    data: { required: true, type: Array },
  },
};
</script>

<style></style>
