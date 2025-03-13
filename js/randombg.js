//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg =[
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/%E6%B8%A9%E9%A6%A8/wallhaven-jxjz9p.jpg)",
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/%E5%90%84%E7%A7%8D%E5%8A%A8%E6%BC%AB%E5%A3%81%E7%BA%B8/587e71fe-3272-446b-9a8a-d905781dd680.jpeg)",
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/%E6%B8%A9%E9%A6%A8/wallhaven-jxpj9m.jpg)",
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/%E6%B8%A9%E9%A6%A8/wallhaven-l8xo9l.jpg)",
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/blog_banner/wallhaven-r23jzm.jpg)",
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E9%AC%BC%E5%88%80/17_se.jpg)",
 "url(https://cdn.jsdelivr.net/gh/chuchendjs/picgo/picgo/pg4.png)",
//晚霞
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/blog_banner/wallhaven-3lv8j6.jpg)",
//YYDS_SPACE
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/%E5%90%84%E7%A7%8D%E5%8A%A8%E6%BC%AB%E5%A3%81%E7%BA%B8/btf8.png)",
//列车窗外
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E9%A3%8E%E6%99%AF/Snipaste_2024-09-24_14-44-57.png)",
//远山翠
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/blog_banner/Snipaste_2024-09-30_11-01-16.png)",
//雨后街道
 "url(https://wn.zznnwn.cloudns.biz/img/bg18.png)",
//蓝天女孩
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/blog_banner/bg13.png)",
// 柴犬 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/blog_banner/53e92cb72c4c4dd398e0ff1a11da859d~tplv-v4nquku3lp-image%20(1).png)",
//
// "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/blog_banner/0c2a5859fe57499e919b097420d113f4~tplv-13w3uml6bg-image.png)",
//雪地马路
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/blog_banner/Snipaste_2024-11-25_17-07-12.png)",
//绘画
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/blog_banner/wallhaven-85zwzk.png)",
//远山翠
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/blog_banner/Snipaste_2024-10-28_17-52-07.png)",
//简洁
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/blog_banner/Snipaste_2024-12-13_16-00-32.png)",
//蓝天花朵
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/blog_banner/Snipaste_2025-02-07_08-57-37.png)",
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/blog_banner/wallhaven-zy1pzy.jpg)",
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/blog_banner/wallhaven-l8e812.jpg)",
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/blog_banner/wallhaven-o5k319.jpg)",
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/blog_banner/wallhaven-85llm2.jpg)",
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/blog_banner/wallhaven-6dv6xq.jpg)",
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/blog_banner/wallhaven-6d9lr7.jpg)",
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/%E5%B0%8F%E6%B8%85%E6%96%B0/wallhaven-2ypz3x.png)",
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/%E5%B0%8F%E6%B8%85%E6%96%B0/wallhaven-d693wm.png)",
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/%E5%B0%8F%E6%B8%85%E6%96%B0/wallhaven-9d3zrk.png)",
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/%E5%B0%8F%E6%B8%85%E6%96%B0/wallhaven-vmwm9l%20(1).png)"
  ];
  //获取背景图片总数，生成随机数
  var bgindex =Math.floor(Math.random() * backimg.length);
  //重设背景图片
  document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];
  //随机banner数组,图片可以换成图床链接，注意最后一条后面不要有逗号
  var bannerimg =[
  //"url(/img/橘子.jpg)",
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/%E6%B8%A9%E9%A6%A8/wallhaven-jxjz9p.jpg)",
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/%E5%90%84%E7%A7%8D%E5%8A%A8%E6%BC%AB%E5%A3%81%E7%BA%B8/587e71fe-3272-446b-9a8a-d905781dd680.jpeg)",
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/%E6%B8%A9%E9%A6%A8/wallhaven-jxpj9m.jpg)",
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/%E6%B8%A9%E9%A6%A8/wallhaven-l8xo9l.jpg)",
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/blog_banner/wallhaven-r23jzm.jpg)",
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E9%AC%BC%E5%88%80/17_se.jpg)",
 "url(https://cdn.jsdelivr.net/gh/chuchendjs/picgo/picgo/pg4.png)",
//晚霞
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/blog_banner/wallhaven-3lv8j6.jpg)",
//YYDS_SPACE
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/%E5%90%84%E7%A7%8D%E5%8A%A8%E6%BC%AB%E5%A3%81%E7%BA%B8/btf8.png)",
//列车窗外
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E9%A3%8E%E6%99%AF/Snipaste_2024-09-24_14-44-57.png)",
//远山翠
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/blog_banner/Snipaste_2024-09-30_11-01-16.png)",
//雨后街道
 "url(https://wn.zznnwn.cloudns.biz/img/bg18.png)",
//蓝天女孩
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/blog_banner/bg13.png)",
// 柴犬 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/blog_banner/53e92cb72c4c4dd398e0ff1a11da859d~tplv-v4nquku3lp-image%20(1).png)",
//
// "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/blog_banner/0c2a5859fe57499e919b097420d113f4~tplv-13w3uml6bg-image.png)",
//雪地马路
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/blog_banner/Snipaste_2024-11-25_17-07-12.png)",
//绘画
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/blog_banner/wallhaven-85zwzk.png)",
//远山翠
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/blog_banner/Snipaste_2024-10-28_17-52-07.png)",
//简洁
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/blog_banner/Snipaste_2024-12-13_16-00-32.png)",
//蓝天花朵
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/blog_banner/Snipaste_2025-02-07_08-57-37.png)",
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/blog_banner/wallhaven-zy1pzy.jpg)",
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/blog_banner/wallhaven-l8e812.jpg)",
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/blog_banner/wallhaven-o5k319.jpg)",
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/blog_banner/wallhaven-85llm2.jpg)",
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/blog_banner/wallhaven-6dv6xq.jpg)",
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/blog_banner/wallhaven-6d9lr7.jpg)",
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/%E5%B0%8F%E6%B8%85%E6%96%B0/wallhaven-2ypz3x.png)",
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/%E5%B0%8F%E6%B8%85%E6%96%B0/wallhaven-d693wm.png)",
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/%E5%B0%8F%E6%B8%85%E6%96%B0/wallhaven-9d3zrk.png)",
 "url(https://onenote.zznnwn.cloudns.biz/api/raw/?path=/%E7%94%B5%E8%84%91%E5%A3%81%E7%BA%B8%F0%9F%8D%A1/%E5%8A%A8%E6%BC%AB/%E5%B0%8F%E6%B8%85%E6%96%B0/wallhaven-vmwm9l%20(1).png)"
  ];
  //获取banner图片总数,生成随机数
  var bannerindex =Math.floor(Math.random() * bannerimg.length);
  //重设banner图片
  document.getElementById("page-header").style.backgroundImage = bannerimg[bannerindex];
