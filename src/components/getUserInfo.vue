<template>
<div class="hello">
  <h1>{{ msg }}</h1>
  <ul>
    <li>
      <input id="userid" v-model="userid" type="text" name="userid" placeholder="用户id" value="">
    </li>
    <li>
      <a id="" href="#" @click="getUserInfo">提交</a>
    </li>
  </ul>
  <h2>参数</h2>
  <div class="">
    {{str}}
  </div>
  <h2>结果</h2>
  <div class="">
    {{notice}}
  </div>
</div>
</template>

<script>
export default {
  name: 'getUserInfo',
  data() {
    return {
      userid: '',
      msg: '查询用户信息',
      notice: ''
    }
  },
  computed: {
    str: function() {
      return JSON.stringify({
        'userid': this.userid
      });
    }
  },
  methods: {
    getUserInfo() {
      const that = this;
      //根据用户id查询用户信息
      fetch('http://localhost:9000/getUserInfo?userid=' + this.userid, {
        method: "GET",
        mode: "cors"
      }).then(function(response) {
        console.log(response);
        response.text().then(function(data){
          console.log(data);
          that.notice = data;

        });
        return ;
      }).catch(function(error) {
        alert(error);
      });


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
