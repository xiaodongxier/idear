$(function () {
  var time = .02;
  var starNumber = 0;
  var endNumber = 60;
  function updata(starItem, endItem) {
    for (var i = starItem; i < endItem; i++) {
      if (myword[i] !== undefined) {
        // $("#app ol").append(`<li class="animated fadeInLeft" style="animation-duration:${time += .02}s">${myword[i].id}.${myword[i].hitokoto} - <strong>${myword[i].from}</strong></li>`)
        // $("#app .list").append(`<li class="animated fadeInLeft" style="animation-duration:${time += .02}s">${myword[i].id}. ${myword[i].hitokoto} - <strong>${myword[i].from}</strong></li>`)
        $("#app .list").append(`<li class="animated fadeInLeft" style="animation-duration:${time += .02}s">${myword[i].hitokoto} - <strong>${myword[i].from}(${myword[i].creator})</strong></li>`)
      } else {
        $("#app .list").append(`<li class="animated fadeInLeft" style="display:none">无数据</li>`)
      }
    }
    time = .08
  } updata(starNumber, endNumber)
  $(window).scroll(function(){
    if (myword.length > endNumber) {
      if($('body').height() - $(window).scrollTop() - $(window).height() < 10) {
        // updata(starNumber += starNumber, endNumber += endNumber)
        updata(starNumber = endNumber, endNumber += 10)
      }
    } else {
      alert("数据加载完毕,更多数据陆续添加中...")
    }
  })
})

