<script setup>
import { MDBContainer } from "mdb-vue-ui-kit";
import { RouterView } from "vue-router";
</script>

<template>
  <MDBContainer fluid><h1>Buy Order</h1></MDBContainer>
  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: normal;
}
</style>
