// pages/personal/personal.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    login:'登录/注册'
  },
  //进入设置
  onClickSet(){
    wx.navigateTo({
      url: '/pages/settings/settings',
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },
  //进入反馈
  onClickFeeback(){
    wx.navigateTo({
      url: '/pages/feedback/feedback',
      success: (result)=>{
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },
  //进入登录
  bindGetUserInfo(){
    wx.navigateTo({
      url: '/pages/login/login',
      success: (result)=>{
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  }
})