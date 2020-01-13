// component/search/hotSearch/hotSearcch.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

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
    clickKuai(e){
      wx.navigateTo({
        url: `../../../pages/search/searchMain/searchMain?keyword=${e.currentTarget.dataset.actor}`
      })
    }
  }
})
