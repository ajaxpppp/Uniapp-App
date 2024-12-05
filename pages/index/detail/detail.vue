<template>
	<view class="container">
		这是{{this.title}}页面
	</view>
</template>

<script>
	export default {
		data(){
			title:""
		},
		onLoad(options) {
			console.log(options); // 确保 title 能正确传递
			this.title = decodeURIComponent(options.title);
			uni.setNavigationBarTitle({
				title:this.title+"页面"
			})
			console.log(title); // 打印查看传递的 title
		}
	}  // 删除了多余的逗号
</script>

<style scoped>

</style>
