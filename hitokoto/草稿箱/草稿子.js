$(function () {
  var myword = [
    // "乐观主义和悲观主义对世界都有贡献，前者发明了飞机，后者发明了降落伞。",
    // "时钟和镜子改变了人类社会，时钟创造了一种焦虑文化，镜子创造了一种自恋文化。",
    // "为什么妈妈都不喜欢媳妇，而奶奶都喜欢孙媳妇。。。。因为，敌人的敌人，就是朋友。",
    // "在人类行为学课上我们曾学过，朋友失败时，你难过.朋友成功时，你更难过",
    // "世上没有陌生人，有的只是还未结识的朋友",
    // "认知能力是一个人最核心的竞争力",
    // "鸡蛋从外向内打破是食物，从内向外打破是生命。",
    // "人生从外向内打破是压力，从内向外打破是成长。",
    // "决定我们一生的，有时不是我们的能力，而是我们的选择！",
    // "圆规为什么可以画圆？因为脚在走，心不变。你为什么不能圆梦？因为心不定，脚不动。",
    // "没规划的人生叫拼图，有规划的人生叫蓝图； 没目标的人生叫流浪，有目标的人生叫航行！",
    // "蜜蜂忙碌一天，人见人爱； 蚊子整日奔波，人人喊打！",
    // "多么忙不重要，忙什么才重要!",
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    // 3,3,3,3,3,3,3,3,3,3,
    // 4,4,4,4,4,4,4,4,4,4,
    // 5,5,5,5,5,5,5,5,5,5,
    // 6,6,6,6,6,6,6,6,6,6,
    // 7,7,7,7,7,7,7,7,7,7,
    // 8,8,8,8,8,8,8,8,8,8,
    // 9,9,9,9,9,9,9,9,9,9,
    // 0,0,0,0,0,0,0,0,0,0,
    // 111,111,111,111,111,111,111,111,111,111,
    123

  ];
  var time = .05;
  var starNumber = 0;
  var endNumber = 10;
  function updata(starItem, endItem) {
    for (var i = starItem; i < endItem; i++) {
      if (myword[i] !== undefined) {
        $("#app ol").append(`<li class="animated fadeInLeft" style="animation-duration:${time += .05}s">${myword[i]}</li>`)
      } else {
        $("#app ol").append(`<li class="animated fadeInLeft" style="display:none">无数据</li>`)
      }
      // console.log(myword[i])
      // console.log(starItem,endItem)
    }
    time = .05
  } updata(starNumber, endNumber)


  // if(myword.length > endNumber) {
  //   $(".nextPage").click(function(){
  //     $("#app ul").html("");
  //     updata(starNumber+=10,endNumber+=10)
  //   })
  //   console.log(endNumber)
  // }

  $(".nextPage").click(function () {
    if (myword.length > endNumber) {
      updata(starNumber += 10, endNumber += 10)
      console.log(myword.length, endNumber)
    } else {
      alert("缺乏灵感")
    }
  })
  // $(".parePage").click(function () {
  //   updata(starNumber -= 10, endNumber -= 10)
  // })
})