<template>
  <el-form ref="form" inline class="search-section">

    <el-form-item label="订单编号">
      <el-input
        placeholder="请输入内容"
        v-model="form.orderNo"
        clearable>
      </el-input>
    </el-form-item>

    <el-form-item label="消费分店">
      <el-input
        placeholder="请输入内容"
        v-model="form.purchaseStore"
        clearable>
      </el-input>
    </el-form-item>

    <el-form-item label="消费项目">
      <el-select v-model="form.purchaseItem" placeholder="请选择">
        <el-option v-for="item in purchasesList"
                   :key="item.label + item.value"
                   :label="item.label"
                   :value="item.value"
                   :disabled="item.disabled">
        </el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="优惠方式">
      <el-select v-model="form.discountType" placeholder="请选择">
        <el-option v-for="item in discountTypeList"
                   :key="item.label + item.value"
                   :label="item.label"
                   :value="item.value"
                   :disabled="item.disabled">
        </el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="支付方式">
      <el-select v-model="form.paymentMethod" placeholder="请选择">
        <el-option v-for="item in paymentMethodList"
                   :key="item.label + item.value"
                   :label="item.label"
                   :value="item.value"
                   :disabled="item.disabled">
        </el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="订单状态">
      <el-select v-model="form.orderStatus" placeholder="请选择">
        <el-option v-for="item in orderStatusList"
                   :key="item.label + item.value"
                   :label="item.label"
                   :value="item.value"
                   :disabled="item.disabled">
        </el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="订单时间">
      <el-date-picker
        v-model="form.orderTime"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>
    </el-form-item>

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
    purchasesList,
    discountTypeList,
    paymentMethodList,
    orderStatusList
  } from '&utils/util.js'

  Vue.use(Input)
  Vue.use(Form)
  Vue.use(FormItem)
  Vue.use(DatePicker)
  Vue.use(Select)
  Vue.use(Option)

  export default {
    name: 'Input',
    data () {
      return {
        form: {
          orderNo: '',
          purchaseStore: '',
          purchaseItem: '',
          discountType: '',
          paymentMethod: '',
          orderStatus: '',
          orderTime: ''
        },
        purchasesList,
        discountTypeList,
        paymentMethodList,
        orderStatusList
      }
    },
    methods: {
      onSearch () {
        console.log(this.form)
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
