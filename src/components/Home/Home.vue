<template>
  <el-container class="container">
    <el-header class="header">Header</el-header>
    <el-container class="container">
      <side-menu></side-menu>
      <el-main class="main">
        <transition name="move" mode="out-in">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import Vue from 'vue'
  import { Container, Header, Main, Aside, Menu } from 'element-ui'
  import SideMenu from './SideMenu/SideMenu.vue'

  Vue.use(Container)
  Vue.use(Header)
  Vue.use(Main)
  Vue.use(Aside)
  Vue.use(Menu)

  export default {
    name: 'Home',
    components: {
      SideMenu
    }
  }

</script>

<style lang="stylus" scoped>
  @import "~@styles/variables.styl"
  .container
    height: 100vh

  .el-header, .el-footer {
    background-color: $bgGreen
    color: #333
    text-align: center
    line-height: 60px
  }

  .el-main
    border: 1px solid blue
    background-color: #E9EEF3
    color: #333
    text-align: center
    line-height: 160px

  body > .el-container
    margin-bottom: 40px


</style>
