<template>
  <div id="app"> 
    <ul>
      <li><router-link :to="{name:'hop-thu-den'}">Hộp thư đến</router-link></li>
      <li><router-link :to="{name:'thu-nhap'}">Thư nháp</router-link></li> 
      <li><router-link :to="{name:'gui-thu'}">Gửi thư</router-link></li> 
    </ul>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script> 

export default { 
   
}
</script>

<style>
*{
  margin:0px;
  padding:0px;

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex; 
}
 .content{
  background-color: rgba(0, 0, 0, 0.1);
flex:0.8; 
}
ul{
  background-color: rgb(0, 0, 0,0.2);
  flex:0.2;
}
li{
list-style: none;
padding:5px 30px; 
margin:3px 15px;
background-color: rgb(0, 0, 0,0.3);
}
a{
  text-decoration: none;
  color: black;
  display: block;
}
</style>
