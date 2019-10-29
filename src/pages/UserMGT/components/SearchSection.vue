<template>
  <el-form ref="form" inline class="search-section">

    <el-form-item label="用户昵称">
      <el-input
        placeholder="请输入内容"
        v-model="form.userName"
        clearable>
      </el-input>
    </el-form-item>

    <el-form-item label="用户编号">
      <el-input
        placeholder="请输入内容"
        v-model="form.userCode"
        clearable>
      </el-input>
    </el-form-item>

    <el-form-item v-if="searchFor == 0" label="注册时间">
      <el-date-picker
        v-model="form.registerTime"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>
    </el-form-item>

    <div v-else>
      <el-form-item label="评价等级">
        <el-select v-model="form.feedbackStars" placeholder="请选择">
          <el-option v-for="item in feedbackStars"
                     :key="item.label + item.value"
                     :label="item.label"
                     :value="item.value"
                     :disabled="item.disabled">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="提交时间">
        <el-date-picker
          v-model="form.feedbackTime"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
    </div>

    <el-form-item class="button-group">
      <button class="formButton" style="margin-right: 10px" @click="onSearch">查询</button>
      <button class="formButton" @click="clearAll">重置</button>
    </el-form-item>

  </el-form>

</template>

<script>
  import Vue from 'vue'
  import { Input, Form, FormItem, DatePicker, Select, Option } from 'element-ui'
  import {
    feedbackStars
  } from '&utils/util.js'

  Vue.use(Input)
  Vue.use(Form)
  Vue.use(FormItem)
  Vue.use(DatePicker)
  Vue.use(Select)
  Vue.use(Option)

  export default {
    name: 'Input',
    props: {
      searchFor: Number
    },
    data () {
      return {
        form: {
          userName: '',
          userCode: '',
          registerTime: '',
          feedbackStars: '',
          feedbackTime: ''
        },
        feedbackStars
      }
    },
    activated() {
      this.clearAll()
    },
    methods: {
      onSearch () {
        if (this.searchFor == 0) console.log(this.form.userName, this.form.userCode, this.form.registerTime)
        else console.log(this.form.userName, this.form.userCode, this.form.feedbackStars, this.form.feedbackTime)
      },

      clearAll () {
        for (let key of Object.keys(this.form)) {
          this.form[key] = ''
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~@styles/variables.styl'
  .search-section
    display: flex
    justify-content: flex-start
    flex-wrap wrap
    .el-form-item
      height: $searchItemHeight
      line-height: $searchItemHeight
    .button-group
      margin-left: 15px
      height: $searchItemHeight
      line-height: $searchItemHeight

</style>
