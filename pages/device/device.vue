<template>
	<view>
		<PowerDeviceMonitor v-for="(device, index) in devices" :key="index" :deviceName="device.deviceName"
			:current="device.current" :voltage="device.voltage" :status="device.status" />
	</view>
</template>

<script>
	import PowerDeviceMonitor from '@/components/DeviceStatus.vue';

	export default {
		components: {
			PowerDeviceMonitor
		},
		data() {
			return {
				devices: [{
						deviceName: '发电机',
						current: 20,
						voltage: 380,
						status: '正常'
					},
					{
						deviceName: '变压器',
						current: 18,
						voltage: 220,
						status: '维修中'
					},
					{
						deviceName: '电动机',
						current: 30,
						voltage: 380,
						status: '故障'
					}
				]
			};
		},
		methods: {

		}
	}
</script>

<style>
	/* 样式 */
</style>
