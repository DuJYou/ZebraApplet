// pages/detail/detail.js
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stickyTop: 200,
    active: 0,
    fav: 0,
    showData: null,
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var myThis = this
    wx.request({
      url: 'https://m.bmtrip.com/api/v3/m1/product/detail',
      data: {
        product_id: options.product_id
      },
      success(result) {
        let coupon = result.data.data.coupon
        if (coupon) {
          for (var i = 0; i < coupon.length; i++) {
            result.data.data.coupon[i].value_tips = coupon[i].value_tips.toString().split('').join('.')
          }
        }
        let feature = result.data.data.feature
        if (feature.length > 0) {
          for (var i = 0; i < feature.length; i++) {
            result.data.data.feature[i].content = feature[i].content.replace(/\<img/gi, "<img style='width:100%' ")
          }
        }
        let scoreFixOne = result.data.data.comment_average_score
        result.data.data.comment_average_score = scoreFixOne.toFixed(1)
        let min_price = result.data.data.min_price
        let str = min_price.split('.')[0]
        result.data.data.min_price = str.replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,')
        myThis.setData({
          showData: result.data.data
        })
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

  },
  /**
   * 自定义事件
   */
  onClickIcon() {
    Toast('点击图标');
  },

  onClickButton() {
    Toast('点击按钮');
  },

  onClickFav() {
    if (!this.data.fav) {
      this.setData({
        fav: 1
      })
      Toast('收藏成功');
    } else {
      this.setData({
        fav: 0
      })
      Toast('已取消收藏');
    }
  },

  handleScroll({
    scrollTop = 0,
    isFixed = true
  }) {
    if (scrollTop && isFixeds)
      console.log(this)
  }
})