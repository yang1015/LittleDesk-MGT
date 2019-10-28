<template>
  <el-header class="header">Header</el-header>
</template>

<script>
  import Vue from 'vue'
  import { Header, Container } from 'element-ui'

  Vue.use(Header)
  Vue.use(Container)

  export default {
    name: 'Header'
  }
</script>

<style lang="stylus" scoped>
  @import "~@styles/variables.styl"
  .el-header, .el-footer {
    width: 100vw
    background-color: $bgGreen
    color: #333
    text-align: center
    line-height: 60px
  }
</style>
