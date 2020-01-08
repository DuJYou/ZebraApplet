// pages/destination/destination.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [{
        // 导航名称
        text: '中国',
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
      },
      {
        text: '日本',
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
      },
      {
        text: '所有城市',
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
      }
    ],
    //左侧导航
    activeKey: 0,
    //折叠栏
    activeNames: ['1'],
    mainActiveIndex: 0,
    activeId: 1
  },
  onClickNav({
    detail = {}
  }) {
    this.setData({
      mainActiveIndex: detail.index || 0
    });
  },
  onClickMore(){
    
  },
  onClickItem({
    detail = {}
  }) {
    const activeId = this.data.activeId === detail.id ? null : detail.id;

    this.setData({
      activeId
    });
  },

  onChange(event) {
    wx.showToast({
      // icon: 'none',
      // title: `切换至第${event.detail}项`
    });
    this.setData({
      activeNames: event.detail,
    });
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

  }
})