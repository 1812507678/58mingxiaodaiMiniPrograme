var Bmob = require('../../utils/bmob.js');
Page({
  data: {
    // text:"这是一个页面"
    loadingHidden: true
  },
  
  formSubmit: function (e) {
    console.log('form发生了submit事件');
    var money = e.detail.value.money;
    var mouth = e.detail.value.mouth;
    var name = e.detail.value.name;
    var phone = e.detail.value.phone;
    var qq = e.detail.value.qq;
    var certificate = e.detail.value.certificate;
    var account = e.detail.value.account;
    var password = e.detail.value.password;

    console.log('data== money：' + money + ',mouth:' + mouth + ',name:' + name + ',phone:' + phone + ',qq:' + qq
      + ',certificate:' + certificate
      + ',account:' + account
      + ',password:' + password);

    var StudentApply58 = Bmob.Object.extend("StudentApply58");
    var diary = new StudentApply58();
    diary.set("money", money);
    diary.set("mouth", mouth);
    diary.set("name", name);
    diary.set("phone", phone);
    diary.set("qq", qq);
    diary.set("certificate", certificate);
    diary.set("account", account);
    diary.set("password", password);
    diary.set("platform", "58名校贷小程序");

    wx.showLoading({
      title: '加载数据',
    })

    //添加数据，第一个入口参数是null
    diary.save(null, {
      success: function (result) {
        // 添加成功，返回成功之后的objectId（注意：返回的属性名字是id，不是objectId），你还可以在Bmob的Web管理后台看到对应的数据
        console.log("申请成功, objectId:" + result.id);
        wx.hideLoading();
        wx.redirectTo({
          url: '../applysuccess/applysuccess'
        })
      },
      error: function (result, error) {
        // 添加失败
        console.log('申请失败');
        wx.hideLoading();
        wx.showToast({
          title: '申请失败，网络异常或服务器错误',
          icon: 'succes',
          duration: 1000,
          mask: true
        })
      }
    });
  },
  formReset: function () {
    console.log('form发生了reset事件')
  }
})