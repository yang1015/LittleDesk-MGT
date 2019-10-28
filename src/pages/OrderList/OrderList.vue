<template>
  <el-table
    :data="tableData"
    stripe>
    <el-table-column
      prop="orderNo"
      label="订单编号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="payAtStore"
      label="消费分店"
      width="180">
    </el-table-column>
    <el-table-column
      prop="serviceType"
      label="买卡类别">
    </el-table-column>
    <el-table-column
      prop="amountPayable"
      label="应收金额">
    </el-table-column>
    <el-table-column
      prop="amountPaid"
      label="实收金额">
    </el-table-column>
    <el-table-column
      prop="discountAmount"
      label="优惠金额">
    </el-table-column>
    <el-table-column
      prop="paymentMethod"
      label="支付方式">
    </el-table-column>
    <el-table-column
      prop="orderStatus"
      label="订单状态">
    </el-table-column>
    <el-table-column
      prop="orderTime"
      label="订单时间">
    </el-table-column>
    <el-table-column
      prop="paymentTime"
      label="支付时间">
    </el-table-column>
    <el-table-column
      prop="refund"
      label="退款">
    </el-table-column>
  </el-table>
</template>
<script>
  import Vue from 'vue'
  import { Table, TableColumn } from 'element-ui'

  Vue.use(Table)
  Vue.use(TableColumn)
  export default {
    name: 'OrderList',
    data () {
      return {
        tableData: [
          {
            orderNo: '2016-05-02',
            payAtStore: '南部商务区',
            serviceType: '月卡',
            amountPayable: 300,
            amountPaid: 260,
            discountAmount: 40,
            paymentMethod: '微信支付',
            orderStatus: 1,
            orderTime: '2019-10-28',
            paymentTime: '2019-10-28',
            refund: ''
          },
          {
            orderNo: '2016-05-02',
            payAtStore: '南部商务区',
            serviceType: '月卡',
            amountPayable: 300,
            amountPaid: 260,
            discountAmount: 40,
            paymentMethod: '微信支付',
            orderStatus: 1,
            orderTime: '2019-10-28',
            paymentTime: '2019-10-28',
            refund: ''
          },
        ]
      }
    },
    methods: {}
  }
</script>

<style lang="stylus" scoped>


</style>
