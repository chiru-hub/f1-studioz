<template>
  <div class="options options-1">
    <div class="heading">Window Options</div>
    <div class="body">
      <div class="forms">
        <div class="row pb-3 align-items-center">
          <div class="col-12 col-sm-4 d-flex">
            Glass Type
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
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div class="col-12 col-sm-8">
            <select
              v-model="glassType"
              @change="checkSelectOption"
              class="form-select"
            >
              <option value="" selected disabled>Select an options</option>
              <option
                v-for="glass in glassTypeOption"
                :key="glass.id"
                :value="glass.value"
              >
                {{ glass.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="row pb-3 align-items-center">
          <div class="col-12 col-sm-4 d-flex">
            Section(s) Glazed
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
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div class="col-12 col-sm-8">
            <select
              v-model="sectionGlazed"
              @change="checkSelectOption"
              class="form-select"
            >
              <option value="" selected disabled>Select an options</option>
              <option
                v-for="section in sectionGlazedOption"
                :key="section.id"
                :value="section.value"
              >
                {{ section.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="row pb-3 align-items-center">
          <div class="col-12 col-sm-4 d-flex">
            Framing
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
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div class="col-12 col-sm-8">
            <select
              v-model="framing"
              @change="checkSelectOption"
              class="form-select"
            >
              <option value="" selected disabled>Select an options</option>
              <option
                v-for="frame in framingOption"
                :key="frame.id"
                :value="frame.value"
              >
                {{ frame.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      glassType: "",
      sectionGlazed: "",
      framing: "",
      framingOption: [
        {
          id: 1,
          name: "Arch 1 Design",
          value: "arch-1",
        },
        {
          id: 2,
          name: "Arch 2 Design",
          value: "arch-2",
        },
        {
          id: 3,
          name: "Head Jamb",
          value: "head-jamb",
        },
      ],
      sectionGlazedOption: [
        {
          id: 1,
          name: "Sections 4",
          value: "section-4",
        },
        {
          id: 2,
          name: "Sections 4",
          value: "sections-6",
        },
      ],
      glassTypeOption: [
        {
          id: 1,
          name: "Solid (No Windows)",
          value: "solid-no-window",
        },
        {
          id: 2,
          name: "Solid (Windows)",
          value: "solid-windows",
        },
      ],
    };
  },
  mounted() {
    if (this.$route.params.initLoad) {
      let data = this.$store.state.cart.windowOptions;
      this.glassType = data.glassType;
      this.sectionGlazed = data.sectionGlazed;
      this.framing = data.framing;
    }
    this.checkSelectOption();
  },
  methods: {
    checkSelectOption: function () {
      let layout = {
        glassType: this.glassType,
        sectionGlazed: this.sectionGlazed,
        framing: this.framing,
      };
      this.$store.commit("SET_WINDOW_OPTIONS", layout);
    },
  },
};
</script>


<style lang="scss" scoped>
.options {
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-bottom: 20px;
  .heading {
    border-radius: 5px 5px 0 0;
    background-color: #e4e4e4;
    padding: 10px 15px;
    font-size: 14px;
    font-weight: 600;
  }
  .body {
    border-radius: 0 0 5px 5px;
    background-color: white;
    .forms {
      padding: 20px 100px;
      margin: auto;
      @media only screen and (max-width: 576px) {
        div {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-bottom: 5px;
        }
        select {
          width: 100%;
        }
      }
      @media only screen and (max-width: 768px) {
        padding: 20px;
      }
    }
    .form-select {
      padding: 6px 10px;
    }
    .material-icons {
      padding-left: 10px;
      color: #c3c9cf;
      font-size: 20px;
    }
  }
}
</style>
