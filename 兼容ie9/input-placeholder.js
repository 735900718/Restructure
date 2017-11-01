//根据Input是否有placeholder属性，添加方法
if (!('placeholder' in document.createElement('input'))) {
  (function() {
    //这里偷懒，直接用了jquery的方法，修改成原生也很简单，就不改了
    var $placeholder = $('[placeholder]')
    $.each($placeholder, function(key, val) {
      val.value = val.attributes['placeholder'].value
      val.onfocus = function() {
        //这个判断有个弊端，就是用户填写不能与placeholder一致，感觉无伤大雅。。因为一般也不会让输入placeholder的内容的吧。。。
        if (val.value === val.attributes['placeholder'].value) {
          val.value = ''
        }
      }
      val.onblur = function() {
        if (val.value === '') {
          val.value = val.attributes['placeholder'].value
        }
      }
    })
  })();
}
