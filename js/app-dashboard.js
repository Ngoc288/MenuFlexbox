

var email = localStorage.getItem('email');
var token = localStorage.getItem('token');

// if(!email){
// 	window.location.href = "/login.html";
// }else{
// 	// dataUser = JSON.parse(dataUser);
//     //bind username
// 	$(".user-name p").text(email);
// }
document.querySelector('.user-name>p').innerHTML = localStorage.getItem('username');
function checkLogin() {
    if (email) {
		return true;
		// $(".user-name p").text(email);
    } else {
		// alert('Session Expired, Please login back !!!');
		
        logout();
    }
}
// checkLogin();
// logout 
function logout() {
	
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    window.open("../../index.html", "_self");
}

$(".logout-nav").click(function() {
    logout();
});
jQuery(document).ready(function($) {
	$('.menu-gumb-wrap').click(function () {
		$(this).toggleClass('open');
		$('body').toggleClass('no-scroll');
		$('#sidebar').toggleClass('menu-open');
	});

	$('.payment-method-wrap .block-invested-value').on('click', function () {
		$('.payment-method-wrap .block-invested-value.selected').removeClass('selected');
		var target = $(this).data('show-block');
		$(this).addClass('selected');
		$('.buy-panel').fadeOut();
		$(target).fadeIn();
		$('html,body').animate({scrollTop: $(target).offset().top - 100});
	});

	$('.buy-panel .btn-close').on('click', function(){
		var target = $(this).parent().parent();
		var id = $(target).attr('id');
		$(target).fadeOut();
		$('.payment-method-wrap .block-invested-value[data-show-block="#'+id+'"]').removeClass('selected');

	});

	$('.pay-panel .btn-close').on('click', function(){
		var target = $(this).parent().parent();
		var id = $(target).attr('id');
		$(target).hide();
		$('.payment-method-wrap .block-invested-value.selected').removeClass('selected');
		$('.payment-method-wrap').fadeIn();

	});

	$('.buy-panel .btn-contribute').on('click', function(){
		var target = $(this).data('pay-target');
		$('.payment-method-wrap').hide();
		$('.buy-panel').hide();
		$(target).fadeIn();
		$('html,body').animate({scrollTop: $(target).offset().top - 100});
		return false;
	});

	$('.btn-user-nav').click(function () {
		$('.fa-angle-down').toggleClass('rotate-up');
		$('.user-dropdown').toggleClass('dropdown-open');
	});
 $('#checked01').click(function(){
        $('#checked02').prop('checked',false)
        $('#checked03').prop('checked',false)
    })
    $('#checked02').click(function(){
        $('#checked01').prop('checked',false)
        $('#checked03').prop('checked',false)
    })
    $('#checked03').click(function(){
        $('#checked02').prop('checked',false)
        $('#checked01').prop('checked',false)
    })
});