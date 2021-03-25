import Vuex from "vuex";
import Vue from "vue";
import { SET_DATA } from "./mutation-types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lists: null, // state.lists diganti menjadi state.lists
    count: 0, // untuk menampung jumlah data
  },

  getters: {
    getData: (state) => {
      return state.lists;
    },
    getCountData: (state) => {
      return state.count; // untuk mendapatkan jumlah data
    },
  },

  mutations: {
    SET_DATA: (state, data) => {
      state.lists = data;
      state.count = data.length;
    },
  },

  actions: {
    setData(context, data) {
      context.commit(SET_DATA, data); // setData diganti SET_DATA (import dari "./mutation-types") yang akan mengacu pada mutation
    },
  },
});
