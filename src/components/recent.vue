<template>
    <div  class="recent">
        <h4>
            近期文章
        </h4>
        <ul>
            <li>标题一</li>
            <li>标题二</li>
            <li>标题三</li>
            <li>标题四</li>
            <li>标题五</li>
        </ul>
    </div>
</template>
<script>
    export default {}
</script>
<style scoped>
.recent{
    background-color: #FFFFFF;
    margin-top:20px;
    border-radius: 6px;
    border:1px solid #eaeaea;
}
ul,li{
    list-style: none;
}
h4{
    margin:0;
    padding:8px;
    background-color: #fbfbfb;
    border-bottom: 1px solid #eaeaea;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
}
ul{
    padding:10px;
}
</style>