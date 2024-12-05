<template>
	<view class="container">
		<!-- 顶部导航栏 -->
		<!-- 轮播图 -->
		<swiper class="swiper" circular indicator-dots="true">
			<swiper-item v-for="(item, index) in imgs" :key="index">
				<view class="swiper-item">
					<image :src="item" class="swiper-image" style="borderRadius: 5%;" mode="aspectFill" />
				</view>
			</swiper-item>
		</swiper>

		<!-- 宫格布局 -->
		<h4>快捷入口</h4>
		<view style="height: 10px;"></view>
		<view class="grid-layout">
			<view class="grid-item" v-for="(item, index) in gridItems" :key="index" @click="viewTasks(item.title)">
				<text class="grid-text">{{ item.title }}</text>
			</view>
		</view>
		<view style="height: 10px;"></view>

		<!-- 咨询部分 -->
		<view class="consult-section">
			<text class="consult-title">咨询帮助</text>
			<view class="consult-content">
				<text>如何管理设备？</text>
				<text>设备故障排除</text>
				<text>如何提交任务？</text>
			</view>
		</view>
		<view style="height: 10px;"></view>

		<!-- 快捷操作按钮 -->
		<view class="quick-actions">
			<button class="action-button" @click="viewTasks('添加设备')">添加设备</button>

			<button class="action-button" @click="viewTasks('查看任务')">查看任务</button>
			<button class="action-button" @click="viewTasks('提交反馈')">提交反馈</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchQuery: "",
				imgs: [
					'../../static/swiper/1.jpg',
					'../../static/swiper/2.jpg',
					'../../static/swiper/3.jpg'
				],
				gridItems: [{
						image: '../../static/grid1.jpg',
						title: '设备管理'
					},
					{
						image: '../../static/grid2.jpg',
						title: '任务中心'
					},
					{
						image: '../../static/grid3.jpg',
						title: '设备状态'
					},
					{
						image: '../../static/grid4.jpg',
						title: '历史记录'
					},
				]
			};
		},
		methods: {
			// 搜索设备
			searchDevice() {
				console.log('搜索设备:', this.searchQuery);
				// 执行搜索逻辑
			},
			// 跳转到其他页面
			goToPage(page) {
				uni.navigateTo({
					url: `/pages/${page}/${page}`
				});
			},
			// 添加设备
			addDevice() {
				uni.navigateTo({
					url: '/pages/deviceAdd/deviceAdd'
				});
			},
			// 查看任务
			viewTasks(title) {
				console.log(title)
				uni.navigateTo({
					url: `/pages/index/detail/detail?title=${encodeURIComponent(title)}` // 使用查询参数传递 title
				});
			},
			// 提交反馈
			submitFeedback() {
				uni.navigateTo({
					url: '/pages/feedback/feedback'
				});
			}
		}
	};
</script>

<style scoped>
	.container {
		padding: 20px;
		background-color: #f7f8fa;
		height: 80vh;
	}

	/* 顶部导航栏 */
	.navbar {
		display: flex;
		justify-content: space-around;
		background-color: #4caf50;
		padding: 10px;
		border-radius: 10px;
	}

	.nav-item {
		color: white;
		font-size: 16px;
		cursor: pointer;
	}



	/* 轮播图样式 */
	.swiper {
		margin-bottom: 20px;
	}

	.swiper-item {
		position: relative;
	}

	.swiper-image {
		width: 100%;
		height: 180px;
		object-fit: cover;
	}

	/* 宫格布局 */
	.grid-layout {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 10px;
		margin-bottom: 20px;
	}

	.grid-item {
		background-color: #fff;
		border-radius: 10px;
		overflow: hidden;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
		padding: 10px;
		text-align: center;
	}

	.grid-image {
		width: 100%;
		height: 100px;
		object-fit: cover;
		border-radius: 8px;
	}

	.grid-text {
		margin-top: 10px;
		font-size: 14px;
		color: #333;
	}

	/* 咨询部分 */
	.consult-section {
		background-color: #fff;
		padding: 15px;
		border-radius: 10px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	}

	.consult-title {
		font-size: 18px;
		font-weight: bold;
		margin-bottom: 10px;
	}

	.consult-content {
		font-size: 14px;
		color: #555;
	}

	.consult-content text {
		display: block;
		margin-top: 8px;
		cursor: pointer;
	}

	/* 快捷操作按钮 */
	.quick-actions {
		display: flex;
		justify-content: space-between;
		/* 按钮之间的间隔平均分配 */
		margin-top: 20px;
	}

	.action-button {
		padding: 12px;
		background: linear-gradient(to right, #4CAF50, #388E3C);
		/* 渐变色 */
		color: white;
		border: none;
		border-radius: 8px;
		width: 32%;
		/* 按钮宽度占容器的32% */
		font-size: 16px;
		font-weight: bold;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		/* 阴影效果 */
		transition: all 0.3s ease-in-out;
		/* 按钮过渡效果 */
		transform: scale(1);
		/* 默认状态 */
	}

	.action-button:hover {
		background: linear-gradient(to right, #388E3C, #4CAF50);
		/* 悬停时反转渐变色 */
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
		/* 增强阴影效果 */
		transform: translateY(-3px) scale(1.05);
		/* 放大效果 */
	}

	.action-button:active {
		transform: translateY(0);
		/* 点击时恢复原位 */
	}
</style>
