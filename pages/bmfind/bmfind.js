// pages/bmfind/bmfind.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
<<<<<<< HEAD
=======
    titleList: [],
    titleid: 0,
    list: [],
    active: 0,
    page: 1,
    scrollTop: 0,
    showView: true,
    loadingShow:true,
    nomore:false,
    show: false,
    actions: [
      {
        name: '选项'
      },
      {
        name: '选项'
      },
      {
        name: '选项',
        subname: '副文本',
        openType: 'share'
      }
    ]
  },

  //点击弹出弹框 
  showPopup() {
    this.setData({ show: true });
  },

  // 点击关闭弹框
  onClose() {
    this.setData({ show: false });
  },
  // 滑动title点击事件
  clickChange(event, name) {
    // console.log(this.data.titleList[event.detail.index].id)
    this.setData({
      page: 1,
      showView: false,
      titleid: this.data.titleList[event.detail.index].id,
      list: []
    })
    this.ajaxRequset()
  },

  // 上拉加载
  lower(e) {
    console.log(e)
    this.setData({
      page: this.data.page + 1
    })
    // console.log(this.data.page)
    this.ajaxRequset()
  },

  // 数据请求
  ajaxRequset() {
    wx.request({
      url: `https://m.bmtrip.com/api/v3/article/list?sort_id=${this.data.titleid}&page=${this.data.page}&size=6`,
      success: (res) => {
        if (res.data) {
          if (res.data.data.list[0]) {
            // 判断是否有数据有数据不加载loading图
            this.setData({
              list: [
                ...this.data.list,
                ...res.data.data.list
              ],
              showView: true,
              nomore:false
            }, () => {
              // console.log(this.data.list, 'new')
            })
          }else{
            this.setData({
              loadingShow: false,
              nomore:true,
            })
          }
        }
      }
    })
>>>>>>> quting

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
<<<<<<< HEAD

=======
    // 初始页面数据获取
    wx.request({
      url: 'https://m.bmtrip.com/api/v3/article/list?sort_id=0&page=1',
      success: (res) => {
        if (res.data) {
          this.setData({
            list: res.data.data.list
          })
        }
      }
    })

    // title数据获取
    wx.request({
      url: 'https://m.bmtrip.com/api/v3/article/type',
      success: (res) => {
        if (res.data) {
          this.setData({
            titleList: res.data.data.list
          })
        }
      }
    })

    this.ajaxRequset()
>>>>>>> quting
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
<<<<<<< HEAD

=======
>>>>>>> quting
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