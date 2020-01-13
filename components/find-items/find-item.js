// components/find-items/find-items.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Object
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
    getId(e) {
      console.log(e.currentTarget.dataset.id)
      wx.navigateTo({
        url: `/pages/findDetail/findDetail?id=${e.currentTarget.dataset.id}`,
        events: {
          // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
          acceptDataFromOpenedPage: function(data) {
            console.log(data)
          },
          someEvent: function(data) {
            console.log(data)
          }

        },
        success: function(res) {
          // 通过eventChannel向被打开页面传送数据
          res.eventChannel.emit('acceptDataFromOpenerPage', {
            data: 'test'
          })
        }
      })
    }
  }
})