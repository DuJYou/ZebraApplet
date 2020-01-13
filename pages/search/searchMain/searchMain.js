
Page({
  data: {
    title:[],
    list:[],
    type:0,
    case:true,
    page:1,
    lowerCase:true,
    loadingPicCase:true,
    price:0,
    keyword:'',
    page404:false,
    show: false,
    Shai:0
  },
  typeData(){
    wx.request({
      url: `https://m.bmtrip.com/api/v3/m1/product/list?page=${this.data.page}&keywords=${this.data.keyword}&theme_id[]=&district_id[]=&order_by=&type=${this.data.type}${this.data.price==0?'':'&order_by='+this.data.price}` ,
      success: (result) => {
        if (result.data) {
          if (this.data.page===1) {
            this.setData({
              list: result.data.data.list,
              case:true,
              loadingPicCase:false,
             
            })
          }
          else{
            this.setData({
              list: [...this.data.list,
                      ...result.data.data.list
                      ],
              lowerCase:true,
              loadingPicCase:false
             })
          }
        }
      }
    })
  },
  
  onLoad: function (options) {
    this.setData({
      keyword:options.keyword
    })
    wx.request({
      url: `https://m.bmtrip.com/api/v3/m1/product/list/type?keywords=${options.keyword}&theme_id=&district_id=`,
      success: (result) => {
          if(result.data.data.list.length)
          {
               this.setData({
                 title: result.data.data.list,
                 loadingPicCase:false,
                 page404:false,
              })
          }
          else{
            this.setData({
               page404:true,
           })
          }
      }
    })
      this.typeData()
  },
  clickShai(propes){
    this.setData({
      Shai:propes.detail
    })
    if(this.data.Shai==1){
      this.setData({
        show:true,
        Shai:0
      })
    }
    
  },

 async changeType(propes) {
   await this.setData({
      case:false,
      page:1
    })
    let index = propes.detail
    let type=this.data.title[index].type
    if(this.data.type!==type)
    {
      this.setData({
        type:type
      })
      this.typeData()
    }
  },

 async clickTermView(propes){
     let priceone=0
     if(propes.detail[1]==1){
      priceone=1
     }
     else if(propes.detail[1]==2){
      priceone=2
     }
     else if(propes.detail[1]==0||propes.detail[0]==1){
      priceone=0
     }
    await this.setData({
      price:priceone,
      page:1,
      case:false
    })
    this.typeData()
  },


  async lower() {
    if(this.data.lowerCase===true)
    {
      await this.setData({
        loadingPicCase:true,
        lowerCase:false,
        page:this.data.page+1
      })
      this.typeData()
   }
  },

  backSearchDoor(){
    console.log(1);
    
    wx.navigateTo({
      url: `../searchDoor/searchDoor`
    })
  },
  onClose() {
    this.setData({ show: false });
  }
})