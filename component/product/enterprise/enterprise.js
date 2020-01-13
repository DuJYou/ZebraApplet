// component/product/enterprise/enterprise.js
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
    MudidiClick(){
      this.triggerEvent('MudidiClick',2)
    },
    DataClick(){
      this.triggerEvent('DataClick',3)
    }
  }
})
