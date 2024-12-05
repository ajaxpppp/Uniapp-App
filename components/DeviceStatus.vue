<template>
	<view class="power-device-monitor">
		<view class="device-header">
			<text class="device-name">{{ deviceName }}</text>
			<text class="device-status">{{ status }}</text>
		</view>

		<view class="device-info">
			<view class="info-item">
				<text class="label">电流：</text>
				<text class="value">{{ current }} A</text>
			</view>
			<view class="info-item">
				<text class="label">电压：</text>
				<text class="value">{{ voltage }} V</text>
			</view>
			<view class="info-item">
				<text class="label">负载：</text>
				<text class="value">{{ load }} %</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'PowerDeviceMonitor',
		props: {
			deviceName: {
				type: String,
				default: '变压器'
			},
			current: {
				type: Number,
				default: 12
			},
			voltage: {
				type: Number,
				default: 220
			},
			load: {
				type: Number,
				default: 30
			},
			status: {
				type: String,
				default: '正常'
			}
		}
	}
</script>

<style scoped>
	.power-device-monitor {
		border: 1px solid #ccc;
		border-radius: 10px;
		padding: 20px;
		background-color: #f5f5f5;
		margin: 10px;
	}

	.device-header {
		display: flex;
		justify-content: space-between;
		margin-bottom: 10px;
	}

	.device-name {
		font-size: 18px;
		font-weight: bold;
	}

	.device-status {
		font-size: 16px;
		color: #2c3e50;
	}

	.device-info {
		display: flex;
		flex-direction: column;
	}

	.info-item {
		margin-bottom: 8px;
	}

	.label {
		font-weight: 600;
	}

	.value {
		font-size: 16px;
	}
</style>
