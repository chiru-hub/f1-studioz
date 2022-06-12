<template>
  <div>
    <div class="section">
      <div class="progress-section my-4">
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            :style="`width: ${progress}%`"
            :aria-valuenow="progress"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        {{ progress }}% Completed
      </div>

      <LayoutOptions />
      <WindowOptions />
      <TrackOptions />
      <OtherOptions />

      <div class="actions">
        <button type="button" class="btn outline">PREVIEW</button>
        <button
          @click="addToCart"
          type="button"
          class="btn"
          :disabled="progress != 100"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import LayoutOptions from "../components/desktop/layout-options.vue";
import WindowOptions from "../components/desktop/window-options.vue";
import TrackOptions from "../components/desktop/track-options.vue";
import OtherOptions from "../components/desktop/other-options.vue";
export default {
  data() {
    return {};
  },
  components: {
    LayoutOptions,
    WindowOptions,
    TrackOptions,
    OtherOptions,
  },
  computed: {
    progress() {
      let progress = 0;
      if (this.$store.state.isLayoutCompleted) {
        progress = progress + 25;
      }
      if (this.$store.state.isWindowCompleted) {
        progress = progress + 25;
      }
      if (this.$store.state.isTrackCompleted) {
        progress = progress + 25;
      }
      if (this.$store.state.isOtherCompleted) {
        progress = progress + 25;
      }
      return progress;
    },
  },
  mounted() {
    if (!this.$route.params.initLoad) {
      this.$store.commit("RESET_PROGRESS");
    }
  },
  methods: {
    addToCart: function () {
      this.$store.commit("ADD_TO_CART");
      this.$router.push("/checkout");
    },
  },
};
</script>

<style lang="scss" scoped>
.section {
  margin: auto;
  max-width: 928px;
  margin-top: 24px;
  padding: 0 10px;
  .progress-section {
    width: 50%;
    margin: auto;
    font-size: 14px;
    text-align: center;
    .progress {
      border-radius: 10px;
      margin-bottom: 10px;
      height: 0.7rem;
      .progress-bar {
        background-color: #17a85f;
      }
    }
  }
}

.header-index {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #34495e;
  width: 100%;
  color: white;

  .top-heading {
    display: flex;
    align-items: center;
    .title {
      font-size: 15px;
      font-weight: 800px;
      padding-left: 10px;
    }

    .sub-title {
      padding-left: 10px;
    }

    @media only screen and (max-width: 576px) {
      display: block;
    }
  }

  .action {
    padding: 15px 35px;
    margin: 0 10px;

    &.active {
      font-weight: bold;
      position: relative;
      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        height: 3px;
        background-color: #faca30;
      }
    }
  }
}

.actions {
  border-radius: 5px;
  max-width: 928px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-end;
  bottom: 0;
  background-color: white;
  padding: 10px 10px;
  left: 0;
  right: 0;
  .btn {
    background: #66332b;
    color: white;
    font-size: 12px;
    padding: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    &:disabled {
      opacity: 0.2;
    }
    &.outline {
      background: #ffffff;
      border: 2px solid #66332b;
      margin-right: 15px;
      font-weight: bold;
      color: #66332b;
    }
    &:nth-child(2) {
      padding-left: 10px;
    }
  }
}

.header {
  @media only screen and (max-width: 992px) {
    display: none;
  }
}
</style>
