// pages/destination/destination.js
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

  }
=======
    items: [], //目的地左侧列表text
    itemslist: [], //目的地左侧列表其他数据
    destinationList: [], //目的地右侧矩阵
    tltleSite: [], //目的地推荐地点
    kg: "false",
    //左侧导航
    mainActiveIndex: 0,
    activeId: 1,
    text:'更多的目的地▼'
  },
  //点击目的地进入详情页
  onClickDestinationList(){
    // console.log(1);
    
    // wx.wx.switchTab({
    //   url: '',
    //   success: (result)=>{
        
    //   },
    //   fail: ()=>{},
    //   complete: ()=>{}
    // });
  },
  //点击推荐进入详情页
  onClickTltleSite(){
    // console.log(1);
    
    // wx.wx.switchTab({
    //   url: '',
    //   success: (result)=>{
        
    //   },
    //   fail: ()=>{},
    //   complete: ()=>{}
    // });
  },
  onClickNav({
    detail = {}
  }) {
    // console.log(detail);
    this.setData({
      mainActiveIndex: detail.index || 0
    });
  },
  //展示更多
  onClickMore(e) {
    if (this.data.kg === 'false') {
      this.setData({
        kg: 'true',
        text:"收起▲"
      })
    } else {
      this.setData({
        kg: 'false',
        text:"更多的目的地▼"
      })
    }
  },
  onClickItem({
    detail = {}
  }) {
    console.log(detail);
    const activeId = this.data.activeId === detail.id ? null : detail.id;
    this.setData({
      activeId
    });
    // console.log(this.data.activeId);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://m.bmtrip.com/api/v3/m1/area/group?scene=6', //仅为示例，并非真实的接口地址
      success: (result) => {
        if (result.data) {
          this.setData({
            itemslist: result.data.data.list
          })
        }
        //重命名
        let itemslist = this.data.itemslist
        ////把itemslist里的labelpush到items中text
        let items = []
        for (let i = 0; i < itemslist.length; i++) {
          items.push({
            text: itemslist[i].label
          })
          this.setData({
            items: items
          })
        }
        //通过开关来判断是否获取更多的目的地
        let destinationList = []
        // console.log(this.data.kg);
        for (let j = 0; j < itemslist.length; j++) {
          destinationList.push({
            id: itemslist[j].children
          })
          this.setData({
            destinationList: destinationList
          })
        }
        //获取推荐地点的信息
        let tltleSite = []
        for (let z = 0; z < itemslist.length; z++) {
          tltleSite.push({
            id: itemslist[z].product
          })
          this.setData({
            tltleSite: tltleSite
          })
        }
      }
    })
  },
>>>>>>> Duke
})