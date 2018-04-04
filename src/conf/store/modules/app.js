export default {
  state: {
    loading: false,
  },
  mutations: {
    loadingUpdate(state, payload) {
      state.loadding = { ...payload };
    },
  },
  actions: {
    loading({ commit }, load) {
      commit('loadingUpdate', { load });
    },
  },
};
