// pages/feedback/feedback.js
const {
  httpReq
} = require('../../api/http')
const url = require('../../api/url')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: '',
    situation: [{
        errType: 1,
        detail: '数据计算错误'
      },
      {
        errType: 2,
        detail: '输入表格错误'
      },
      {
        errType: 3,
        detail: '其他问题错误'
      },
      {
        errType: 4,
        detail: '建议'
      }
    ],
    suggestion: {
      placeholeder: '描述一下您的问题或是宝贵意见',
      value: ''
    },
    type: '',
    tiggleInfo: false,
    connection: ''
  },
  radioChange(e) {
    this.setData({
      type: e.detail.value
    })
  },
  change(res) {
    console.log(res)
    this.setData({
      tiggleInfo: true
    })
    setTimeout(() => {
      this.setData({
        tiggleInfo: false
      })
    },3000)
  },
  toSubmit() {
    let data = {
      type: this.data.type,
      content: this.data.suggestion.value,
      contactInfo: this.data.connection
    }
    let res = httpReq(url.feedBack.URL, url.feedBack.method, data,this.change )
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      info: options.info
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})