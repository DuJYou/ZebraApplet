// component/search/searchMain/searchMain.js
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
    zongHe:1,
    Price:0,
    Shai:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    async clickZongHe(){
      if(this.data.Price!==0){
        let num=0
        this.data.zongHe==1?num=0:num=1
         await this.setData({
            zongHe:num,
            Price:0
          })
        this.triggerEvent('clickTermView',[this.data.zongHe,this.data.Price])
    }
    },

   async clickShai(){
     await this.setData({
        Shai:1
      })
      this.triggerEvent('clickShai',this.data.Shai)
    },

   async clickPrice(){
      let num=0;
      let price=0;
      switch (this.data.Price){
        case 0:
          num=1;
          price=0;
          break;
        case 1:
          num=2;
          price=0;
          break;
        case 2:
          num=1;
          break;
      }
     await this.setData({
        Price:num,
        zongHe:0
      })
      this.triggerEvent('clickTermView',[this.data.zongHe,this.data.Price])
    }
  }
})
