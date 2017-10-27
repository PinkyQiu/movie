
Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    movie: null
  },
  onLoad() {
    this.loadMovie();
  },
  loadMovie() {
    let that = this;
    wx.showToast({
      title: '正在加载',
      icon: 'loading',
      duration: 2000
    })
    wx.request({
      url: 'http://api.douban.com/v2/movie/coming_soon',
      method: 'GET',
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        let subjects = res.data.subjects;
        that.setData({
          movie: subjects
        })
      }
    })
  }
})
