<template>
      <nav class="navbar navbar-default navbar-static-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Vblog</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active"><router-link to="/">广场</router-link></li>
            <li><router-link to="/dev">开发</router-link></li>
            <li><router-link to="/">用户</router-link></li>
            <li><router-link to="/">相册</router-link></li>
            <li><router-link to="/">消息</router-link></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><router-link to="/">登录</router-link></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
</template>
<script>
export default {
  name: "navbar"
};
</script>
