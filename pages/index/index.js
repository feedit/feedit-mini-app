//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    wx.request({
      url: 'http://xdf.me/feedit/api?type=get&page=1',
      data: {},
      success: (data) => {
        console.log(data);
      },
    });
  },
})
