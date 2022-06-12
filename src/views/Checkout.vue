<template>
  <div>
    <div class="section bg-white custom-shadow">
      <div class="section-1">
        <h3 class="font-bold mb-2 product-title">
          10' 0'' X 10' 0.0'' CAN211 CC W1 COMPLETE DOOR INTELLICORE OBSCURE,
          5TH GENERATION FINISH WALDER DOOR
        </h3>
        <p class="text-gray">
          Job Name: Front door with glass
          <span class="primary-color font-bold">Change</span>
        </p>
        <p class="text-gray">Product #CWD • Garage Door</p>
        <p>
          <span class="text-gray">Availability:</span>
          <span class="text-green font-bold">IN STOCK</span> (Available for
          Pickup)
        </p>
        <div class="row mt-4">
          <div class="col-4 quanity-on-desktop">
            <div class="quantity-counter">
              <div class="minus action" @click="decreaseQuantity">
                <span class="material-icons px-2">remove</span>
              </div>
              <div><input v-model="quantity" type="number" /></div>
              <div class="plus action" @click="increaseQuantity">
                <span class="material-icons px-2">add</span>
              </div>
            </div>
          </div>
          <div class="col-6 col-sm-4 text-md-center">
            <p class="text-green">Standard Multiplier: .432</p>
            <p class="text-green">Secondary Multipliers Applied</p>
            <div
              class="
                mt-2
                primary-color
                font-medium
                d-flex
                justify-content-center
                align-items-center
              "
            >
              <span class="material-icons m-0 px-2">verified</span>Apply MPQ
            </div>
          </div>
          <div class="col-6 col-sm-4 text-right">
            <p class="font-medium">
              Net Price: <span class="font-bold net-price">$4500.00</span>
            </p>
            <p class="font-medium">Unit Price: $4800.00</p>
            <p class="primary-color mt-3 font-medium">View Price Details</p>
          </div>
        </div>
        <div class="quantity-on-mobile">
          <div class="quantity-counter">
            <div class="minus action" @click="decreaseQuantity">
              <span class="material-icons px-2">remove</span>
            </div>
            <div><input v-model="quantity" type="number" /></div>
            <div class="plus action" @click="increaseQuantity">
              <span class="material-icons px-2">add</span>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-4 product-actions">
        <div class="d-flex justify-content-around outer">
          <div class="primary-color d-flex action">
            <span class="material-icons px-2">favorite</span>
            <p class="font-semibold uppercase">Favorites</p>
          </div>
          <div class="primary-color d-flex action" @click="Edit">
            <span class="material-icons px-2">mode_edit</span>
            <p class="font-semibold uppercase">Edit</p>
          </div>
          <div class="primary-color d-flex action">
            <span class="material-icons px-2">content_copy</span>
            <p class="font-semibold uppercase">Copy</p>
          </div>
          <div class="primary-color d-flex action" @click="DeleteProduct">
            <span class="material-icons px-2">delete</span>
            <p class="font-semibold uppercase">Delete</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="row">
        <div class="col-sm p-0">
          <div class="container bg-white custom-shadow rounded mt-2">
            <div class="px-2 py-4">
              <p class="font-medium">Change Delivery Date</p>
              <input
                class="w-100 form-control my-2"
                type="text"
                placeholder="Example: 31-DEC-1999"
                data-provide="datepicker"
              />
              <p>Standard Delivery: Tue May 28 - 2019</p>
            </div>
          </div>
          <div class="container bg-white custom-shadow rounded mt-2">
            <div class="px-2 py-4">
              <p class="font-medium">Purchase Order Number</p>
              <input
                class="w-100 form-control my-2"
                type="text"
                placeholder="Enter PO Number"
                data-provide="datepicker"
              />
              <p>This PO will be useful to track this order items</p>
            </div>
          </div>
        </div>
        <div class="col-sm p-0">
          <div class="container bg-white custom-shadow rounded mt-2">
            <div class="px-2 py-4">
              <h1>Bill Sumamry</h1>
              <table class="w-100">
                <tr>
                  <td>Sub Total</td>
                  <td>$ 4500.00</td>
                </tr>
                <tr>
                  <td>Energy Surcharge</td>
                  <td>$ 70.18</td>
                </tr>
                <tr>
                  <td>Sales Tax</td>
                  <td>$ 490.93</td>
                </tr>
                <tr>
                  <td class="font-bold">TOTAL</td>
                  <td class="font-bold">$ 5061.11</td>
                </tr>
              </table>
              <hr />
              <div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked
                  />
                  <label
                    class="form-check-label font-bold primary-color"
                    for="flexCheckChecked"
                  >
                    Apply Tax
                  </label>
                </div>
                <p class="mt-1">
                  (The 1% iStore discount is calculated into the total price for
                  all doors and door parts. Please refer to the quote or order
                  acknowledgment for details.)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="address-section bg-white custom-shadow mt-3 px-2">
        <div class="col px-4 py-4 border-right">
          <p>Shipping To</p>
          <div class="d-flex justify-content-between">
            <h5 class="font-semibold mt-3">Bement Jared</h5>
            <p class="font-bold primary-color">CHANGE</p>
          </div>
          <p class="mt-2 font-medium">144 Curt Shores, 50, Madison Avenue</p>
          <p class="font-medium">Hixson - 42040</p>
          <p class="mt-2 font-medium">Contact: (123) 456 7890</p>
        </div>
        <div class="col px-4 py-4">
          <p>Billing To</p>
          <div class="d-flex justify-content-between">
            <h5 class="font-semibold mt-3">Bement Jared</h5>
            <p class="font-bold primary-color">CHANGE</p>
          </div>
          <p class="mt-2 font-medium">144 Curt Shores, 50, Madison Avenue</p>
          <p class="font-medium">Hixson - 42040</p>
          <p class="mt-2 font-medium">Contact: (123) 456 7890</p>
        </div>
      </div>
      <div class="row">
        <div class="actions custom-shadow bg-white">
          <div class="d-flex flex-column px-4">
            <span class="font-bold">1 ITEM</span>
            <h5 class="font-bold mt-1">$5061.11</h5>
          </div>
          <div class="button-layout">
            <button type="button" class="btn outline" @click="AddMore">
              <span class="material-icons px-2">add</span>ADD MORE
            </button>
            <div @click="placeOrder" class="btn"><span>PLACE ORDER</span></div>
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
      quantity: 1,
    };
  },
  mounted() {
    $(".datepicker").datepicker({
      autoclose: true,
    });
  },
  methods: {
    increaseQuantity: function () {
      if (this.quantity > 0) {
        this.quantity++;
      }
    },
    decreaseQuantity: function () {
      if (this.quantity >= 2) {
        this.quantity--;
      }
    },
    Edit: function () {
      this.$store.commit("LOAD_DATA", true);
      this.$router.push({ name: "desktop4", params: { initLoad: true } });
    },
    AddMore: function () {
      this.$router.replace("/configure");
    },
    DeleteProduct: function () {
      this.$router.replace("/");
    },
  },
};
</script>


