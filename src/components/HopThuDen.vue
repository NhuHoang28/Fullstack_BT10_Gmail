<template>
    <div>
        <div class="chon"> 
         <router-link :to="{name:'chinh'}">Chính</router-link>
         <router-link :to="{name:'mang-xa-hoi'}">Mạng xã hội</router-link> 
         </div>
         <div>
             <router-view></router-view>
         </div>
    </div>
</template>
<script>  
export default {

}
</script>
<style scoped>
.chon{
    display: flex;
}
.chon a:first-child{
    margin-left:0px;
}
a{
    padding:5px 30px;  
    flex:1;
    margin-left:2px;
    background-color: rgb(0, 0, 0,0.3);
}
</style>
