<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/reactive">Reactive</router-link>
      </li>
      <li>
        <router-link to="computed"> Computed </router-link>
      </li>
    </ul>
  </nav>

  <div class="counter">
    <h1>Computed Page</h1>
    <hr />

    <p>Name : {{ author.name }}</p>
    <p>{{ publisedBooksMessage }}</p>

    <p>{{ fullName }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { reactive, ref } from "vue";

const firstName = ref("Mahend");
const lastName = ref("Payana");

const fullName = computed({
  get() {
    return firstName.value + " " + lastName.value;
  },

  set(newValue) {
    const parts = newValue.split(" ");
    firstName.value = parts[0];
    lastName.value = parts[1];
  },
});

const author = reactive({
  name: "Mahendar Dwi Payana",
  books: [
    "Java - Belajar Java itu mudah",
    "Javascript - Belajar javascript lumayan susah",
  ],
});

const publisedBooksMessage = computed(() => {
  return author.books.length > 0 ? "Yes" : "No";
});
</script>

<style scoped>
.nameclass {
  color: blue;
}

.counter {
  margin-left: 50px;
}

nav {
  margin: 0;
  padding: 0;
  text-align: right;
  align-self: center;
}

ul {
  list-style: none;
  padding: 0;
}
</style>
