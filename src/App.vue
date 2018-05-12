<template>
  <div id="app">
    <navbar></navbar>
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <myfooter></myfooter>
  </div>
</template>

<script>
import navbar from "./components/navbar";
import myfooter from "./components/footer";
export default {
  name: 'App',
  components: { navbar: navbar,myfooter:myfooter }
}
</script>

<style>
</style>
