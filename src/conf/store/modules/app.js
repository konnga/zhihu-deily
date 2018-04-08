export default {
  state: {
    loading: false,
    menuName: '首页',
    days: '',
  },
  mutations: {
    loadingUpdate(state, payload) {
      state.loadding = { ...payload };
    },
    menuNameUpdate(state, payload) {
      state.menuName = payload.menuName;
    },
    daysUpdate(state, payload) {
      state.days = { ...payload };
    },
  },
  actions: {
    loading({ commit }, load) {
      commit('loadingUpdate', load);
    },
    menuName({ commit }, load) {
      commit('menuNameUpdate', load);
    },
    days({ commit }, load) {
      commit('daysUpdate', load);
    },
  },
};
