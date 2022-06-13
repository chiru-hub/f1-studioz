<template>
  <div>
    <div class="d-none d-lg-flex justify-content-between w-100">
      <div class="d-flex px-2">
        <div
          @click="changeTab('active cart')"
          class="cursor-pointer"
          :class="section === 'active cart' ? 'active' : ''"
        >
          Active Carts
        </div>
        <div
          @click="changeTab('archieved cart')"
          class="cursor-pointer ms-3"
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
    <div class="d-none d-md-flex d-lg-none justify-content-between w-100 p-2">
      <div>Carts</div>
      <div class="d-flex">
        <div
          @click="changeTab('active cart')"
          class="cursor-pointer border rounded shadow-sm"
          :class="section === 'active cart' ? 'active-mobile' : ''"
        >
          Active Carts
        </div>
        <div
          @click="changeTab('archieved cart')"
          class="cursor-pointer border rounded shadow-sm"
          :class="section === 'archieved cart' ? 'active-mobile' : ''"
        >
          Archived Carts
        </div>
      </div>
      <div class="d-flex">
        <div class="d-flex p-1 border rounded shadow-sm">
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
        <div class="cursor-pointer border rounded shadow-sm p-1">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 7C4 7.55 4.4 8 4.88889 8H19.1111C19.6 8 20 7.55 20 7C20 6.45 19.6 6 19.1111 6H4.88889C4.4 6 4 6.45 4 7ZM9.99997 17.9999H14C14.55 17.9999 15 17.5499 15 16.9999C15 16.4499 14.55 15.9999 14 15.9999H9.99997C9.44997 15.9999 8.99997 16.4499 8.99997 16.9999C8.99997 17.5499 9.44997 17.9999 9.99997 17.9999ZM17 13.0001H6.99997C6.44997 13.0001 5.99997 12.5501 5.99997 12.0001C5.99997 11.4501 6.44997 11.0001 6.99997 11.0001H17C17.55 11.0001 18 11.4501 18 12.0001C18 12.5501 17.55 13.0001 17 13.0001Z"
              fill="#66332B"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="d-block d-sm-none w-100 p-2">
      <div class="d-flex justify-content-between align-items-center">
        <div>Carts</div>

        <div class="d-flex align-items-center">
          <div class="d-flex p-1">
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
          <div class="cursor-pointer p-1">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 7C4 7.55 4.4 8 4.88889 8H19.1111C19.6 8 20 7.55 20 7C20 6.45 19.6 6 19.1111 6H4.88889C4.4 6 4 6.45 4 7ZM9.99997 17.9999H14C14.55 17.9999 15 17.5499 15 16.9999C15 16.4499 14.55 15.9999 14 15.9999H9.99997C9.44997 15.9999 8.99997 16.4499 8.99997 16.9999C8.99997 17.5499 9.44997 17.9999 9.99997 17.9999ZM17 13.0001H6.99997C6.44997 13.0001 5.99997 12.5501 5.99997 12.0001C5.99997 11.4501 6.44997 11.0001 6.99997 11.0001H17C17.55 11.0001 18 11.4501 18 12.0001C18 12.5501 17.55 13.0001 17 13.0001Z"
                fill="#66332B"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <div
          @click="changeTab('active cart')"
          class="cursor-pointer border rounded shadow-sm px-3 py-1 flex-grow-1"
          :class="section === 'active cart' ? 'active-mobile' : ''"
        >
          Active Carts
        </div>
        <div
          @click="changeTab('archieved cart')"
          class="cursor-pointer border rounded shadow-sm px-3 py-1 flex-grow-1"
          :class="section === 'archieved cart' ? 'active-mobile' : ''"
        >
          Archived Carts
        </div>
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
  &-mobile {
    background-color: #ddedfd;
  }
}

.h-6 {
  height: 20px;
}
.w-6 {
  width: 20px;
}
</style>
