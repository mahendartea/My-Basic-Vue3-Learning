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
  <div class="counter">
    <h1>{{angka}}</h1>
    <button @click="angka++">Tambah 1 </button>
    <button @click="angka--">Kurang 1 </button>

    <p>{{message}}</p>
    <div v-html="rawHtml"> </div>

    <hr>

    <input type="text" v-model="name" placeholder="Masukan nama anda" :disabled="isButtonDisabled">
    <button @click="disabledToggle">Aktifkan form di samping</button>

    <!-- dinamic atribut pakai v-bind -->
    <p v-bind="attrName">Nama anda : {{name}} </p>

  </div>
</template>

<script lang="ts" setup>
  import {ref} from "vue";
  const angka = ref(0);
  const isButtonDisabled = ref(true)
  const message = ref("Pesan hari ini");
  const rawHtml = ref("<p>Mari membuat html </p>")
  let name = ref("")
  // dinamic atribut gunakan objek id dan class
  let attrName = ref({
    id: 'nameid',
    class: 'nameclass'
  })

  const disabledToggle = () => {
    isButtonDisabled.value = !isButtonDisabled.value
  }

</script>

<style scoped>
  .nameclass {
    color: blue;
  }

  .counter {
    margin-left: 50px;
  }

  nav {
    background-color: #f3f3f3;
    padding: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
  }
</style>
