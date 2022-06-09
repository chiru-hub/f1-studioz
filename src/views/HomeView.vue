<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-6 bg-dark text-white">Hello</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
