var Bmob = require('../../utils/bmob.js');
Page({
  data: {
    // text:"这是一个页面"
    
  },

  applynow: function (e) {
    wx.navigateTo({
      url: '../form/form'
    })
  }
  
})