<style lang="scss" scoped>
.section {
  max-width: 928px;
  margin: auto;
  margin-top: 5px;
  padding: 5px 10px;
  @media only screen and (max-width: 576px) {
    padding: 0;
  }
  .material-icons {
    padding-left: 10px;
  }
  .form-select {
    padding: 6px 10px;
  }

  .product-title {
    width: 75%;
    @media only screen and (max-width: 576px) {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }

  .address-section {
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    @media only screen and (max-width: 576px) {
      display: block;
    }
  }

  .section-1 {
    padding: 1.5rem;
    @media only screen and (max-width: 576px) {
      padding: 1rem;
    }
  }
}

.custom-shadow {
  // box-shadow: 0px 0px 1px rgb(0 0 0 / 10%), 0px 2px 8px rgb(0 0 0 / 10%);
  border-radius: 5px;
}

.header-index {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #34495e;
  width: 100%;
  color: white;
  padding-left: 15px;

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

.quantity-counter {
  display: flex;
  input {
    max-width: 60px;
    height: 40px;
    text-align: center;
    font-weight: bold;
  }
  .action {
    background-color: #f6f8fa;
    border-radius: 2px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #dadfe3;
    &.minus {
      margin-right: 5px;
    }
    &.plus {
      margin-left: 5px;
    }
    .material-icons {
      color: #34495e;
      font-weight: bold;
      font-size: 20px;
    }
  }
}

.quantity-on-mobile {
  display: none;
  @media only screen and (max-width: 576px) {
    display: block;
  }
}

.quanity-on-desktop {
  display: block;
  @media only screen and (max-width: 576px) {
    display: none;
  }
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

.net-price {
  font-size: 20px;
}

.actions {
  border-radius: 5px;
  margin-top: 10px;
  max-width: 928px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  padding: 10px 10px;
  left: 0;
  right: 0;
  .button-layout {
    display: flex;
    @media only screen and (max-width: 576px) {
      justify-content: space-between;
      margin: 1rem 1.5rem;
    }
  }
  @media only screen and (max-width: 576px) {
    flex-direction: column;
  }
  .material-icons {
    background-color: #66332b;
    color: white;
    font-size: 10px;
    width: 14px;
    height: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    margin-right: 5px;
  }
  .btn {
    background: #66332b;
    color: white;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 576px) {
      width: 100%;
      padding: 12px 0;
      text-align: center;
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

.product-actions {
  padding: 1.5rem;
  @media only screen and (max-width: 576px) {
    padding: 0;
  }
  cursor: pointer;
  .outer {
    border-radius: 5px;
    border: 1px solid #e4e4e4;
    @media only screen and (max-width: 576px) {
      border-radius: 0;
    }
  }
  .action {
    padding: 12px;
    justify-content: center;
    width: 100%;
    border-left: 1px solid #e4e4e4;
    &.action:first-child {
      border-left: 0;
    }
  }
  .material-icons {
    color: #66332b;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    margin-right: 5px;
    @media only screen and (max-width: 576px) {
      padding: 0 !important;
    }
  }
}

.text-gray {
  color: #8894a0;
}
.text-green {
  color: #1abe6c;
}

.text-right {
  text-align: right;
}
.border-right {
  border-right: 1px solid #e4e4e4;
}
.header {
  @media only screen and (max-width: 992px) {
    display: none;
  }
}
</style>
