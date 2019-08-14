//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    stringArray: [
     [
       {
          "text": "winni",
          "style": "textH1"
       },
       {
         "text": "性别：女",
         "style": ""
       },
       {
          "text": "年龄：18",
          "style": ""
        },
        {
          "text": "计算机专业",
          "style": ""
        },
        {
          "text": "求职****岗位",
          "style": ""
        },
        {
          "text": "居住某某小区",
          "style": ""
        },
        {
          "text": "暮色苍茫看劲松，乱云飞渡仍从容。天生一个仙人洞，无限风光在险峰",
          "style": ""
        }
     ],
     [
       {
         "text": "某某年 - 某某年",
         "style": "textH1"
       },
       {
         "text": "某某公司担任某某岗位",
         "style": ""
       },
       {
         "text": "从事某某岗位",
         "style": ""
       },
       {
         "text": "绣幄鸳鸯柱，红情密、腻云低护秦树。芳根兼倚，花梢钿合",
         "style": ""
       },
       {
         "text": "秋风夜渡河，吹却雁门桑。遥见胡地猎，鞴马宿严霜。",
         "style": ""
       }
     ]
    ]
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
