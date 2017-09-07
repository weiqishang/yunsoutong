$(function  () {
	$('.searchul_left li').each(function  (i) {
		$(this).click(function  () {
			$(this).addClass('active').siblings().removeClass('active')
			$('.searconmain_con div').eq(i).addClass('active').siblings().removeClass('active')
		})
	})
	
	//---------------客户管理页
	//---查看更多
	$('.prodetmore').click(function  () {
		$(this).siblings('.prodetcon').css({'overflow':'visible','height':'auto',"line-height":'18px','white-space':'inherit'})
		$(this).hide()
	})
	//查看更多是否显示

//	$('.list_con .evelist .evelist_l .prodet .prodetcon').each(function  (i) {
//		if ($('.list_con .evelist .evelist_l .prodet .prodetcon').eq(i).width() >= "530") {
//			$('.list_con .evelist .evelist_l .prodet .prodetcon').width()
//			$(this).siblings('.prodetmore').show()
//		}else{
//			$(this).siblings('.prodetmore').hide()
//		}
//	})
//	
	
	
	$('.lab_all_r ul li').click(function  () {
		if($(this).hasClass('active')){
            $(this).removeClass('active')
        }else{
            $(this).addClass('active')
        }
	})
	$('.proadd span').click(function  () {
		$(this).siblings('textarea').show()
		$(this).siblings('textarea').focus()
		$(this).hide()
	})
	$('.proadd textarea').blur(function  () {
		var areatex = $(this).val()
		if (areatex == "") {
			$(this).hide()
			$(this).siblings('span').text('添加备注')
			$(this).siblings('span').prepend("<i class='iconfont icon-add'></i>")
			$(this).siblings('span').show()
		}else{
			$(this).hide()
			$(this).siblings('span').children('i').hide()
			$(this).siblings('span').text(areatex)
			$(this).siblings('span').show()
		}
	})
	
	$('.click_deatail ul li').each(function  (i) {
		$(this).click(function  (e) {
			e.stopPropagation();
			$(this).addClass('active').siblings().removeClass('active')
			$('.click_change div').eq(i).addClass('active').siblings().removeClass('active')
		})
	})
	$(document).click(function  (e) {
		$('.click_deatail').hide()
		$('.evelist .evelist_l .prourl .icon-jiantouxia span').hide()
	})
	$('.showmore').click(function  (e) {
		e.stopPropagation();
		$(this).parents('.medseal').siblings('.click_deatail').show()
	})
	
	//全选
	var allLength = $('.retchoose').length;
	$('.retchoose').each(function() {
		$(this).bind('click', function() {
			var selectedLength = $('.retchoose:checked').length;
			if(selectedLength == allLength) {
				$('.quanbox').prop("checked", true);
			} else {
				$('.quanbox').prop("checked", false);
			}
		})
	})
	$('.quanbox').click(function() {
		if($(this).is(":checked")) {
			$('.retchoose').prop("checked", true);
		} else {
			$('.retchoose').prop("checked", false);
		}
	});
	
	
	//--弹窗选择
	 $('.changlabel li').click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active')
        }else{
            $(this).addClass('active')
        }
    });
	$('.evelist .evelist_l .prourl .icon-jiantouxia').click(function  (e) {
		e.stopPropagation();
		$(this).children('span').show()
	})
	
	//批量搜索
	 $(".med_batch .batch_main .eve_batch .icon-tianjia").click(function(){

        if($(".batch_main .eve_batch").length>=10){
           layer.msg('最多添加十个输入框');
        }else{
        $('.batch_main').append(
        	'<div class="eve_batch clearFloat"><input type="text" name="" id="" placeholder="请输入关键词"/><i class="iconfont icon-minus"></i></div>')
        }
    })
      $('.med_batch .batch_main').on('click','.eve_batch .icon-minus',function  () {
    	 $(this).parents('.eve_batch').remove()
    })
	//历史搜索删除
	$('.hisdel').click(function  () {
		$(this).parents('.eve_his').remove()
	})
	
	
	
	
	
})