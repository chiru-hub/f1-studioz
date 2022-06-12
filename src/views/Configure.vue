<template>
  <div style="background: #e5e5e5; height: 100vh">
    <div class="container bg-white" style="height: 100vh">
      <div class="col-md-10 col-12 mx-auto pt-4">
        <div class="configure-form pb-3 align-items-center">
          <div class="col-12 col-sm-4 d-flex">Select Category</div>
          <div class="col-12 col-sm-8">
            <select v-model="category" class="form-select">
              <option value="" selected disabled>Select an options</option>
              <option v-for="p in catergoryOption" :key="p.id" :value="p.value">
                {{ p.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="configure-form pb-3 align-items-center">
          <div class="col-12 col-sm-4 d-flex">
            Select Series <span class="material-icons">help</span>
          </div>
          <div class="col-12 col-sm-8">
            <select v-model="series" class="form-select">
              <option value="" selected disabled>Select an options</option>
              <option v-for="p in seriesOption" :key="p.id" :value="p.value">
                {{ p.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="configure-form pb-3 align-items-center">
          <div class="col-12 col-sm-4 d-flex">
            Door Type <span class="material-icons">help</span>
          </div>
          <div class="col-12 col-sm-8">
            <select v-model="doorType" class="form-select">
              <option value="" selected disabled>Select an options</option>
              <option v-for="p in doorTypeOption" :key="p.id" :value="p.value">
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
      category: "",
      series: "",
      doorType: "",
      catergoryOption: [
        {
          id: 1,
          name: "Residential Door",
          value: "residential-door",
        },
        {
          id: 2,
          name: "Residential Door",
          value: "residential-door",
        },
      ],
      seriesOption: [
        {
          id: 1,
          name: "Canyon Ridge® Collection",
          value: "canyon-ridge-Collection",
        },
        {
          id: 2,
          name: "Residential Door",
          value: "residential-door",
        },
      ],
      doorTypeOption: [
        {
          id: 1,
          name: "CAN212",
          value: "can212",
        },
        {
          id: 2,
          name: "Residential Door",
          value: "residential-door",
        },
      ],
    };
  },
};
</script>

<style>
.configure-form {
  display: flex;
  flex-wrap: wrap;
}
.form-select {
  padding: 6px 10px;
}
@media only screen and (max-width: 576px) {
  .configure-form div {
    justify-content: space-between;
    margin-bottom: 5px;
  }
  .configure-form select {
    width: 100%;
  }
}
</style>
