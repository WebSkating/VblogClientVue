<template>
      <nav class="navbar navbar-self navbar-static-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">白勺的博客</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active"><router-link to="/">首页</router-link></li>
            <li><router-link to="/">随笔</router-link></li>
            <li><router-link to="/"><i class="iconfont icon-search"></i></router-link></li>
            <li><router-link to="/dev">开发</router-link></li>
          </ul>
          <!-- <ul class="nav navbar-nav navbar-right">
            <li><router-link to="/">登录</router-link></li>
          </ul> -->
        </div><!--/.nav-collapse -->
      </div>
    </nav>
</template>
<script>
export default {
  name: "navbar"
};
</script>

<style scoped>
@import '../assets/css/iconfont.css';

.navbar-self {
    background-color: #00CC99;
    border-color: #00CCCC;
    margin-bottom:0;
}
a {
    color: #ffffff;
    text-decoration: none;
    font-size:20px;
}
a:focus,a:hover {
    color: #CCFFCC;
}
.nav>li>a:focus, .nav>li>a:hover {
    text-decoration: none;
    background:initial;
}
.navbar-toggle span{
  background-color:#FFFFFF;
}
</style>

