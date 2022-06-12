<template>
  <div>
    <TableHeader />
    <div class="px-2">
      <Table />
    </div>
    <div
      class="cursor-pointer d-flex justify-content-center align-items-center"
      style="
        position: absolute;
        bottom: 50px;
        right: 50px;
        background-color: #66332b;
        border-radius: 50%;
        height: 72px;
        width: 72px;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.127704);
      "
      @click="$router.push('/order')"
    >

        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Path"
            d="M14.0077 0.715393H9.57693V9.57693H0.715393V14.0077H9.57693V22.8692H14.0077V14.0077H22.8692V9.57693H14.0077V0.715393Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import SubNavBar from "../components/subNavBar.vue";
import Table from "../components/table.vue";
import TableHeader from "../components/tableHeader.vue";

export default {
  // name: "Home",
  components: {
    SubNavBar,
    Table,
    TableHeader,
  },
};
</script>
