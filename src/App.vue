<template>
  <div id="app">
    <div class="block">
    <span class="demonstration">默认 Hover 指示器触发</span>
    <el-carousel height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>

  <button v-on:click="show = !show">点击
  </button>
  <transition name="fade">
  <p v-if="show">show</p>
  </transition>
  <el-button type="primary">主要按钮</el-button>
<i class="el-icon-loading"></i>
<el-button :plain="true" type="success">成功</el-button>
    <p v-if="seen">{{msg}}</p>
    <div v-html="raw"></div>
    <button v-bind:disabled="ButtonDisabled" @click="dosomething">按钮</button>
    <a :href="url">{{url}}</a>
<div v-if="3>6">正常</div>
    <p>
  
      <!-- use router-link component for navigation. -->
      <!-- specify the link by passing the `to` prop. -->
      <!-- <router-link> will be rendered as an `<a>` tag by default -->
      <router-link to="/"     active-class="active">主页</router-link>
      <router-link to="/home" active-class="active">Go to Foo</router-link>
      <router-link to="/news" active-class="active">Go to Bar</router-link>
      <router-link to="/user" active-class="active">user</router-link>
            <router-link to="/note" active-class="active">note</router-link>
    </p>
    <h1>Hello App!</h1>
    <hello></hello>
    <chid></chid>
        <chida></chida>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <transition enter-active-class="animated zoomInLeft" leave-active-class="animated zoomOutRight">
      <router-view></router-view>
    </transition>
  </div>
  
</template>


<script>

import hello from './components/Hello.vue'
var chid={
  
  template:'<li>代办项</li>'

}
var chida={
  
  template:'<li>代办项1</li>'

}


export default {
  components: {hello,chid,chida},
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
       seen:false,
       ButtonDisabled:false,
       url:"www.baidu.com",
       isactive:false,
       show:true,
       raw:'<div class="tl" style="color:red">1</div>'
    }
    
  },
   methods:{
     hh:function()
     {
       alert('1'+this.name);
     },
    dosomething:function()
    {
      alert("单机")
    }
   }


  
}
</script>

<style>
body
{
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.active
{
  color:aqua;
  font-size: 26px;
}
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .fade-enter-active
  {
    transition: opacity .5s
  }
</style>
