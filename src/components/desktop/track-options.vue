<template>
  <div class="options options-1">
    <div class="heading">Track Options</div>
    <div class="body">
      <div class="forms">
        <div class="row pb-3 align-items-center">
          <div class="col-12 col-sm-4 d-flex">
            Spring
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
              v-model="spring"
              @change="checkSelectOption"
              class="form-select"
            >
              <option value="" selected disabled>Select an options</option>
              <option v-for="p in springOption" :key="p.id" :value="p.value">
                {{ p.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="row pb-3 align-items-center">
          <div class="col-12 col-sm-4 d-flex">
            Track Size
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
              v-model="trackSize"
              @change="checkSelectOption"
              class="form-select"
            >
              <option value="" selected disabled>Select an options</option>
              <option v-for="p in trackSizeOption" :key="p.id" :value="p.value">
                {{ p.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="row pb-3 align-items-center">
          <div class="col-12 col-sm-4 d-flex">
            Track Mount
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
              v-model="trackMount"
              @change="checkSelectOption"
              class="form-select"
            >
              <option value="" selected disabled>Select an options</option>
              <option
                v-for="p in trackMountOption"
                :key="p.id"
                :value="p.value"
              >
                {{ p.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="row pb-3 align-items-center">
          <div class="col-12 col-sm-4 d-flex">
            Track Lift
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
              v-model="trackLift"
              @change="checkSelectOption"
              class="form-select"
            >
              <option value="" selected disabled>Select an options</option>
              <option v-for="p in trackLiftOption" :key="p.id" :value="p.value">
                {{ p.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="row pb-3 align-items-center">
          <div class="col-12 col-sm-4 d-flex">
            Track Radius
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
              v-model="trackRadius"
              @change="checkSelectOption"
              class="form-select"
            >
              <option value="" selected disabled>Select an options</option>
              <option
                v-for="p in trackRadiusOption"
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
  </div>
</template>


<script>
export default {
  data() {
    return {
      spring: "",
      trackSize: "",
      trackMount: "",
      trackLift: "",
      trackRadius: "",
      springOption: [
        {
          id: 1,
          name: "Galvanized Torsion",
          value: "galvanized-torsion",
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
      trackSizeOption: [
        {
          id: 1,
          name: "2” Flag & Jamb Brackets Loose",
          value: "2in-flag",
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
      trackLiftOption: [
        {
          id: 1,
          name: "Standard",
          value: "standard",
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
      trackRadiusOption: [
        {
          id: 1,
          name: "12” Radius",
          value: "12-radius",
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
      trackMountOption: [
        {
          id: 1,
          name: "Bracket",
          value: "brakcet",
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
  mounted() {
    if (this.$route.params.initLoad) {
      let data = this.$store.state.cart.trackOptions;
      this.spring = data.spring;
      this.trackSize = data.trackSize;
      this.trackMount = data.trackMount;
      this.trackLift = data.trackLift;
      this.trackRadius = data.trackRadius;
      this.checkSelectOption();
    }
  },
  methods: {
    checkSelectOption: function () {
      let layout = {
        spring: this.spring,
        trackSize: this.trackSize,
        trackMount: this.trackMount,
        trackLift: this.trackLift,
        trackRadius: this.trackRadius,
      };
      this.$store.commit("SET_TRACK_OPTIONS", layout);
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
