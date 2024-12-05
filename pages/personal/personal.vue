<template>
	<view class="container">
		<!-- 个人信息部分 -->
		<view class="user-info">
			<image class="avatar" src="/static/logo.png" />
			<view class="user-details">
				<text class="user-name">{{ userInfo.nickName || '未设置昵称' }}</text>
				<!-- <text class="user-phone">{{ userInfo.phone }}</text> -->
			</view>
		</view>

		<!-- 选项卡部分 -->
		<view class="tab-container">
			<view class="tab-item" :class="{'active': selectedTab === 'tab1'}" @click="selectTab('tab1')">个人信息</view>
			<view class="tab-item" :class="{'active': selectedTab === 'tab2'}" @click="selectTab('tab2')">任务管理</view>
			<view class="tab-item" :class="{'active': selectedTab === 'tab3'}" @click="selectTab('tab3')">设备管理</view>
		</view>

		<!-- 内容展示 -->
		<view class="content">
			<view v-if="selectedTab === 'tab1'">
				<text>个人信息内容</text>
			</view>
			<view v-if="selectedTab === 'tab2'">
				<text>任务管理内容</text>
			</view>
			<view v-if="selectedTab === 'tab3'">
				<text>设备管理内容</text>
			</view>
		</view>

		<view style="height: 20px;"></view>
		<!-- 常用操作部分 -->
		<view class="action-list">
			<view class="action-item" @click="navigateTo('settings')">
				<text>设置</text>
			</view>
			<view class="action-item" @click="navigateTo('notifications')">
				<text>消息通知</text>
			</view>
			<view class="action-item" @click="navigateTo('help')">
				<text>帮助与反馈</text>
			</view>
		</view>

		<!-- 退出登录 -->
		<view class="logout">
			<button class="logout-btn" @click="logout">退出登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				selectedTab: 'tab1', // 默认选中选项卡
				userInfo: {
					avatarUrl: '../../static/default-avatar.png', // 用户头像
					nickName: '', // 用户昵称
					phone: '138****1234' // 用户手机号
				}
			};
		},
		created() {
			// 获取存储的用户信息
			uni.getStorage({
				key: 'username',
				success: (res) => {
					this.userInfo.nickName = res.data || '未设置昵称'; // 设置用户名或默认值
				},
				fail: () => {
					console.log('未找到用户名');
				}
			});

			// 获取头像信息（如有需要可以从本地存储或后台获取）
			uni.getStorage({
				key: 'avatarUrl',
				success: (res) => {
					this.userInfo.avatarUrl = res.data || '../../static/default-avatar.png'; // 设置头像，若没有则用默认头像
				}
			});

			// 获取手机号（如有需要可以从本地存储或后台获取）
			uni.getStorage({
				key: 'phone',
				success: (res) => {
					this.userInfo.phone = res.data || '138****1234'; // 设置手机号，若没有则用默认手机号
				}
			});
		},
		methods: {
			// 切换选项卡
			selectTab(tab) {
				this.selectedTab = tab;
			},
			// 跳转到其他页面
			navigateTo(page) {
				uni.navigateTo({
					url: `/pages/${page}/${page}`
				});
			},
			// 退出登录
			logout() {
				console.log('用户已退出');
				// 清除本地存储的登录信息
				uni.removeStorage({
					key: 'username'
				});
				uni.removeStorage({
					key: 'password'
				});
				uni.removeStorage({
					key: 'phone'
				});
				// 跳转到登录页
				uni.navigateTo({
					url: '/pages/login/login'
				});
			}
		}
	};
</script>

<style scoped>
	.container {
		padding: 20px;
		background-color: #f7f8fa;
	}

	/* 用户信息部分 */
	.user-info {
		display: flex;
		align-items: center;
		margin-bottom: 20px;
	}

	.avatar {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		margin-right: 15px;
	}

	.user-details {
		display: flex;
		flex-direction: column;
	}

	.user-name {
		font-size: 18px;
		font-weight: bold;
	}

	.user-phone {
		font-size: 14px;
		color: #888;
	}

	/* 选项卡容器 */
	.tab-container {
		display: flex;
		justify-content: space-between;
		margin: 0;
		padding: 0;
	}

	/* 选项卡 */
	.tab-item {
		flex: 1;
		text-align: center;
		padding: 12px 0;
		font-size: 16px;
		background-color: #f0f0f0;
		border: 1px solid #ccc;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	/* 选项卡active效果 */
	.tab-item.active {
		background-color: #388e3c;
		color: white;
	}

	/* 选项卡hover效果 */
	.tab-item:hover {
		background-color: #ddd;
	}

	/* 内容部分 */
	.content {
		padding: 20px;
		background-color: #ffffff;
		border-top: 1px solid #ccc;
		margin-top: 10px;
		font-size: 16px;
		color: #333;
	}

	/* 常用操作部分 */
	.action-list {
		margin-bottom: 30px;
	}

	.action-item {
		background-color: #fff;
		padding: 20px;
		border-radius: 10px;
		margin-bottom: 25px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
		font-size: 16px;
		color: #333;
		display: flex;
		align-items: center;
	}

	.action-item:hover {
		background-color: #f5f5f5;
	}

	/* 退出登录部分 */
	.logout {
		display: flex;
		justify-content: center;
		margin-top: 25px;
	}

	.logout-btn {
		background-color: #e74c3c;
		color: white;
		padding: 12px 20px;
		border: none;
		border-radius: 25px;
		font-size: 16px;
	}

	.logout-btn:hover {
		background-color: #c0392b;
	}
</style>
