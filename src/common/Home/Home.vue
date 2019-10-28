<template>
  <el-container class="layout">
    <top-header></top-header>
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
  import { Container, Main } from 'element-ui'
  import SideMenu from '../SideMenu/SideMenu.vue'
  import TopHeader from '../Header/Header.vue'

  Vue.use(Container)
  Vue.use(Main)

  export default {
    name: 'Home',
    components: {
      SideMenu,
      TopHeader
    }
  }

</script>

<style lang="stylus" scoped>
  @import "~@styles/variables.styl"
  .layout
    display: flex
    flex-direction: column
    justify-content flex-start
    height: 100vh

  .el-main
    background-color: #E9EEF3
    color: #333
    text-align: center

  body > .el-container
    margin-bottom: 40px


</style>
