<template>
    <div class="container">
        <ul>
            <li v-for="item in items" v-bind:key="item.id">
                <div>
                    <h2><a href="">{{item.title}}</a></h2>
                    <p>{{item.content}}</p>
                    <div><span>作者：{{item.author}}</span>&nbsp;&nbsp;<span>日期：{{item.updateDate.substr(0,10)}}</span>&nbsp;&nbsp;<span>喜欢：{{item.starNum}}</span></div>
                </div>
            </li>
        </ul>
        <div>
            <p class="cp">没有更多数据了</p>
            <hr>
        </div>
   </div>
</template>

<script>
export default {
  name: "indexPage",
  data() {
    return {
      items: [],
      pageIndex: 0,
      pageSize: 10,
      pageNum: 1
    };
  },
  created: function() {
    var that = this;
    fetch(
      "../../static/article.json" +
        "?pageIndex=" +
        this.pageIndex +
        "&pageSize=" +
        this.pageSize +
        "&pageNum=" +
        this.pageNum,
      {
        method: "GET",
        mode: "cors"
      }
    )
      .then(function(response) {
        response.text().then(function(data) {
          console.log(data);
          //   var arr = JSON.parse(data);
          that.items = JSON.parse(data);
        });
      })
      .catch(function(error) {
        alert(error);
      });
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
  padding: 2rem;
}
li h2 {
  padding: 0;
  margin: 1rem 0;
  text-align: left;
}
li p {
  padding: 0;
  margin: 0;
  text-align:left;
  align-items: flex-start;
  height: 4rem;
}
.cp{
    font-size: 1.5rem;
    text-align: center;
}
</style>
