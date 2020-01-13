// pages/personal/personal.js
Page({
<<<<<<< HEAD

=======
>>>>>>> Duke
  /**
   * 页面的初始数据
   */
  data: {
<<<<<<< HEAD

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

=======
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
>>>>>>> Duke
  }
})