<template>

  <nav>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/reactive">Reactive</router-link>
      </li>
    </ul>
  </nav>

  <div class="wrap">

    <div class="reactive">

      <h1> This is Reactive Segment </h1>

      {{state.count}}

      <button @click="tambah">+</button>
    </div>

    <hr>

    <div class="ref">
      <h1>This ref segment</h1>
      {{hitung.tugas}}
      <button @click="tambahya">+</button>

    </div>

  </div>
</template>

<script setup>
  import {reactive, ref} from 'vue';

  const state = reactive({count: 0})

  const tambah = () => {
    state.count++;
  }

  //ref pakai objek
  const hitung = {
    tugas: ref(80),
    uts: ref(80),
    uas: ref(90)
  }

  const tambahya = () => {
    hitung.tugas.value++
  }

</script>

<style scoped>
  .wrap {
    margin-left: 50px;
  }

  .reactive {
    padding-bottom: 10px;
  }

  .ref {
    padding-bottom: 10px;
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
