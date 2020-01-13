// component/header/header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    keyword:{
      type:Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
   async searchConfirm(e){
      wx.navigateTo({
        url: `../../../pages/search/searchMain/searchMain?keyword=${e.detail.value}`
      })
    }
  }
})
