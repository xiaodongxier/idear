$(function () {
  var time = .08;
  var starNumber = 0;
  var endNumber = 5;
  function updata(starItem, endItem) {
    for (var i = starItem; i < endItem; i++) {
      if (myword[i] !== undefined) {
        $("#app ol").append(`<li class="animated fadeInLeft" style="animation-duration:${time += .08}s">${myword[i]}</li>`)
      } else {
        $("#app ol").append(`<li class="animated fadeInLeft" style="display:none">无数据</li>`)
      }
    }
    time = .08
  } updata(starNumber, endNumber)

  // if(myword.length > endNumber) {
  //   $(".nextPage").click(function(){
  //     $("#app ul").html("");
  //     updata(starNumber+=5,endNumber+=5)
  //   })
  //   console.log(endNumber)
  // }
  $(".nextPage").click(function () {
    if (myword.length > endNumber) {
      updata(starNumber += 5, endNumber += 5)
      console.log(myword.length, endNumber)
    } else {
      alert("缺乏灵感")
    }
  })
  // $(".parePage").click(function () {
  //   updata(starNumber -= 5, endNumber -= 5)
  // })
})