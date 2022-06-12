<template>
  <div>
    <div class="container d-flex">
      <div class="mt-5 w-100">
        <div
          class="
            mb-3
            border
            w-100
            rounded
            shadow-sm
            text-start
            p-3
            d-flex
            justify-content-between
            align-items-center
            cursor-pointer
          "
          v-for="(order, index) in orderMenus"
          :key="index"
          @click="$router.push('/configure')"
        >
          <div class="d-flex flex-column">
            <span class="order-name">
              {{ order.name }}
            </span>
            <span class="mt-2 order-desc">{{ order.desc }}</span>
          </div>
          <div>
            <svg
              width="10"
              height="16"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.50049 8.00003C9.50049 8.28678 9.38644 8.5735 9.15882 8.79212L1.99244 15.6718C1.53657 16.1094 0.797451 16.1094 0.341765 15.6718C-0.113922 15.2343 -0.113922 14.5249 0.341765 14.0872L6.68297 8.00003L0.341986 1.91278C-0.1137 1.47515 -0.1137 0.76581 0.341986 0.328386C0.797672 -0.109463 1.53679 -0.109463 1.99266 0.328386L9.15904 7.20793C9.3867 7.42666 9.50049 7.71338 9.50049 8.00003Z"
                fill="#66332B"
              />
            </svg>
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
      orderMenus: [
        {
          name: "Configure your door from scratch",
          desc: "Residential, Commerical, Entry doors",
        },
        {
          name: "Parts / Openers",
          desc: "Order Parts and Openers",
        },
        {
          name: "Direct Item Entry",
          desc: "Order Parts / Openers using a Product ID",
        },
        {
          name: "Choose from favourites",
          desc: "Re-order door from your favourites ",
        },
      ],
    };
  },
};
</script>

<style>
.order-name {
  font-size: 20px;
  color: #2a292a;
}
.order-desc {
  font-size: 14px;
  color: #8894a0;
}
</style>
