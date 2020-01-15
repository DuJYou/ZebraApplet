const listData  = require("./productList");
const childData  = require("./children");
const tripData  = require("./triplist");
const mengData  = require("./mengList");
const ouData  = require("./ouList");
const feiData  = require("./feiList");
const meiData  = require("./meiList");
const zuguoData  = require("./zuguoList");

var app = getApp()
Page({
  data: {
    imgUrls: [
      'https://product-ssl-qiniu.bmtrip.com/product_5dd1f60b20ca3.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5dd1f6371bca9.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5dd1f65c84591.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5dd1f6a3815e4.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5df07d6693cbe.jpg'
    ],
    addUrls:[
      'https://product-ssl-qiniu.bmtrip.com/product_5dad466595306.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5dad466dcea13.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5dad467368311.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5dad46795e701.jpg'
    ],
    tripUrls:[
      'https://product-ssl-qiniu.bmtrip.com/product_5daa783963fed.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5daa7844e43f9.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5daa78483bda3.jpg'
    ],
    ribenUrl:[
      'https://product-ssl-qiniu.bmtrip.com/product_5ddfadd3971e6.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5ddfac7395988.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5ddfac784d084.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5ddfac7d8f4a8.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5ddfac83b6b25.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5ddfac898efd8.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5ddfb19986e6d.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5ddfb1a0bab09.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5ddfb2e6afdc0.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5ddfb1b5370d9.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5ddfac9223759.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5ddfac9752a4b.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5ddfaca03c34c.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5ddfacae22575.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5ddfacb7d5a4d.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5ddfacbd348cb.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5ddfb45c02255.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5ddfb4672ff3d.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5ddfb46d2e108.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5ddfb77d56b3e.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5ddfb7824f664.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5ddfb787eaeaa.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5ddfb78bed214.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5ddf95c13ef8d.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5ddf95ca8e56c.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5ddf95d21dc49.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5ddf95d91e159.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5ddfb0752bdc5.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5ddfb06d7f65f.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5ddf9ff2d609c.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5ddfa0293a2a7.jpg'
    ],
    mengUrl:[
      'https://product-ssl-qiniu.bmtrip.com/product_5dc534666127a.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5dc534723863e.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5dc534797b512.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5dc534829a42f.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5dc539e53b33b.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5dc539ebb3dd8.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5dc539f48e939.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5dc539fa72ad2.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5dc53ddfcbd87.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5dfb160fce1d8.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5dfb16742519e.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5dfb167c381ab.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5dfb168216977.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5dc53e3fa3062.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5dc53e4f0979e.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5dc53e5ce3985.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5dc53e672e526.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5dc53f5e60432.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5dc53f68012f7.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5dc53f6eb738c.jpg',
      'https://product-ssl-qiniu.bmtrip.com/product_5dc53f75bede1.jpg'
    ],
    swiperCurrent:0,
    autoplay: false,
    interval: 3000,
    duration: 800,
    listdata:[],
    childdata:[],
    tripdata:[],
    mengdata:[],
    oudata:[],
    feidata:[],
    meidata:[],
    zuguodata:[]
  },
  //轮播图的切换事件  
  swiperChange: function (e) {
    // console.log(e);
    this.setData({
      swiperCurrent: e.detail.current   //获取当前轮播图片的下标
    })
  },
  onClickTltleSite( detail = {}){
    console.log(1,detail.currentTarget.id);
    // console.log(1);
    // let product_id=detail.currentTarget.id
    wx.navigateTo({
      url: `/pages/detail/detail?product_id=${detail.currentTarget.id}`,
      success: (result)=>{
      },
      fail: ()=>{},
      complete: ()=>{}
    });
    //wx.switchTab({
    //   url: '',
    //   success: (result)=>{
        
    //   },
    //   fail: ()=>{},
    //   complete: ()=>{}
    // });
  },
  handleFOrmattingPrice(){
    let list=listData.ajaxData.data.list
    let child=childData.childData.data.list
    let trip=tripData.triplist.data.list
    let meng=mengData.menglist.data.list
    let ou=ouData.ouData.data.list
    let fei=feiData.feiData.data.list
    let mei=meiData.meiData.data.list
    let zuguo=zuguoData.zuguolist.data.list
    list.forEach((v,index)=>{
      v.price=parseInt(v.price).toLocaleString()
    })
    child.forEach((v,index)=>{
      v.price=parseInt(v.price).toLocaleString()
    })
    trip.forEach((v,index)=>{
      v.price=parseInt(v.price).toLocaleString()
    })
    meng.forEach((v,index)=>{
      v.price=parseInt(v.price).toLocaleString()
    })
    ou.forEach((v,index)=>{
      v.price=parseInt(v.price).toLocaleString()
    })
    fei.forEach((v,index)=>{
      v.price=parseInt(v.price).toLocaleString()
    })
    mei.forEach((v,index)=>{
      v.price=parseInt(v.price).toLocaleString()
    })
    zuguo.forEach((v,index)=>{
      v.price=parseInt(v.price).toLocaleString()
    })
    this.setData({
      listdata:list,
      childdata:child,
      tripdata:trip,
      mengdata:meng,
      oudata:ou,
      feidata:fei,
      meidata:mei,
      zuguodata:zuguo
    })
  },
  onLoad:function(){
    this.handleFOrmattingPrice()
    wx.request({
      url: 'https://m.bmtrip.com/api/v3/m1/homepage/icons/a', 
      success: (result) => {
        if (result) {
          this.setData({
            list: result.data.data.list
          })
        }
      }
    })
    wx.request({
      url: 'https://m.bmtrip.com/api/v3/m1/theme/group', 
      success: (result) => {
        if (result) {
          this.setData({
            theme: result.data.data.list
          })
        }
      }
    })
    // wx.request({
    //   url: 'https://m.bmtrip.com/api/v3/m1/cms/page/detail?pageId=5da95cd6b896310ceb4a61a0', 
    //   success: (result) => {
    //     if (result) {
    //       this.setData({
    //         riList1: result.data.data.data[3]
    //       })
    //     }
    //     console.log(result.data.data.data[3].data[0].img.url);
    //   }
    // })
  }
})