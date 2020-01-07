Page({
  data: {
    list: [{
      "text": "对话",
      "iconPath": "/page/weui/images/tabbar_icon_chat_default.png",
      "selectedIconPath": "/page/weui/images/tabbar_icon_chat_active.png",
      dot: true
    },
    {
      "text": "设置",
      "iconPath": "/page/weui/images/tabbar_icon_setting_default.png",
      "selectedIconPath": "/page/weui/images/tabbar_icon_setting_active.png",
      badge: 'New'
    }]
  },
  tabChange(e) {
    console.log('tab change', e)
  }
});