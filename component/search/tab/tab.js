// component/tab/tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titleList:{
      type:Object
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    active: 0,
    title:[]
  },
  observer:{
    'titleList':function(titleListOne){
     this.setData({
        title: titleListOne
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      wx.showToast({
        title: `切换到标签 ${event.detail.name}`,
        icon: 'none'
      });
    },
    clickType(name){
      let index=name.detail.index;
      this.triggerEvent('changeType',index)
  
    }
  }
})
