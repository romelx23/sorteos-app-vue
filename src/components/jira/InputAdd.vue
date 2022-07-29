<script setup>
import { ref, defineEmits } from "vue";
const text = ref("");
const create = ref(false);
const emits = defineEmits(["onNewItem"]);
function handleSubmit() {
  if (text!=="") {
    emits("onNewItem", text.value);
    text.value = "";
  }
}
</script>

<template>
  <form action="" @submit.prevent="handleSubmit">
        <button type="button" @click="create = !create" class="btn-add">+</button>
    <div class="flex flex-col" v-if="create">
      <label for="crear-tarea" class="text-white">Ingresar Tarea</label>
      <input
        type="text"
        id="crear-tarea"
        v-model="text"
        placeholder="crear tarea"
        class="text-black border border-blue-700 rounded-md p-2 outline-neutral-700"
      />
      <button type="submit">
        Crear Caracterísitcas
      </button>
    </div>
  </form>
</template>

<style scoped>
.btn-add {
  @apply border border-green-600 hover:bg-green-600 absolute right-0 top-0 m-2 w-6 h-6 text-white;
}
</style>