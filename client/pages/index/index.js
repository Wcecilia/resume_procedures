//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  //事件处理函数
  bindViewTap: function () {

  },
  onLoad: function () {
  },
  tel: function (e) {
    wx.makePhoneCall({
      phoneNumber: '15256934374' //仅为示例，并非真实的电话号码
    })
  }
})
