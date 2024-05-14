//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg =[
  //"url(/img/橘子.jpg)",
  //"url(/img/狗尾巴草.png)",
  "url(/img/bg1.jpg)",
  "url(/img/bg6.jpg)",
  //"url(/img/bg7.jpg)",
  "url(/img/flower.jpg)",
  "url(/img/flower1.jpg)",
  //"url(/img/bg9.jpg)",
  "url(/img/bg10.png)",
  "url(/img/懒洋洋.jpg)",
  "url(/img/旅行小狗.jpg)",
  "url(/img/初恋.jpg)",
  "url(/img/落日.png)",
  "url(/img/打水漂.png)",
  "url(/img/图书.png)",
  //"url(/img/山水绿色.png)",
  "url(/img/流星.jpg)",
  "url(/img/暴雪.jpg)",
  //"url(/img/落日.jpg)",
  //"url(/img/猫咪.jpg)",
  //"url(/img/bg8.jpg)",
  //"url(/img/bg1.jpg)",
  //"url(/img/云彩.jpg)",
  "url(/img/bg29.jpg)",
  "url(/img/科技少女.jpg)",
  "url(/img/瀑布.png)",
  "url(/img/桃花.jpg)"
  ];
  //获取背景图片总数，生成随机数
  var bgindex =Math.floor(Math.random() * backimg.length);
  //重设背景图片
  document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];
  //随机banner数组,图片可以换成图床链接，注意最后一条后面不要有逗号
  var bannerimg =[
    //"url(/img/橘子.jpg)",
    //"url(/img/狗尾巴草.png)",
    "url(/img/bg1.jpg)",
    "url(/img/bg6.jpg)",
    //"url(/img/bg7.jpg)",
    "url(/img/flower.jpg)",
    "url(/img/flower1.jpg)",
    //"url(/img/bg9.jpg)",
    "url(/img/bg10.png)",
    "url(/img/懒洋洋.jpg)",
    "url(/img/旅行小狗.jpg)",
    "url(/img/初恋.jpg)",
    "url(/img/落日.png)",
    "url(/img/打水漂.png)",
    "url(/img/图书.png)",
    //"url(/img/山水绿色.png)",
    "url(/img/流星.jpg)",
    "url(/img/暴雪.jpg)",
    //"url(/img/落日.jpg)",
    //"url(/img/猫咪.jpg)",
    //"url(/img/bg8.jpg)",
    //"url(/img/bg1.jpg)",
    //"url(/img/云彩.jpg)",
    "url(/img/bg29.jpg)",
    "url(/img/科技少女.jpg)",
    "url(/img/瀑布.png)",
    "url(/img/桃花.jpg)"
  ];
  //获取banner图片总数,生成随机数
  var bannerindex =Math.floor(Math.random() * bannerimg.length);
  //重设banner图片
  document.getElementById("page-header").style.backgroundImage = bannerimg[bannerindex];
