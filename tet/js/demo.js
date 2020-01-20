var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined
        ? true
        : decodeURIComponent(sParameterName[1]);
    }
  }
};

$(document).ready(function() {
  var name = getUrlParameter('name');
  $('#fullname').text(name);
  var type = getUrlParameter('type');
  if (parseInt(type) > 0 && parseInt(type) <= 6) {
    var str = '';
    switch (parseInt(type)) {
      case 1:
        str =
          'Xuân này hơn hẳn mấy xuân qua. Phúc lộc đưa nhau đến từng nhà. Vài lời cung chúc tân niên mới. Vạn sự an khang vạn sự lành.';
        break;
      case 2:
        str =
          'Vạn sự như ý, tỉ sự như mơ, triệu triệu bất ngờ, không chờ cũng đến.';
        break;
      case 3:
        str =
          'Chúc mừng năm mới Canh Tý 2020. Chúc năm mới sức khỏe dẻo dai, công việc thuận lợi thăng tiến dài dài, phi những nước đại tiến tới thành công';
        break;
      case 4:
        str =
          'Chúc bạn 12 tháng phú quý, 365 ngày phát tài, 8760 giờ sung túc, 525600 phút thành công 31536000 giây vạn sự như ý.';
        break;
      case 5:
        str =
          'Chúc mừng năm mới. Chúc 365 ngày hạnh phúc, 52 tuần như ý, 12 tháng an vui, 8.760 giờ thoải mái, 52.600 phút may mắn và một năm mới an khang thịnh vượng – phát tài phát lộc.';
        break;
      case 6:
        str =
          'Năm hết tết đến kính chúc mọi người thật nhiều sức khoẻ, miệng cười vui vẻ, tiền vào mạnh mẽ, cái gì cũng được suôn sẻ, để sống tiếp một cuộc đời thật là đẹp đẽ.';
        break;

      default:
        break;
    } 
    $('#mess').text(str);
  }
});
