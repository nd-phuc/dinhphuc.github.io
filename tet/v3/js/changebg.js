var num;
var temp=0;
var speed=7000; /* this is set for 5 seconds, edit value to suit requirements */
var preloads=[];
/* add any number of images here */
preload(
'https://c1.staticflickr.com/5/4694/26394705498_6d1204f4c4_b.jpg',
'https://c2.staticflickr.com/2/1703/24711195182_e14c1ba73a_b.jpg',
'https://c1.staticflickr.com/1/645/32021613191_08416cb4c5_b.jpg',
'https://c1.staticflickr.com/5/4744/38502913040_e7e5246252_b.jpg',
'https://c1.staticflickr.com/5/4701/24816158397_5966601fd2_b.jpg',
'https://c1.staticflickr.com/5/4629/40067469212_5f7b7c779f_b.jpg',
'https://c1.staticflickr.com/5/4637/25664455868_804fee27ee_b.jpg',
'http://anhdepbonphuong.com/wp-content/uploads/2016/01/10-hinh-girl-xinh-chup-anh-tet-nhin-da-me-9.jpg',
'http://channel.mediacdn.vn/prupload/879/2018/01/img20180131170935263.jpg',
'https://c1.staticflickr.com/1/462/32263447781_fe85071516_b.jpg',
'https://znews-photo.zadn.vn/w660/Uploaded/oqivovbv/2016_12_27/vietnam1482749711.jpg',
'http://imageshack.com/a/img922/434/g2fouw.jpg',
'http://imageshack.com/a/img922/9454/iSV1w8.jpg'
);
function preload(){
for(var c=0;c<arguments.length;c++) {
preloads[preloads.length]=new Image();
preloads[preloads.length-1].src=arguments[c];
}
}
function rotateImages() {
num=Math.floor(Math.random()*preloads.length);
if(num==temp){
rotateImages();
}
else{
document.body.style.backgroundImage='url('+preloads[num].src+')';
temp=num;
setTimeout(function(){rotateImages()},speed);
}
}

if(window.addEventListener){
window.addEventListener('load',function(){setTimeout(function(){rotateImages()},speed)},false);
}
else {
if(window.attachEvent){
window.attachEvent('onload',function(){setTimeout(function(){rotateImages()},speed)});
}
}