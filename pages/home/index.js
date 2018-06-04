//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '首页',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    location: {
      long: "",
      lati: ""
    }
  },
  onReady:function(){
    this.dialog = this.selectComponent("#dialog");
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  showDialog:function(){
    this.dialog.showDialog();
  },
  _cancelEvent(){
    console.log("你点击了取消");
    this.dialog.hideDialog();
  },
  _confirmEvent(){
    console.log("你点击了确定");
    this.dialog.hideDialog();
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    wx.getLocation({
      type: 'wgs84',
      success: res => {
        this.setData({
          location: {
            long: res.longitude,
            lati: res.latitude
          }
        })
      },
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
