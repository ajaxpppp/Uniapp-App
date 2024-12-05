<template>
  <view class="container">
    <!-- 标题 -->
    <view class="header">
      <text class="title">电力网点查询系统</text>
    </view>

    <!-- 用户输入ID或网点名进行查询 -->
    <view class="search">
      <input class="search-input" v-model="searchQuery" placeholder="请输入网点ID或名称..." />
      <button class="search-button" @click="search">查询</button>
    </view>

    <!-- 查询结果展示 -->
    <view class="result" v-if="searchResult.length > 0">
      <view v-for="(center, index) in searchResult" :key="index">
        <view class="result-item">网点ID: <text class="highlight">{{ center.id }}</text></view>
        <view class="result-item">网点名称: <text class="highlight">{{ center.网点名 }}</text></view>
      </view>
    </view>
    
    <!-- 没有找到的情况 -->
    <view class="no-result" v-else-if="searchQuery && searchResult.length === 0">
      <text class="no-result-text">未找到相关网点，请检查输入信息</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "", // 用户的查询输入
      searchResult: [], // 查询结果
      allCenters: [] // 所有网点信息
    };
  },
  mounted() {
    // 加载电力网点数据
    this.loadCentersData();
  },
  methods: {
    // 加载电力网点数据
    loadCentersData() {
      const cityData = require('@/data/service.json'); // 确保路径正确
      this.allCenters = cityData; // 将数据存储到 allCenters 中
    },

    // 根据用户输入查询网点
    search() {
      const query = this.searchQuery.trim();
      if (!query) {
        // 如果查询为空，展示所有网点
        this.searchResult = this.allCenters;
        return;
      }

      // 如果输入的是ID
      if (/^\d{3}$/.test(query)) {
        this.searchResult = this.allCenters.filter(center => center.id === query);
      }
      // 如果输入的是网点名称
      else {
        this.searchResult = this.allCenters.filter(center => center.网点名.includes(query));
      }
    }
  }
};
</script>

<style scoped>
/* 主容器样式 */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  min-height: 100vh;
}

/* 标题样式 */
.header {
  margin-bottom: 30px;
}
.title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

/* 搜索框样式 */
.search {
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 500px;
  justify-content: space-between;
  align-items: center;
}
.search-input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  font-size: 16px;
  text-align: center; /* 居中文本 */
}
.search-button {
  height: 40px;
  padding: 0 20px;
  background-color: #007aff;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  text-align: center; /* 居中文本 */
  line-height: 40px; /* 垂直居中 */
  width: 80px; /* 设置按钮宽度与输入框一致 */
}
.search-button:active {
  background-color: #005bb5;
}

/* 查询结果样式 */
.result {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #fff;
  margin-top: 20px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 500px;
}
.result-item {
  font-size: 18px;
  margin-bottom: 10px;
}
.highlight {
  font-weight: bold;
  color: #007aff;
}

/* 未找到结果提示样式 */
.no-result {
  margin-top: 20px;
  text-align: center;
}
.no-result-text {
  font-size: 16px;
  color: #999;
}
</style>
