// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    click:0,
    Mudidi:false,
    data:false
  },
  DataClick(){
    this.setData({
      data:true
    })
  },
  MudidiClick(){
    console.log(1);
    this.setData({
      Mudidi:true
    })
  },
  onClose(){
    this.setData({
      Mudidi:false,
      data:false
    })
  },
  private(){
    this.setData({
      click:0
    })
  },
  enterprise(){
    this.setData({
      click:1
    })
  }
})