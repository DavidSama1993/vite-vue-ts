import { createStore } from 'vuex';

const store = createStore({
  strict: true,
  devtools: true,
  state: {
    property1: 1,
    property2: '2',
    property3: {}
  },
  getters: {},
  actions: {},
  mutations: {},
  modules: {},
  plugins: [],
});

export default store;
