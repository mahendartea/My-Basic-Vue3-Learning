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

  <div>
   <h1> This is Reactive Segment Page learning </h1>
  </div>
</template>

<style scoped>
  .nameclass {
    color: blue;
  }

  .counter {
    margin-left: 50px;
  }

  nav{
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
