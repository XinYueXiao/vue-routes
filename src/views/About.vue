<template>
  <div class="about">
    <h1>This is an about page</h1>

    <button v-permission="['admin','editor']">admin,editor</button>
    <button v-permission="['editor']">editor</button>
  </div>
</template>
