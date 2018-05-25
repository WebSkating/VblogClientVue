<template>
    <div  class="typeLabels">
        <h4>
            分类标签
        </h4>
        <div class="labels">
            <a href="">javascript</a>
            <a href="">css</a>
            <a href="">vue</a>
            <a href="">node</a>
            <a href="">express</a>
            <a href="">koa2</a>
            <a href="">mongodb</a>
            <a href="">mysql</a>
        </div>
    </div>
</template>
<script>
    export default {}
</script>
<style scoped>
.typeLabels{
    background-color: #FFFFFF;
    border-radius: 6px;
    margin-top:20px;
    border:1px solid #eaeaea;
}
.labels{
    display:flex;
    justify-content: flex-start;
    align-items: flex-start;
    align-content :flex-start;
    flex-wrap:wrap;
    width:100%; 
    height:240px;
}
h4{
    margin:0;
    padding:8px;
    background-color: #fbfbfb;
    border-bottom: 1px solid #eaeaea;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
}
.labels{
    padding:10px;
}
a{
    display:block;
    background-color: #F6F6F6;
    font-size: 14px;
    line-height: 26px;
    text-align: center;
    padding:0 14px;
    margin:6px;
    border-radius: 13px;
    text-decoration:none;
    color:#999999;
}
a:focus,a:hover{
    color:#f6f6f6;
    background-color: #00CC99;
}
</style>
