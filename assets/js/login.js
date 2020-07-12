$(() => {
	// 登陆注册切换功能
	$(".toggle").click(function() {
		$(".register").toggle()
		$(".login").toggle()
	})

	//注册
	$(".go-regiter").click(function() {
		if ($(".password").val() !== $(".ispassword").val()) {
			return alert("2次密码不一致")
		}
		YesNo($(".password").val())
		
		let obj = {
			username:$(".username").val(),
			password:$(".password").val()
		}
		let url = "http://wujiahongnihao.cn/register"
		req(url,JSON.stringify(obj)).then(res=>{
			console.log(res)
		})
	})
	//登陆
	$(".go-login").click(function() {
		YesNo($(".login-password").val())
		let url = "http://wujiahongnihao.cn/login"
		let obj = {
			username:$(".login-username").val(),
			password:$(".login-password").val()
		}
		req(url,JSON.stringify(obj)).then(res=>{
			console.log(res)
		})
	})
})
//账号与密码验证
function YesNo(password) {
	// const isusername = /^[0-9a-zA-Z]{6,18}$/
	const isspassword = /^[0-9a-zA-Z_!@#$/]{6,18}$/
	// if (!isusername.test(username)) {
	// 	return alert("请入6-18位的数字与字母的账号")
	// } else if (!isspassword.test(password)) {
	// 	return alert("请输入请入6-18位密码")
	// }
	if (!isspassword.test(password)) {
		return alert("请输入请入6-18位密码")
	}
}
