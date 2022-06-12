<template>
  <div class="options options-1">
    <div class="heading">Layout Options</div>
    <div class="body">
      <div class="forms">
        <div class="row pb-3 align-items-center">
          <div class="col-12 col-sm-4 d-flex justify-content-start">
            Assembly Type
          </div>
          <div class="col-12 col-sm-8">
            <select
              v-model="assemblyType"
              @change="checkSelectOption"
              class="form-select"
            >
              <option value="" selected disabled>Select an options</option>
              <option
                v-for="p in assemblyTypeOption"
                :key="p.id"
                :value="p.value"
              >
                {{ p.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="row pb-3">
          <div class="col-12 col-sm-4 d-flex">
            Measure Size
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
            <div class="row col-12 align-items-center">
              <div class="col-4">Width</div>
              <div class="col-4">
                <select
                  v-model="measurementWidthFeet"
                  @change="checkSelectOption"
                  class="form-select"
                >
                  <option
                    v-for="p in measurementWidthOption.feet"
                    :key="p.id"
                    :value="p.value"
                  >
                    {{ p.name }}
                  </option>
                </select>
              </div>
              <div class="col-4">
                <select
                  v-model="measurementWidthInch"
                  @change="checkSelectOption"
                  class="form-select"
                >
                  <option
                    v-for="p in measurementWidthOption.inch"
                    :key="p.id"
                    :value="p.value"
                  >
                    {{ p.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="col-12 row align-items-center mt-4">
              <div class="col-4">Height</div>
              <div class="col-4">
                <select
                  v-model="measurementHeightFeet"
                  @change="checkSelectOption"
                  class="form-select"
                >
                  <option
                    v-for="p in measurementHeightOption.feet"
                    :key="p.id"
                    :value="p.value"
                  >
                    {{ p.name }}
                  </option>
                </select>
              </div>
              <div class="col-4">
                <select
                  v-model="measurementHeightInch"
                  @change="checkSelectOption"
                  class="form-select"
                >
                  <option
                    v-for="p in measurementHeightOption.inch"
                    :key="p.id"
                    :value="p.value"
                  >
                    {{ p.name }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="row pb-3 align-items-center">
          <div class="col-12 col-sm-4 d-flex">
            Windcode
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
              v-model="windcode"
              @change="checkSelectOption"
              class="form-select"
            >
              <option value="" selected disabled>Select an options</option>
              <option v-for="p in windcodeOption" :key="p.id" :value="p.value">
                {{ p.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="row pb-3 align-items-center">
          <div class="col-12 col-sm-4 d-flex">
            Design
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
              v-model="design"
              @change="checkSelectOption"
              class="form-select"
            >
              <option value="" selected disabled>Select an options</option>
              <option v-for="p in designOption" :key="p.id" :value="p.value">
                {{ p.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="row pb-3 align-items-center">
          <div class="col-12 col-sm-4 d-flex">
            Color
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
              v-model="color"
              @change="checkSelectOption"
              class="form-select"
            >
              <option value="" selected disabled>Select an options</option>
              <option v-for="p in colorOption" :key="p.id" :value="p.value">
                {{ p.name }}
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
  props: {
    init: Object,
  },
  data() {
    return {
      assemblyType: "",
      measurementWidthFeet: 0,
      measurementWidthInch: 0,
      measurementHeightFeet: 0,
      measurementHeightInch: 0,
      windcode: "",
      design: "",
      color: "",
      assemblyTypeOption: [
        {
          id: 1,
          name: "Complete Door",
          value: "complete-door",
        },
        {
          id: 2,
          name: "Door frame",
          value: "door-frame",
        },
        {
          id: 3,
          name: "Head Jamb",
          value: "head-jamb",
        },
      ],
      measurementWidthOption: {
        feet: [
          {
            id: 1,
            name: "8 ft.",
            value: 8,
          },
          {
            id: 2,
            name: "10 ft.",
            value: 10,
          },
          {
            id: 3,
            name: "12 ft.",
            value: 12,
          },
        ],
        inch: [
          {
            id: 1,
            name: "2 in.",
            value: 2,
          },
          {
            id: 2,
            name: "4 in.",
            value: 4,
          },
          {
            id: 3,
            name: "6 in.",
            value: 6,
          },
        ],
      },
      measurementHeightOption: {
        feet: [
          {
            id: 1,
            name: "6 ft.",
            value: 6,
          },
          {
            id: 2,
            name: "8 ft.",
            value: 8,
          },
          {
            id: 3,
            name: "10 ft.",
            value: 10,
          },
        ],
        inch: [
          {
            id: 1,
            name: "0 in.",
            value: 0,
          },
          {
            id: 2,
            name: "2 in.",
            value: 2,
          },
          {
            id: 3,
            name: "4 in.",
            value: 4,
          },
        ],
      },
      windcodeOption: [
        {
          id: 1,
          name: "WindCode W1",
          value: "w1",
        },
        {
          id: 1,
          name: "WindCode W2",
          value: "w2",
        },
        {
          id: 1,
          name: "WindCode W3",
          value: "w3",
        },
        {
          id: 1,
          name: "WindCode W4",
          value: "w4",
        },
        {
          id: 1,
          name: "WindCode W5",
          value: "w5",
        },
        {
          id: 1,
          name: "WindCode W6",
          value: "w6",
        },
        {
          id: 1,
          name: "WindCode W7",
          value: "w7",
        },
        {
          id: 1,
          name: "WindCode W8",
          value: "w8",
        },
        {
          id: 1,
          name: "WindCode W9",
          value: "w9",
        },
      ],
      designOption: [
        {
          id: 1,
          name: "CC",
          value: "cc",
        },
        {
          id: 2,
          name: "Steel Doors",
          value: "steel-doors",
        },
        {
          id: 3,
          name: "Fiberglass Doors",
          value: "fiberglass-doors",
        },
      ],
      colorOption: [
        {
          id: 1,
          name: "Dark Finish",
          value: "dark-finish",
        },
        {
          id: 2,
          name: "Cool Gray",
          value: "cool-gray",
        },
        {
          id: 3,
          name: "Chalkboard",
          value: "chalkboard",
        },
        {
          id: 4,
          name: "Burgundy",
          value: "burgundy",
        },
      ],
    };
  },
  computed: {
    isEditing: function () {
      console.log(this.$store.state.shouldLoadData);
      let cart = this.$store.state.cart[0];
      this.assemblyType = cart.layoutOptions.assemblyType;
    },
  },
  mounted() {
    if (this.$route.params.initLoad) {
      let data = this.$store.state.cart.layoutOptions;
      this.assemblyType = data.assemblyType;
      this.measurementWidthFeet = data.measurementWidthFeet;
      this.measurementWidthInch = data.measurementWidthInch;
      this.measurementHeightFeet = data.measurementHeightFeet;
      this.measurementHeightInch = data.measurementHeightInch;
      this.windcode = data.windcode;
      this.design = data.design;
      this.color = data.color;
    } else {
      // This will initalize some of the required data to store and input selector
      this.measurementWidthFeet = this.measurementWidthOption.feet[0].value;
      this.measurementWidthInch = this.measurementWidthOption.inch[0].value;
      this.measurementHeightFeet = this.measurementHeightOption.feet[0].value;
      this.measurementHeightInch = this.measurementHeightOption.inch[0].value;
    }
    this.checkSelectOption();
  },
  methods: {
    checkSelectOption: function () {
      let layout = {
        assemblyType: this.assemblyType,
        measurementWidthFeet: this.measurementWidthFeet,
        measurementWidthInch: this.measurementWidthInch,
        measurementHeightFeet: this.measurementHeightFeet,
        measurementHeightInch: this.measurementHeightInch,
        windcode: this.windcode,
        design: this.design,
        color: this.color,
      };
      this.$store.commit("SET_LAYOUT_OPTIONS", layout);
    },
  },
};
</script>

<style lang="scss" scoped>
.options {
  margin-bottom: 20px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
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
          select {
            width: 100%;
          }
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







		

		

		



		

		
