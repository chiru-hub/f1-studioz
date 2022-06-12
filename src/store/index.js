import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeCarts: [
      {
        productInformation: "2 Classic Collection Garage Door, 2 Entry Door",
        cartName: "Johnson_Classic14209123",
        shippingPoint: "Russia Plant",
        createdBy: "Manoj Bajpayee",
        expiry: "Expires in 6 days",
      },
      {
        productInformation:
          "10' 0'' X 10' 0.0'' CAN211CCW1 COMPLETE DOOR INTELLICORE",
        cartName: "Carter_Classic14209123",
        shippingPoint: "Russia Plant",
        createdBy: "Steve Benneth...",
        expiry: "Expires in 4 days",
      },
    ],
  },
  getters: {
    cartItems: state => state.activeCarts,
  },
  mutations: {},
  actions: {},
  modules: {},
})
