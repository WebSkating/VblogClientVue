<template>
<div>
  <navbar></navbar>
  <section class="container">
      <!-- <button @click="showToast">showToast</button> -->
      <div class="row">
        <div class="col-sm-8">
          <h4>最新博文</h4>
          <indexItems></indexItems>
        </div>
        <div class="col-sm-4">
          <notice></notice>
          <recent></recent>
          <typeLabels></typeLabels>
        </div>
    </div>
    <noMoreData></noMoreData>
  </section>
  <myfooter></myfooter>
</div>
</template>

<script>
import navbar from "@/components/navbar";
import myfooter from "@/components/footer";
import indexItems from "@/components/indexItem";
import notice from "@/components/notice";
import recent from "@/components/recent";
import typeLabels from "@/components/typeLabels";
import noMoreData from "@/components/noMoreData";
//在一个地方require所有组件使用
var axios = require("axios");
export default {
  name: "indexPage",
  data() {
    return {
      showNone: false,
      busy: false
    };
  },
  components: {
    navbar: navbar,
    myfooter:myfooter,
    indexItems: indexItems,
    notice: notice,
    recent: recent,
    typeLabels: typeLabels,
    noMoreData: noMoreData
  },
  methods:{
    showToast(){
      this.$toast.bottom('bottom');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.col-sm-8{
  padding-left:0;
}
.col-sm-4{
  padding-left:0;
  padding-right: 0;
}
</style>
