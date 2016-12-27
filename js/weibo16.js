
/*
功能如下
1, 统计还剩的字数, 用 length 求, 不管中英文
3.输入时提醒剩余字数
2, 超过 140 字的时候就不能输入了
3, 点击 提交 按钮会在下方的消息区的顶部增加一条消息

头像和名字可以指定默认的
*/
console.log('start');

//计算字符变化
var wordChange = function() {
	$('#jen-input').on('input', function(){
		var words = document.querySelector('#jen-input').value
		$('span').text(140-words.length)
	})
}


//不超过140个字,否则提醒。
var condition = function() {
	var input = document.querySelector('#jen-input')
	var words = input.value
	if(words.length > 140) {
		return false
	}
	return true
}

//实现添加功能
var addComment = function(userName, image) {
	$('.jen-button').on('click', function() {
		var input = document.querySelector('#jen-input')
		var words = input.value
		//时间更新
		var d = new Date()
		var date = ((d.getMonth()+1)+'月'+d.getDate()+'日')
		if(condition() === true) {
			var t =`
					<div class="comment">
						<img class="jen-img" src=${image} alt="头像" />
						<p class="user">
							${userName}:  ${words}
							<time>${date}</time>
						</p>
					</div>
					`
			$('.comments').append(t)
			//console.log('words',words)
			//清空文本框
			document.querySelector('#jen-input').value = ""
			//还原字数140
			$('span').text(140)
		}
	})
}

var _main = function() {
	addComment('僵尸粉','images/猫1.jpg')
	condition()
	wordChange()
}
_main()
