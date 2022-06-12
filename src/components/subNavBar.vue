<template>
  <div>
    <nav class="navbar d-flex bg-subnav w-100">
      <div
        class="text-white d-flex align-content-center"
        v-if="this.$route.name === 'order' || this.$route.name === 'configure'"
      >
        <div class="cursor-pointer">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="d-inline-block"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.30131 11.2355L10.8846 4.31661C11.2862 3.89446 11.9376 3.89446 12.3393 4.31661C12.741 4.73883 12.741 5.42329 12.3393 5.84552L7.51205 10.9189H18.9714C19.5394 10.9189 20 11.403 20 12C20 12.5969 19.5394 13.0811 18.9714 13.0811H7.51205L12.3391 18.1545C12.7409 18.5767 12.7409 19.2611 12.3391 19.6834C12.1384 19.8943 11.875 20 11.6118 20C11.3485 20 11.0853 19.8943 10.8844 19.6834L4.30131 12.7644C3.89956 12.3422 3.89956 11.6578 4.30131 11.2355Z"
              fill="white"
            />
          </svg>
        </div>
        <span class="d-inline-block ms-2">Create a new order</span>
        <span
          v-if="this.$route.name === 'configure'"
          class="d-inline-block ms-2"
          >2 of 3</span
        >
      </div>
      <div class="d-flex justify-content-center" v-else>
        <button class="text-white bg-subnav">CARTS</button>
        <button class="text-white bg-subnav ms-5">FAVORITES</button>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
.bg-subnav {
  background: #34495e;
}
</style>
