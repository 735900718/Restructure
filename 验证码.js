//验证码功能重构
function yanzhengma() {
  var _this = this;
  if ($(_this).hasClass('not')) return;
  var _time = 5;      //再次获取验证码等待时长
  var html = $(_this).html();
  $(_this).html(_time +'S后再次发送').addClass('not');
  var timer = setInterval(function() {
    _time--;
    $(_this).html(_time +'S后再次发送');
    if (_time <= 0) {
      clearInterval(timer);
      $(_this).html(html);
      $(_this).removeClass('not');
    }
  },1000);
}

//使用方法：
// $('.yanzhengma').click(yanzhengma)
