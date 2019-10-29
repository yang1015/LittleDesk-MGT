<template>
  <div>
    <search-section :searchFor=0></search-section>
    <el-table
      :data="tableData"
      stripe>
      <el-table-column
        prop="userNo"
        label="用户编号"
        width="180">
      </el-table-column>
      <el-table-column
        label="头像"
        width="180">
        <template slot-scope="scope">
          <img :src="scope.row.avatar" style="width: 50px; height: 50px"/>
        </template>
      </el-table-column>
      <el-table-column
        prop="nickname"
        label="昵称">
      </el-table-column>
      <el-table-column
        prop="gender"
        label="性别">
      </el-table-column>
      <el-table-column
        prop="city"
        label="城市">
      </el-table-column>
      <el-table-column
        prop="mobile"
        label="手机号"
        width="200">
      </el-table-column>
      <el-table-column
        prop="registerTime"
        label="注册时间"
        width="200">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import Vue from 'vue'
  import SearchSection from './components/SearchSection.vue'
  import { Table, TableColumn } from 'element-ui'

  Vue.use(Table)
  Vue.use(TableColumn)

  export default {
    name: 'UserList',
    components: {
      SearchSection
    },
    data () {
      return {
        tableData: [
          {
            userNo: '1234',
            avatar: 'https://img3.doubanio.com/icon/ul56786513-3.jpg',
            nickname: '小六',
            gender: '男',
            city: '北京',
            mobile: '17333333',
            registerTime: '2019-10-28'
          },
          {
            userNo: '1234',
            avatar: '../../assets/logo.png',
            nickname: '小七',
            gender: '女',
            city: '上海',
            mobile: '18666666',
            registerTime: '2019-10-28'
          },
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .el-table-column
    border: 1px solid red
</style>
