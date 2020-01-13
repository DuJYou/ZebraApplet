// pages/findDetail/findDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    list:[],
    title: '',
    subtitle:'',
    sort:'',
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 拿取路由参数
    this.setData({
      id: options.id
    })
    wx.request({
      url: `https://m.bmtrip.com/api/v3/article/detail?id=${this.data.id}`,
      success: (res) => {
        if(res.data){
          this.setData({
            // 设置富文本图片自适应正则
            list: res.data.data.content[0].replace(/\<img/gi, '<img style="width:100%;height:auto" '),
            title: res.data.data.title,
            subtitle: res.data.data.subtitle,
            sort: res.data.data.sort
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})