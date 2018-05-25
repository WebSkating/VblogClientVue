<template>
    <div v-infinite-scroll="getData"
  infinite-scroll-disabled="busy"
  infinite-scroll-distance="10">
        <ul>
            <li v-for="item in items" v-bind:key="item.id">
                <div class="row">
                    <div class="col-sm-4">
                        <img src="../assets/img/fengjing01.jpg" class="img-responsive center-block" alt="风景">
                    </div>
                    <div class="col-sm-8">
                        <router-link class="linkto" to="/">{{item.title}}</router-link>
                        <div class="meta">
                          <span>作者：{{item.author}}</span>&nbsp;&nbsp;
                          <span>日期：{{item.updateDate.substr(0,10)}}</span>&nbsp;&nbsp;
                          <span>阅读({{item.starNum}})</span>&nbsp;&nbsp;
                          <span>喜欢({{item.starNum}})</span>&nbsp;&nbsp;
                        </div>
                        <p>{{item.content}}</p>
                    </div>
                </div>
            </li>
        </ul>
        
   </div>
</template>

<script>
//在一个地方require所有组件使用
var axios = require("axios");
export default {
  name: "indexPage",
  data() {
    return {
      items: [],
      pageIndex: 0,
      pageSize: 10,
      pageNum: 1,
      showNone: false,
      busy: false
    };
  },
  methods: {
    getData() {
      var that = this;
      axios
        .get(
          //   "http://localhost:3000/common/getIndexData" +
          "../../static/article.json" +
            "?pageIndex=" +
            this.pageIndex +
            "&pageSize=" +
            this.pageSize +
            "&pageNum=" +
            this.pageNum
        )
        .then(function(response) {
          // console.log(response);
          if (response.data instanceof Object) {
            if (response.data instanceof Array) {
              that.items = response.data;
              if (response.data.length < 10) {
                // that.busy = true;
                that.showNone = true;
              } else {
                // that.busy = false;
                that.pageIndex += that.pageSize;
                that.pageNum++;
                that.showNone = false;
              }
            } else {
              alert("response.data is not a Array");
            }
          } else {
            alert("response.data is not a Object");
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created: function() {
    // this.getData();
    // var that = this;
    // $(window).scroll(function(){
    //   var scrollTop = $(this).scrollTop();
    //   var scrollHeight = $(document).height();
    //   var windowHeight = $(this).height();
    //   if(scrollTop+windowHeight===scrollHeight){
    //     that.getData();
    //   }
    // });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  padding: 0;
  
}
ul,
li {
  list-style: none;
}
ul li {
  background-color: #ffffff;
  border:1px solid #eaeaea;
  border-radius: 6px;
  margin-bottom: 12px;
  padding:16px 12px;
}

li h2 {
  padding: 0;
  margin: 12px 0;
  text-align: left;
}
li p {
  padding: 0;
  margin: 0;
  text-align: left;
  align-items: flex-start;
  height: 48px;
}
.cp {
  font-size: 18px;
  text-align: center;
}
.linkto{
  display:inline-block;
  font-size:18px;
  text-decoration: none;
  color:#333333;
  margin-bottom:10px;
}
.linkto:hover{
  color:#00CC99;
}
.meta{
  margin-bottom: 10px;
}
.meta span{
  font-size:12px;
}
</style>
