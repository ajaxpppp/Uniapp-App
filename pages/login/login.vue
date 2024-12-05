<template>
	<view class="container">
		<!-- 页面标题 -->

		<!-- 登录区域 -->
		<view class="login-form">

			<view class="title">
				<text class="title-text">智能电力</text>
			</view>
			<!-- 用户名输入框 -->
			<input v-model="username" class="input" placeholder="请输入用户名" />

			<!-- 密码输入框 -->
			<input v-model="password" type="password" class="input" placeholder="请输入密码" />

			<!-- 登录按钮 -->
			<button class="login-btn" @click="login">登录</button>

			<!-- 注册超链接 -->
			<view class="register-link">
				<text @click="register" class="register-text">没有账号？点击注册</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: '', // 用户名
				password: '', // 密码
			};
		},
		methods: {
			// 登录操作
			login() {
				// 获取本地存储的用户名和密码
				uni.getStorage({
					key: 'username',
					success: (res) => {
						const storedUsername = res.data; // 获取存储的用户名
						// 如果用户名匹配
						if (this.username === storedUsername) {
							// 获取存储的密码
							uni.getStorage({
								key: 'password',
								success: (res) => {
									const storedPassword = res.data; // 获取存储的密码
									// 如果密码匹配
									if (this.password === storedPassword) {
										uni.showToast({
											title: '登录成功',
											icon: 'success'
										});
										// 跳转到首页
										setTimeout(() => {
										  uni.switchTab({
										    url: '/pages/index/index'
										  });
										}, 1000);
										
									} else {
										uni.showToast({
											title: '密码错误',
											icon: 'none'
										});
									}
								},
								fail: () => {
									uni.showToast({
										title: '密码错误',
										icon: 'none'
									});
								}
							});
						} else {
							uni.showToast({
								title: '用户不存在',
								icon: 'none'
							});
						}
					},
					fail: () => {
						uni.showToast({
							title: '用户不存在',
							icon: 'none'
						});
					}
				});
			},

			// 注册操作
			register() {
				uni.navigateTo({
					url: '/pages/register/register'
				});
			}
		}
	};
</script>

<style scoped>
	.container {
		padding: 30px;
		height: 70vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.title {
		font-size: 30px;
		font-weight: bold;
		color: #4caf50;
		margin-bottom: 20px;
		text-align: center;
	}

	.title-text {
		font-size: 32px;
		font-weight: bold;
		text-align: center;
	}

	.login-form {
		width: 100%;
		max-width: 350px;
		background-color: #e1fdff;
		padding: 25px;
		border-radius: 10px;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
	}

	.input {
		width: 90%;
		padding: 12px;
		font-size: 16px;
		border: 1px solid #ccc;
		border-radius: 5px;
		margin-bottom: 20px;
	}

	.login-btn {
		width: 50%;
		padding: 10px;
		font-size: 16px;
		border-radius: 25px;
		border: none;
		background-color: #4caf50;
		color: white;
		margin-top: 10px;
	}

	.login-btn:active {
		opacity: 0.8;
	}

	.register-link {
		text-align: center;
		margin-top: 15px;
	}

	.register-text {
		font-size: 14px;
		color: #007bff;
		cursor: pointer;
		text-decoration: underline;
	}

	.register-text:hover {
		color: #0056b3;
	}
</style>
