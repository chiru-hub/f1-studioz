<template>
  <div>
    <div class="d-none d-md-flex justify-content-between w-100">
      <div class="d-flex">
        <div
          @click="changeTab('active cart')"
          class="cursor-pointer"
          :class="section === 'active cart' ? 'active' : ''"
        >
          Active Carts
        </div>
        <div
          @click="changeTab('archieved cart')"
          class="cursor-pointer"
          :class="section === 'archieved cart' ? 'active' : ''"
        >
          Archived Carts
        </div>
      </div>
      <div class="d-flex">
        <input
          v-model="search"
          type="text"
          name=""
          id=""
          placeholder="Search"
        />
        <button>Filter</button>
      </div>
    </div>
    <div class="d-flex d-md-none justify-content-between w-100 p-2">
      <div class="d-flex">
        <div
          @click="changeTab('active cart')"
          class="cursor-pointer"
          :class="section === 'active cart' ? 'active' : ''"
        >
          Active Carts
        </div>
        <div
          @click="changeTab('archieved cart')"
          class="cursor-pointer"
          :class="section === 'archieved cart' ? 'active' : ''"
        >
          Archived Carts
        </div>
      </div>
      <div class="d-flex">
        <div class="d-flex px-2 border rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <button>Filter</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
  computed: {
    section() {
      return this.$store.getters.homeState;
    },
  },
  watch: {
    search(newValue, oldValue) {
      this.$store.commit("SEARCH_TABLE_DATA", newValue);
    },
  },
  methods: {
    changeTab(tabName) {
      this.$store.commit("CHANGE_TAB_STATE", tabName);
    },
  },
};
</script>

<style lang="scss">
.active {
  font-weight: bold;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 3px;
    background-color: #faca30;
  }
}

.h-6 {
  height: 20px;
}
.w-6 {
  width: 20px;
}
</style>
