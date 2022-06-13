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
        cartNo: "#70452444",
      },
      {
        productInformation:
          "10' 0'' X 10' 0.0'' CAN211CCW1 COMPLETE DOOR INTELLICORE",
        cartName: "Carter_Classic14209123",
        shippingPoint: "Russia Plant",
        createdBy: "Steve Benneth...",
        expiry: "Expires in 4 days",
        cartNo: "#70452444",
      },
    ],
    activeCarts2: [
      {
        productInformation: "2 Classic Collection Garage Door, 2 Entry Door",
        cartName: "Johnson_Classic14209123",
        shippingPoint: "Russia Plant",
        createdBy: "Manoj Bajpayee",
        expiry: "Expires in 6 days",
        cartNo: "#70452444",
      },
      {
        productInformation:
          "10' 0'' X 10' 0.0'' CAN211CCW1 COMPLETE DOOR INTELLICORE",
        cartName: "Carter_Classic14209123",
        shippingPoint: "Russia Plant",
        createdBy: "Steve Benneth...",
        expiry: "Expires in 4 days",
        cartNo: "#70452444",
      },
    ],
    layoutOptions: {},
    isLayoutCompleted: false,

    windowOptions: {},
    isWindowCompleted: false,

    trackOptions: {},
    isTrackCompleted: false,

    otherOptions: {},
    isOtherCompleted: false,

    cart: {},
    shouldLoadData: true,

    tab: "active cart",
  },
  getters: {
    cartItems: state => state.activeCarts,
    homeState: state => state.tab,
  },
  mutations: {
    LOAD_DATA(state, value) {
      state.shouldLoadData = value
    },
    SET_LAYOUT_OPTIONS(state, value) {
      state.layoutOptions = value

      // Check progress
      let values = Object.values(value)
      if (!values.includes("")) {
        state.isLayoutCompleted = true
      }
    },
    SET_WINDOW_OPTIONS(state, value) {
      state.windowOptions = value

      // Check progress
      let values = Object.values(value)
      if (!values.includes("")) {
        state.isWindowCompleted = true
      }
    },
    SET_TRACK_OPTIONS(state, value) {
      state.trackOptions = value

      // Check progress
      let values = Object.values(value)
      if (!values.includes("")) {
        state.isTrackCompleted = true
      }
    },
    SET_OTHER_OPTIONS(state, value) {
      state.otherOptions = value

      // Check progress
      let values = Object.values(value)
      if (!values.includes("")) {
        state.isOtherCompleted = true
      }
    },
    RESET_PROGRESS(state) {
      state.layoutOptions = {}
      state.isLayoutCompleted = false

      state.windowOptions = {}
      state.isWindowCompleted = false

      state.trackOptions = {}
      state.isTrackCompleted = false

      state.otherOptions = {}
      state.isOtherCompleted = false
    },
    ADD_TO_CART(state) {
      let item = {
        layoutOptions: state.layoutOptions,
        windowOptions: state.windowOptions,
        trackOptions: state.trackOptions,
        otherOptions: state.otherOptions,
      }
      state.cart = item
      this.commit("RESET_PROGRESS")
    },
    CHANGE_TAB_STATE(state, value) {
      state.tab = value
    },
    SEARCH_TABLE_DATA(state, value) {
      if (value !== "") {
        state.activeCarts = state.activeCarts.filter(
          items =>
            items.productInformation
              .toLowerCase()
              .includes(value.toLowerCase()) ||
            items.cartName.toLowerCase().includes(value.toLowerCase()) ||
            items.shippingPoint.toLowerCase().includes(value.toLowerCase()) ||
            items.createdBy.toLowerCase().includes(value.toLowerCase())
        )
      } else {
        state.activeCarts = state.activeCarts2
      }
    },
  },
  actions: {},
  modules: {},
})
