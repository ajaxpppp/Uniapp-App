<template>
	<view class="container">
		<!-- 页面标题 -->

		<!-- 注册区域 -->
		<view class="register-form">

			<view class="title">
				<text class="title-text">智能电力</text>
			</view>
			<!-- 用户名输入框 -->
			<input v-model="username" class="input" placeholder="请输入用户名" />

			<!-- 密码输入框 -->
			<input v-model="password" type="password" class="input" placeholder="请输入密码" />

			<!-- 确认密码输入框 -->
			<input v-model="confirmPassword" type="password" class="input" placeholder="请确认密码" />

			<!-- 注册按钮 -->
			<button class="register-btn" @click="register">注册</button>

			<!-- 登录超链接 -->
			<view class="login-link">
				<text @click="goToLogin" class="login-text">已有账号？点击登录</text>
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
				confirmPassword: '' // 确认密码
			};
		},
		methods: {
			// 注册操作
			register() {
				// 校验用户名、密码和确认密码是否一致
				if (this.username && this.password && this.confirmPassword) {
					if (this.password !== this.confirmPassword) {
						uni.showToast({
							title: '密码不一致',
							icon: 'none'
						});
						return;
					}
					// 存储用户名和密码到本地
					uni.setStorage({
						key: 'username',
						data: this.username,
						success: () => {
							uni.setStorage({
								key: 'password',
								data: this.password,
								success: () => {
									uni.showToast({
										title: '注册成功',
										icon: 'success'
									});
									// 跳转到登录页
									uni.navigateTo({
										url: '/pages/login/login'
									});
								}
							});
						}
					});
				} else {
					uni.showToast({
						title: '请输入完整的注册信息',
						icon: 'none'
					});
				}
			},
			
			// 跳转到登录页
			goToLogin() {
				uni.navigateTo({
					url: '/pages/login/login'
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

	.register-form {
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

	.register-btn {
		width: 50%;
		padding: 10px;
		font-size: 16px;
		border-radius: 25px;
		border: none;
		background-color: #4caf50;
		color: white;
		margin-top: 10px;
	}

	.register-btn:active {
		opacity: 0.8;
	}

	.login-link {
		text-align: center;
		margin-top: 15px;
	}

	.login-text {
		font-size: 14px;
		color: #007bff;
		cursor: pointer;
		text-decoration: underline;
	}

	.login-text:hover {
		color: #0056b3;
	}
</style>
