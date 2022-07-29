//// navbar
<template>
  <nav class="bg-gray-600">
    <ul
      class="
        container
        mx-auto
        px-4
        py-2
        flex flex-col
        md:flex-row
        items-center
        justify-between
        font-monserrat
      "
    >
      <li class="flex flex-col md:flex-row items-center">
        <router-link to="/jira" class="text-white text-2xl font-bold"> Jira </router-link>
      </li>
      <div class="flex flex-col md:flex-row items-center">
        <router-link to="/" class="text-white text-2xl font-bold"> Sorteos </router-link>
      </div>
    </ul>
  </nav>
</template>

<script>
export default {
};
</script>

<style>
</style>