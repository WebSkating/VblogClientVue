<template>
<div class="hello" id="createUser">
  <h1>{{ msg }}</h1>
  <ul>
    <li>
      <input id="username" v-model="username" type="text" name="username" placeholder="用户名" value="">
    </li>
    <li>
      <input id="password" v-model="password" type="password" name="password" placeholder="密码" value="">
    </li>
    <li>
      <input id="nickname" v-model="nickname" type="text" name="nickname" placeholder="昵称" value="">
    </li>
    <li>
      <a id="" href="#" @click="createUser">提交</a>
    </li>
  </ul>
  <div class="">
    {{str}}
  </div>
  <div class="">
    {{notice}}
  </div>
</div>
</template>

<script>
export default {
  name: 'createUser',
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
      msg: '创建用户',
      notice: ''
    }
  },
  computed: {
    str: function() {
      return JSON.stringify({
        'username': this.username,
        'password': this.password,
        'nickname': this.nickname
      });
    }
  },
  methods: {
    createUser() {
      const that = this;

      //POST请求模式  创建用户 也就是将来的注册流程
      fetch('http://localhost:9000/createUserPost', {
        body: JSON.stringify(this.str),
        method: "POST",
        mode: "cors"
      }).then(function(response) {
        console.log(response);
        response.text().then(function(data) {
          console.log(data);
          var obj = JSON.parse(data);
          console.log(obj);
          if (obj.code == "yes") {
            that.notice = obj.description;
          } else if (obj.code == "no") {
            that.notice = obj.description;
            alert(obj.description);
          } else {
            that.notice = "response error!"
            alert("response error!")
          }
          return;
        })

      }).catch(function(error) {
        alert(error)
      });

      // GET请求模式
      // fetch('http://localhost:9000/createUserGet?username=' + this.username + '&password=' + this.password + '&nickname=' + this.nickname, {
      //   method: "GET",
      //   mode: "cors"
      // }).then(function(response) {
      //   console.log(response);
      //   response.text().then(function(data) {
      //     console.log(data);
      //     var obj = JSON.parse(data);
      //     console.log(obj);
      //     if (obj.code == "yes") {
      //       that.notice = obj.description;
      //     } else if (obj.code == "no") {
      //       that.notice = obj.description;
      //       alert(obj.description);
      //     } else {
      //       that.notice = "response error!"
      //       alert("response error!")
      //     }
      //     return;
      //   })
      //
      // }).catch(function(error) {
      //   alert(error)
      // });

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
