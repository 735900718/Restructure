/**
 * 3.31更新
 */
/*注册条件*/
function checkval(obj){
	var name   = obj.name;
	var val    = obj.val;
	var val2   = obj.val2;
	var reg    = null || obj.reg;
	var regErr = null || obj.regErr;
	switch(name){
		case "手机":
			reg = reg || /^(((1[0-9]{2}))+\d{8})$/;
			if (val == "") {
				return "请填写您的手机号";
			}else if (!val.match(reg)) {
				return regErr || "您的手机号输入有误";
			}else{
				return true;
			}
		case "姓名":
			reg = reg || /^([\u4e00-\u9fa5]){1,6}}$/;
			if (val == "") {
				return "请输入姓名";
			}else if (!val.match(reg)){
				return regErr || "请输入1~6位以内的中文姓名";
			}else{
				return true;
			}
		case "密码":
			reg = reg || /^[0-9a-zA-Z]{5,15}$/
			if (val == "") {
				return "请输入密码";
			}else if(!val.match(reg)){
				return regErr || "请填写5到15位密码";
			}else if (val != val2) {
				return "两次密码不一致";
			}else{
				return true;
			}
		case "邮箱":
			reg = reg || /\w+[@]{1}\w+[.]\w+/;
			if (val == '') {
				return "请填写您的邮箱";
			}else if (!val.match(reg)) {
				return regErr || "邮箱格式不正确";
			}else{
				return true;
			}
		case "身份证":
			reg = reg || /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
			if (val == "") {
				return "请填写身份证";
			}else if (!val.match(reg)) {
				return regErr || "身份证格式不正确";
			}else{
				return true;
			}
		default:
			if (val == "") {
				return "此项必填";
			}else if ( reg ){
				if (!val.match(reg)) {
					return regErr || "填写格式不正确";
				}else {
					return true;
				}
			}else{
				return true;
			}
	}
}

function checkthis() {
	var obj = {}
  obj.name = $(this).data('checkval');
  if (obj.name == '密码' || obj.name == '再次密码') {
    obj.val = $('[data-checkval="密码"]').val();
    obj.val2 = $('[data-checkval="再次密码"]').val();
  } else {
    obj.val = $(this).val();
  }
  if(checkval(obj) !== true) {
    if (obj.name == '密码' || obj.name == '再次密码') {
      $('[data-checkval="密码"]').css('border-color','#d0021b');
      $('[data-checkval="再次密码"]').css('border-color','#d0021b');
    } else {
      $(this).css('border-color','#d0021b')
    }
  }else {
    if (obj.name == '密码' || obj.name == '再次密码') {
      $('[data-checkval="密码"]').css('border-color','#d6d7dc');
      $('[data-checkval="再次密码"]').css('border-color','#d6d7dc');
    } else {
      $(this).css('border-color','#d6d7dc')
    }
  }
}
//使用方法：
// input 添加data-checkval='手机'属性
// $('[data-checkval]').blur(checkthis)
