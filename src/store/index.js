import Vue from "vue";
import Vuex from "vuex";
import shop from '@/api/shop';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //data
    products: []
  },

  getters: {
    //computed properteties
    avaiProducts(state) {
      return state.products.filter(product => product.inventory > 0)
    }

  },
  actions: { //methods
    //make the call
    fetchProducts({commit}) {
      shop.getProducts(products => {
        commit('setProducts', products)
      })
    }

  },

  mutations: {
    //update product
    setProducts(state, products) {
      state.products = products
    }
  }
});
