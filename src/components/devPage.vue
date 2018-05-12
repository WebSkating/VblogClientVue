<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <router-link to="/createUser">createUser</router-link>
      </li>
      <li>
        <router-link to="/getUserInfo">getUserInfo</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'menuPage',
  data () {
    return {
      msg: 'menu page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 10px;
  height: 20px;
  line-height: 20px;
}

a {
  color: #42b983;
}

input {
  border: 1px solid #000000;
}
</style>
