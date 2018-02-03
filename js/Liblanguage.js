var $lang_choose;
var $lang_ul;
var $lang_choose_img;
var baseFlagsUrl = './flags';
var multilang;

var $MasterLanguage = {
	"vi" : {
		lbl_Login : 'Đăng nhập',
		lbl_UserName: 'Tài khoản',
		lbl_Password: 'Mật khẩu',
		lbl_ForgotPwd: 'Quên mật khẩu?',
		btn_Login : 'Đăng nhập',
		lbl_hello : 'Xin chào',
		auth_user_not_exists : "Tài khoản không tồn tại",
		auth_user_inactive : "Tài khoản đã bị khóa",
		auth_user_wrong_pass : "Sai mật khẩu",
		lbl_changePassTitle : "Đổi mật khẩu",
		lbl_OldPass : "Mật khẩu cũ",
		lbl_NewPass : "Mật khẩu mới",
		lbl_ReNewPass: "Nhập lại mật khẩu mới",
		btn_changePass : "Xác nhận"
	},
	"en" : {
		lbl_Login : 'Login',
		lbl_UserName: 'UserName',
		lbl_Password: 'Password',
		lbl_ForgotPwd: 'Forgot your password ?',
		btn_Login : 'Login',
		lbl_hello : 'Hello',
		auth_user_not_exists : "User not exists",
		auth_user_inactive : "Your account has been locked",
		auth_user_wrong_pass : "Wrong pass! Try again",
		lbl_changePassTitle : "Change your password",
		lbl_OldPass : "Old password",
		lbl_NewPass : "New password",
		lbl_ReNewPass: "Re-new password",
		btn_changePass : "Confirm"
	},
	"cn" : {
		lbl_Login : '登录',
		lbl_UserName: 'UserName',
		lbl_Password: 'Password',
		lbl_ForgotPwd: 'Forgot your password ?',
		btn_Login : 'Login',
		lbl_hello : 'Hello',
		auth_user_not_exists : "User not exists",
		auth_user_inactive : "Your account has been locked",
		auth_user_wrong_pass : "Wrong pass! Try again",
		lbl_changePassTitle : "Change your password",
		lbl_OldPass : "Old password",
		lbl_NewPass : "New password",
		lbl_ReNewPass: "Re-new password",
		btn_changePass : "Confirm"
	},
	"kr" :{
		lbl_Login : '로그인',
		lbl_UserName: 'UserName',
		lbl_Password: 'Password',
		lbl_ForgotPwd: 'Forgot your password ?',
		btn_Login : 'Login',
		lbl_hello : 'Hello',
		auth_user_not_exists : "User not exists",
		auth_user_inactive : "Your account has been locked",
		auth_user_wrong_pass : "Wrong pass! Try again",
		lbl_changePassTitle : "Change your password",
		lbl_OldPass : "Old password",
		lbl_NewPass : "New password",
		lbl_ReNewPass: "Re-new password",
		btn_changePass : "Confirm"
	},
	"jp" : {
		lbl_Login : 'ログイン',
		lbl_UserName: 'UserName',
		lbl_Password: 'Password',
		lbl_ForgotPwd: 'Forgot your password ?',
		btn_Login : 'Login',
		lbl_hello : 'Hello',
		auth_user_not_exists : "User not exists",
		auth_user_inactive : "Your account has been locked",
		auth_user_wrong_pass : "Wrong pass! Try again",
		lbl_changePassTitle : "Change your password",
		lbl_OldPass : "Old password",
		lbl_NewPass : "New password",
		lbl_ReNewPass: "Re-new password",
		btn_changePass : "Confirm"
	}
}
$currentMasterLanguage = $MasterLanguage[readCookie('Language') || 'vi'];
$(document).ready(function(){
	$lang_choose = $("#lang_choose");
	$lang_ul = $("#ul_lang");
	$lang_choose_img = $("#lang_choose_img");
});

function onShowLang(){
	if($lang_ul.css('display') != 'none')
	{
		$lang_ul.hide(200);
	}else {
		$lang_ul.show(200);
	}
}
// function onChangeLang(obj)
// {
// 	$(obj).find('img').each(function(){
// 		$lang_choose_img.attr('src',(baseFlagsUrl + '/' + $(obj).data().lang + '.png'));
// 	});
// 	$lang_ul.hide(200);
// 	multilang.setLanguage($(obj).data().lang);
// 	createCookie('Language',$(obj).data().lang,3000);
// 	refreshLabels();
// }
// function onLoad() {
// 	var lang = readCookie("Language") || "uk";
// 	multilang = new MultiLang('languages.json', lang, this.refreshLabels);
// 	$("#" + lang).trigger('click');
// }
// function initList() {			
// 	refreshLabels();
// }
// function refreshLabels() {
// 	var allnodes = document.body.getElementsByTagName("*");
// 	for (var i=0, max=allnodes.length; i < max; i++) {
// 		var idname = allnodes[i] !== undefined ? allnodes[i].id : '';
// 		if (idname != '' && idname.split('_')[0] == 'twlang') {
// 			allnodes[i].textContent = multilang.get(idname);
// 		};
// 	};
// }