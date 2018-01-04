// pages/applysuccess/applysuccess.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  copyqq:function(){
    //wx.setClipboardData("3324403918");
    wx.setClipboardData({
      data: '3324403918',
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            wx.showToast('复制qq成功，可以去加qq，催审核进度啦');
          }
        })
      }
    })

  }
 
})