<template>
  <div>
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
