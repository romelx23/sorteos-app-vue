<script>
import InputSearch from "../sorteos/InputSearch.vue";

export default {
  components: {
    InputSearch,
  },
  methods: {
    handleOnTagsChange(tags) {
      // this.tags = tags;
      console.log(tags);
      this.tags = tags;
    },
    handleSortRandom() {
      if (this.tags.length > 0) {
        this.tagsOrder = [...this.tags].sort(() => Math.random() - 0.5);
        console.log(this.tagsOrder);
        this.winners = this.tagsOrder.slice(0, 3);
        this.counter++;
        this.saveInLocalStorage();
      }
    },
    saveInLocalStorage() {
      console.log('se guardo en local Storage')
      const data = {
        tags: this.tags,
        tagsOrder: this.tagsOrder,
        winners: this.winners,
        counter: this.counter,
      };
      localStorage.setItem("data", JSON.stringify(data));
    },
    delteResults() {
      // this.tags = [];
      this.tagsOrder = [];
      this.winners = [];
      this.counter = 0;
      this.deleteLocalStorage();
    },
    deleteLocalStorage() {
      localStorage.removeItem("data");
    },
  },
  mounted() {
    const data = JSON.parse(localStorage.getItem("data"));
    if (data) {
      this.tags = data.tags;
      this.tagsOrder = data.tagsOrder;
      this.winners = data.winners;
      this.counter = data.counter;
    }
  },
  data() {
    return {
      tags: [],
      tagsOrder: [],
      winners: [],
      counter: 0,
    };
  },
};
</script>

<template>
  <div class="bg-gray-800 w-full min-h-screen flex flex-col  items-center text-white">
    <!-- <HelloWorld msg="Título desde el padre" /> -->
    <h1 class="text-xl mt-2 font-semibold">Página de Sorteos 🎡</h1>
    <InputSearch @onTagsChange="handleOnTagsChange"/>
    <button 
    v-if="tags.length > 3"
    @click="handleSortRandom()"
    class="w-32 border border-blue-700 hover:bg-blue-700 transition rounded-md p-2">Sortear</button>
    <p
    v-if="tags.length < 3"
    >
    debe haber más de 3 participantes para sortear
    </p>
    <button 
    v-if="counter>0"
    @click="delteResults()"
    class="w-32 border border-red-700 hover:bg-red-700 transition rounded-md p-2 mt-2">Borrar Resultados</button>
    <!-- veces sorteadas -->
    <div class="text-2xl mt-2">
      <p>Veces Sorteadas</p>
      <span>{{ counter }}</span>
    </div>
    <!-- ganadores -->
    <div 
    class="flex flex-col items-center justify-center mt-4"
    >
      <div v-for="(winner, i) in winners" :key="i" class="w-32 text-left">
        <span class="text-2xl font-bold capitalize ">{{i+1}}.-{{ winner }}</span>
      </div>
    </div>
    <div class="tags">
      <div class="tag" v-for="(tag, i) in tagsOrder" :key="i">
        <span>{{i+1}}.-{{ tag }}</span>
      </div>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}
</style>
