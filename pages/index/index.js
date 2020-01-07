//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list: [{
        "text": "首页",
        "iconPath": "/pages/images/home.png",
        "selectedIconPath": "/pages/images/home-active.png",
        dot: true
      },
      {
        "text": "目的地",
        "iconPath": "/pages/images/add.png",
        "selectedIconPath": "/pages/images/add-active.png",
        // badge: 'New'
      },
      {
        "text": "定制游",
        "iconPath": "/pages/images/dingzhi.png",
        "selectedIconPath": "/pages/images/dingzhi.png",
        // badge: 'New'
      },
      {
        "text": "发现",
        "iconPath": "/pages/images/search.png",
        "selectedIconPath": "/pages/images/search-active.png",
        // badge: 'New'
      },
      {
        "text": "我的",
        "iconPath": "/pages/images/my.png ",
        "selectedIconPath": "/pages/images/my-active.png",
        // badge: 'New'
      }
    ]
  },
  tabChange(e) {
    console.log('tab change', e)
  }
});