// store/index.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    devices: [
      { id: 1, name: '设备A', status: '正常', description: '设备A描述' },
      { id: 2, name: '设备B', status: '故障', description: '设备B描述' },
      { id: 3, name: '设备C', status: '正常', description: '设备C描述' }
    ]
  },
  mutations: {
    // 更新设备状态
    updateDeviceStatus(state, payload) {
      const device = state.devices.find(d => d.id === payload.id);
      if (device) {
        device.status = payload.status;
      }
    }
  },
  actions: {
    updateDeviceStatus({ commit }, payload) {
      commit('updateDeviceStatus', payload);
    }
  },
  getters: {
    getDevices(state) {
      return state.devices;
    }
  }
});
