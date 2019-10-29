<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      active-text-color="#20a0ff"
      :unique-opened="true"
      router
      :default-active="defaultActiveRoute"
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-menu-item
                :index="subItem.index"
                :key="subItem.index"
              >{{ subItem.title }}
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { menuList } from '&utils/util.js'
  import { Menu, Submenu, MenuItem } from 'element-ui'

  Vue.use(Menu)
  Vue.use(Submenu)
  Vue.use(MenuItem)

  export default {
    name: 'SideMenu',
    data () {
      return {
        items: menuList
      }
    }
    ,
    components: {}
    ,
    computed: {
      defaultActiveRoute () {
        return this.$route.path
      }
    }
  }

</script>

<style lang="stylus" scoped>
  .sidebar-el-menu
    min-width: 200px
    text-align center
    margin-left: -30px

</style>
