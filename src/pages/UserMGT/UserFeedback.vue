<template>
  <div>
    <search-section :searchFor=1></search-section>
    <el-table
      :data="tableData"
      stripe>
      <el-table-column
        prop="userNo"
        label="用户编号"
        width="180">
      </el-table-column>

      <el-table-column
        prop="nickname"
        label="昵称">
      </el-table-column>
      <el-table-column
        prop="stars"
        label="评价等级">
      </el-table-column>
      <el-table-column
        prop="feedback"
        label="评价内容">
      </el-table-column>

      <el-table-column
        prop="feedbackTime"
        label="评价时间"
        width="200">
      </el-table-column>

      <el-table-column
        label="操作"
        width="200">
        <button class="tableInlineButton">查看订单</button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Table, TableColumn } from 'element-ui'
  import SearchSection from './components/SearchSection.vue'

  Vue.use(Table)
  Vue.use(TableColumn)

  export default {
    name: 'UserFeedback',
    components: {
      SearchSection
    },
    data () {
      return {
        tableData: [
          {
            userNo: '123',
            nickname: '小欧',
            stars: 1,
            feedback: '非常好',
            feedbackTime: '2019-10-10'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~@styles/variables.styl'


</style>
