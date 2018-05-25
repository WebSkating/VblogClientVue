<template>
    <div>
        <p class="cp" v-show="showNone">没有更多数据了</p>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                showNone : true
            }
        }
    }
</script>
<style scoped>
.cp{
    text-align: center;
}
</style>