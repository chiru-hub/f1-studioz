<template>
  <div>
    <div class="d-none d-md-flex">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Product Information</th>
            <th>Cart Name</th>
            <th>Shipping Point</th>
            <th>Created by</th>
            <th>Expiry</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index">
            <td>{{ item.productInformation }}</td>
            <td>{{ item.cartName }}</td>
            <td>{{ item.shippingPoint }}</td>
            <td>{{ item.createdBy }}</td>
            <td>{{ item.expiry }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="d-block d-md-none">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="border shadow-sm rounded px-3 py-2 mb-2"
      >
        <div class="d-flex justify-content-between">
          <div>
            {{ item.cartName }}
          </div>
          <div>
            {{ item.cartNo }}
          </div>
        </div>
        <h3 class="mt-3">
          {{ item.productInformation }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$store.getters.cartItems;
    },
  },
};
</script>

<style>
</style>
