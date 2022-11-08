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
        <router-link to="computed">Computed</router-link>
      </li>
      <li>
        <router-link to="classstyle">ClassStyleBinding</router-link>
      </li>
    </ul>
  </nav>
  <div :class="{active : isActive}">
    <h1>Hai</h1>

    <div class="static" :class="{ active: isActive, 'text-danger': hasError }">ERROR</div>
    <div :class="classObject">ClassObject</div>

    <div :class="[activeClass, errorClass]">Belajar Class Style Binding</div>
  </div>
</template>

<script setup lang="ts">
  import {computed} from '@vue/reactivity';
  import {ref} from 'vue';

  const isActive = ref(true);
  const hasError = ref(null);

  const activeClass = ref('active')
  const errorClass = ref('text-danger')

  const classObject = computed(() => ({
    active: isActive.value && !hasError.value,
    'text-danger': hasError.value === 'fatal'
  }))

</script>

<style lang="css" scoped>
  .active {
    font-weight: bold;
  }

  .text-danger {
    color: red;
  }
</style>
