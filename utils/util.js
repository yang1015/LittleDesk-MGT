let menuList = [
  {
    icon: 'el-icon-grape',
    index: '/orderList',
    title: '订单列表'
  },
  {
    index: '1',
    icon: 'el-icon-goblet-square-full',
    title: '运营管理',
    subs: [
      {
        index: '/cardMGT',
        title: '卡管理'
      }
    ]
  },
  {
    index: '/user',
    icon: 'el-icon-ice-cream',
    title: '用户管理',
    subs: [
      {
        index: '/userList',
        title: '用户列表'
      },
      {
        index: '/userFeedback',
        title: '用户反馈'
      }
    ]
  },
  {
    icon: 'el-icon-medal',
    index: '/auth',
    title: '权限管理'
  }
]

let purchasesList = [
  {
    value: -1,
    label: '全部',
  },
  {
    value: 0,
    label: '小时卡'
  },
  {
    value: 1,
    label: '日卡'
  },
  {
    value: 3,
    label: '周卡'
  },
  {
    value: 4,
    label: '月卡'
  }
]

let discountTypeList = [
  {
    value: -1,
    label: '全部',
  },
  {
    value: 0,
    label: '无优惠'
  },
  {
    value: 1,
    label: '优惠券'
  }
]

let paymentMethodList = [
  {
    value: -1,
    label: '全部',
  },
  {
    value: 0,
    label: '微信支付'
  },
  {
    value: 1,
    label: '卡余额支付'
  }
]

let orderStatusList = [
  {
    value: -1,
    label: '全部',
  },
  {
    value: 0,
    label: '未支付'
  },
  {
    value: 1,
    label: '已支付'
  },
  {
    value: 0,
    label: '支付失败'
  },
  {
    value: 1,
    label: '支付超时'
  },
  {
    value: 2,
    label: '已退款'
  },
  {
    value: 3,
    label: '退款中'
  },
  {
    value: 4,
    label: '退款失败'
  }
]

let feedbackStars = [
  {value: -1, label: '全部'},
  {value: 1, label: '一星'},
  {value: 2, label: '两星'},
  {value: 3, label: '三星'},
  {value: 4, label: '四星'},
  {value: 5, label: '五星'}
]



module.exports = {
  menuList,
  purchasesList,
  discountTypeList,
  paymentMethodList,
  orderStatusList,
  feedbackStars
}
