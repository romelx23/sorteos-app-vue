<template>
  <div class="bg-gray-800 w-full min-h-screen">
    <h1
      class="
        text-white text-2xl
        font-pacifico
        py-2
        underline
        decoration-green-500
      "
    >
      Jira App
    </h1>
    <div class="flex justify-center px-5 py-4 gap-3">
      <form
        @submit.prevent="handleNewBoard"
        class="flex flex-col space-y-2 border border-blue-800 p-2"
      >
        <label for="crear" class="text-white">Crear un Tablero</label>
        <input
          type="text"
          id="crear"
          v-model="table.name"
          placeholder="Ingrese el nombre del tablero"
          class="border border-blue-700 rounded-md p-2 outline-neutral-700"
        />
        <button
          class="
            px-4
            py-2
            border border-blue-700
            rounded-md
            hover:bg-blue-700
            transition
            text-white
          "
        >
          Crear tablero
        </button>
      </form>
    </div>
    <h1 class="text-white">Tableros</h1>
    <div class="boards-container">
      <div class="boards">
        <div
          class="board"
          @drop="onDrop($event,board)"
          @dragover.prevent
          @dragenter.prevent
          v-for="board in boards"
          :key="board.id"
        >
          <InputAdd @on-new-item="(text) => handleNewItem(text, board)" />
          <h1 class="text-white text-xl font-pacifico pb-3">
            {{ board.name }}
          </h1>
          
          <div class="items">
            <div class="item" draggable="true" @dragstart="startDrag($event,board,item)" v-for="item in board.items" :key="item.id">
              {{ item.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "@vue/reactivity";
import InputAdd from "./InputAdd.vue";

let table = reactive({
  name: "",
});

let boards = reactive([
  {
    id: crypto.getRandomValues(new Uint8Array(4)).join(""),
    name: "tablero 1",
    items: [
      {
        id: crypto.getRandomValues(new Uint8Array(4)).join(""),
        title: "Caracterísitcas de archivos",
      },
      {
        id: crypto.getRandomValues(new Uint8Array(4)).join(""),
        title: "Resolve Bugs",
      },
    ],
  },
  {
    id: crypto.getRandomValues(new Uint8Array(4)).join(""),
    name: "tablero 2",
    items: [
      {
        id: crypto.getRandomValues(new Uint8Array(4)).join(""),
        title: "Caracterísitcas de archivos",
      },
      {
        id: crypto.getRandomValues(new Uint8Array(4)).join(""),
        title: "Resolve Bugs",
      },
    ],
  },
]);
console.log(boards);
let create = reactive(false);

function handleNewItem(text, board) {
  console.log(text, board.name, board.id);
  board.items.push({
    id: crypto.getRandomValues(new Uint8Array(4)).join(""),
    title: text,
  });
}

function handleNewBoard() {
  if (table.name) {
    console.log(table.name);
    boards.push({
      id: crypto.getRandomValues(new Uint8Array(4)).join(""),
      name: table.name,
      items: [],
    });
    table.name = "";
  }
}

function startDrag(e,board,item) {
  e.dataTransfer.setData("text/plain", JSON.stringify({
    boardId: board.id,
    itemId: item.id,
  }));
}

function onDrop(e, destination) {
  const {boardId,itemId}=JSON.parse(e.dataTransfer.getData("text/plain"));
  e.preventDefault();
  console.log(boardId,itemId);
  // buscamos el board origen y el item origen
  const board = boards.find(board => board.id === boardId);
  const item = board.items.find(item => item.id === itemId);
  // agregamos al board destino el item
  destination.items.push({...item});
  // borramos el item del board origen
  board.items = board.items.filter(item => item.id !== itemId);
}
</script>

<style scoped>
.boards {
  @apply flex space-x-2 flex-wrap space-y-2;
}

.boards .board {
  @apply flex flex-col bg-blue-800 p-4 relative min-h-[40vh] text-white w-72;
}

.boards .board .items {
  @apply flex flex-col space-y-2;
}

.boards .board .items .item {
  @apply flex flex-col items-start bg-blue-700 p-2 w-full;
}
</style>