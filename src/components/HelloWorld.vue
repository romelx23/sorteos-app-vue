<script setup>
import { ref } from 'vue'
import { reactive } from 'vue'

defineProps({
  msg: String
})

const countState = reactive({count:0})
const nameState = reactive({name:'Vue'})

const quotes=[
  {
    id:"1",
    quote:"I'm a little teapot, short and stout.",
    author:"author 1"
  },
  {
    id:"2",
    quote:"I'm a little teapot, short and stout.",
    author:"author 2"
  },
  {
    id:"3",
    quote:"I'm a little teapot, short and stout.",
    author:"author 3"
  },
  {
    id:"4",
    quote:"I'm a little teapot, short and stout.",
    author:"author 4"
  },
]

const changeName = () => {
  console.log('changeName')
  nameState.name = 'Vue 3'
}
 
const increment = () => {
  console.log('increment')
  countState.count++
}

</script>

<template>
  <h1 class="text-xl mt-2">{{ msg }}</h1>
  <h2>Vue 3 + Vite</h2>
  <button @click="increment" class="bg-blue-600 p-2">{{ countState.count }}</button>
  <h1>Nombre</h1>
  <h2>{{nameState.name}}</h2>
  <button @click="changeName" class="bg-blue-600 p-2">Cambiar Nombre</button>
  <h1>Frases</h1>
  <ul>
    <li v-for="quote in quotes" :key="quote.id">
      <p class="text-left font-semibold">{{quote.author}}</p>
      <blockquote>{{quote.quote}}</blockquote>
    </li>
  </ul>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
