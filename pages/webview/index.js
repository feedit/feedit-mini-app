Page({
  data: {
    src: ''
  },
  onLoad(option) {
    this.setData({
      url: option.url,
    });
  }
});