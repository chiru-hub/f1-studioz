<template>
  <div class="options options-1">
    <div class="heading">Other Options</div>
    <div class="body">
      <div class="forms">
        <div class="row pb-3 align-items-center">
          <div class="col-12 col-sm-4 d-flex">
            Lock
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
              v-model="lock"
              @change="checkSelectOption"
              class="form-select"
            >
              <option value="" selected disabled>Select an options</option>
              <option v-for="p in lockOption" :key="p.id" :value="p.value">
                {{ p.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="row pb-3 align-items-center">
          <div class="col-12 col-sm-4 d-flex">MISC Lock Options</div>
          <div class="col-12 col-sm-8 extraPadding">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault1">
                No Lock Hole
              </label>
            </div>
          </div>
        </div>
        <div class="row pb-3 align-items-center">
          <div class="col-12 col-sm-4 d-flex">
            Packaging
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
              v-model="packaging"
              @change="checkSelectOption"
              class="form-select"
            >
              <option value="" selected disabled>Select an options</option>
              <option v-for="p in packagingOption" :key="p.id" :value="p.value">
                {{ p.name }}
              </option>
            </select>
            <div class="text-red d-flex align-items-center mt-2">
              <span class="material-icons error">error</span>Clopay CWD Models
              Excludes Packaging Options
            </div>
          </div>
        </div>
        <div class="row pb-3">
          <div class="col-12 col-sm-4 d-flex">
            Additional Options
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
          <div class="col-12 col-sm-8 extraPadding">
            <div class="row">
              <div class="col-12 col-sm-8">
                <div class="form-check">
                  <input
                    v-model="extraStrut"
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="extraStrut"
                  />
                  <label class="form-check-label" for="extraStrut">
                    Extra Strut(s)
                  </label>
                </div>
              </div>
              <div class="col-12 col-sm-4" v-if="extraStrut">
                <select
                  v-model="extraStrutQuantity"
                  @change="checkSelectOption"
                  class="form-select"
                >
                  <option
                    v-for="p in extraStrutOption"
                    :key="p.id"
                    :value="p.value"
                  >
                    {{ p.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                @change="checkSelectOption"
                v-model="spadeStrapHinge"
                value=""
                id="spadeStrapHinge"
                checked
              />
              <label class="form-check-label" for="spadeStrapHinge">
                Spade Strap Hinge(s)
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                @change="checkSelectOption"
                v-model="quietHinge"
                value=""
                id="quietHinge"
                checked
              />
              <label class="form-check-label" for="quietHinge">
                14 GA Quiet Hinge
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                @change="checkSelectOption"
                v-model="bottomAstragal"
                type="checkbox"
                value=""
                id="bottomAstragal"
                checked
              />
              <label class="form-check-label" for="bottomAstragal">
                Less Bottom Astragal
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                @change="checkSelectOption"
                v-model="goldBar"
                value=""
                id="goldBar"
                checked
              />
              <label class="form-check-label" for="goldBar">
                Gold Bar Gurantee ( Select Dealers )
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                @change="checkSelectOption"
                v-model="medallionHardware"
                id="medallionHardware"
                checked
              />
              <label class="form-check-label" for="medallionHardware">
                Medallion Hardware Upgrade
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                v-model="lightSealKit"
                @change="checkSelectOption"
                type="checkbox"
                value=""
                id="lightSealKit"
                checked
              />
              <label class="form-check-label" for="lightSealKit">
                Light Seal Kit
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                v-model="slideLockMounted"
                @change="checkSelectOption"
                type="checkbox"
                value=""
                id="slideLockMounted"
                checked
              />
              <label class="form-check-label" for="slideLockMounted">
                Slide Lock Mounted at 54”
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="spearLiftHandles"
                @change="checkSelectOption"
                value=""
                id="spearLiftHandles"
                checked
              />
              <label class="form-check-label" for="spearLiftHandles">
                2 Spear Lift Handles
              </label>
            </div>
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
      lock: "",
      packaging: "",
      trackLift: "",
      trackRadius: "",

      extraStrut: false,
      extraStrutQuantity: 5,
      spadeStrapHinge: false,
      quietHinge: false,
      bottomAstragal: false,
      goldBar: false,
      medallionHardware: false,
      lightSealKit: false,
      slideLockMounted: false,
      spearLiftHandles: false,

      lockOption: [
        {
          id: 1,
          name: "Inside Slide Lock (#2)",
          value: "slide-lock",
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
      packagingOption: [
        {
          id: 1,
          name: "[x] Distributor",
          value: "x-istributor",
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
      extraStrutOption: [
        {
          id: 1,
          name: "5 Extra Struts",
          value: 5,
        },
        {
          id: 2,
          name: "10 Extra Struts",
          value: 10,
        },
      ],
    };
  },
  mounted() {
    if (this.$route.params.initLoad) {
      let data = this.$store.state.cart.otherOptions;
      this.lock = data.lock;
      this.packaging = data.packaging;
      this.extraStrut = data.extraStrut;
      this.spadeStrapHinge = data.spadeStrapHinge;
      this.quietHinge = data.quietHinge;
      this.bottomAstragal = data.bottomAstragal;
      this.goldBar = data.goldBar;
      this.medallionHardware = data.medallionHardware;
      this.lightSealKit = data.lightSealKit;
      this.slideLockMounted = data.slideLockMounted;
      this.spearLiftHandles = data.spearLiftHandles;
      this.extraStrutQuantity = data.extraStrutQuantity;
      this.checkSelectOption();
    }
  },
  methods: {
    checkSelectOption: function () {
      let layout = {
        lock: this.lock,
        packaging: this.packaging,
        extraStrut: this.extraStrut,
        spadeStrapHinge: this.spadeStrapHinge,
        quietHinge: this.quietHinge,
        bottomAstragal: this.bottomAstragal,
        goldBar: this.goldBar,
        medallionHardware: this.medallionHardware,
        lightSealKit: this.lightSealKit,
        slideLockMounted: this.slideLockMounted,
        spearLiftHandles: this.spearLiftHandles,
      };

      if (this.extraStrut)
        layout["extraStrutQuantity"] = this.extraStrutQuantity;
      this.$store.commit("SET_OTHER_OPTIONS", layout);
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
      font-size: 20px;
      color: #c3c9cf;
      &.error {
        padding-left: 0;
        padding-right: 5px;
        color: red;
      }
    }
    .form-check {
      padding: 10px 0;
    }
  }
}

.text-red {
  color: #d50000;
}

.extraPadding {
  padding-left: 35px;
}
</style>
