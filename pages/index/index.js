//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    list: [],
  },
  onLoad: function () {
    wx.request({
      url: 'http://xdf.me/feedit/api?type=get&unread=true',
      data: {},
      success: (res) => {
        const { data } = res;
        if (data.success) {
          const { data: listStr } = data;
          const list = JSON.parse(listStr);
          this.setData({
            list,
          })
        }
      },
    });
  },
  gotourl(e) {
    wx.navigateTo({
      url: `/pages/webview/index?url=${e.currentTarget.dataset.url}`
    });
  }
})
