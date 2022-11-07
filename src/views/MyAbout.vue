<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
    </ul>
  </nav>
  <h1>About</h1>
</template>

<script lang="ts" setup>
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
</script>

<style scoped>
nav {
  background-color: #f3f3f3;
  padding: 20px;
}
ul {
  list-style: none;
  padding: 0;
}
</style>
