<script>
export default {
  emits: ["onTagsChange"],
  data() {
    return {
      currentValue: "",
      tags: [],
    };
  },
  methods: {
    handleKeyDown(event) {
      if (event.key === "Backspace" && this.currentValue === "") {
        this.tags.pop();
        // this.onTagsChange(this.tags);
        this.$emit("onTagsChange", this.tags);
        // console.log(this.tags);
        // const exists = this.tags.some((tag) => tag === this.currentValue);
        // if (!exists) {
        //   this.tags.push(this.currentValue);
        //   this.currentValue = "";
        // }
      }
    },
    handleSubmit(event) {
      event.preventDefault();
      if (this.currentValue !== "") {
        this.tags.push(this.currentValue);
        this.currentValue = "";
        // this.onTagsChange(this.tags);
        this.$emit("onTagsChange", this.tags);
      }
    },
    removeTag(tag) {
      this.tags = this.tags.filter((t) => t !== tag);
      // this.onTagsChange(this.tags);
      this.$emit("onTagsChange", this.tags);
    },
  },
};
</script>

<template>
  <div class="px-2 flex flex-col">
    <label for="name"> Ingrese los participantes : </label>
    <div class="inputTags">
      <div class="tags">
        <div class="tag" v-for="(tag, i) in tags" :key="i">
          <span>{{ tag }}</span>
          <button
            @click="removeTag(tag)"
            class="
              text-red-600
              h-full
              w-6
              flex
              items-center
              justify-center
              hover:scale-105
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="{2}"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
        <form @submit="handleSubmit" class="inline-flex" autocomplete="off">
          <input
            type="text"
            name="name"
            id="name"
            autocomplete="false"
            v-model="currentValue"
            @keydown="handleKeyDown"
            class="input"
            placeholder="Ingrese un participante"
          />
        </form>
      </div>
    </div>
    <p class="text-red-600" v-if="this.currentValue === ''">
      Ingrese un valor para agregar
    </p>
  </div>
</template>

<style>
.inputTags {
  @apply inline-flex flex-wrap my-4 text-white h-full border items-center;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  padding: 5px;
}
.tag {
  @apply bg-slate-400 flex justify-between gap-2 rounded-md p-2;
}

.input {
  @apply py-2 px-4 bg-transparent text-white focus:border-gray-600 outline-none;
}

/* text-gray-600 border-gray-600 rounded-md  */
</style>