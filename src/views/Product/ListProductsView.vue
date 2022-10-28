<template>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <div class="ads">
          <img :src="this.idsPicture" alt="" />
        </div>
      </div>
      <div class="col-9">
        <div class="list__products">
          <div class="list__products-title">
            <div class="fs-15">{{ this.category }}</div>
            <a :href="`/danh-muc-san-pham/` + this.linkCategory">
              <span class="fs-15">Tất cả sản phẩm</span>
              <i class="fa-solid fa-caret-right"></i>
            </a>
          </div>
          <div class="row" v-if="this.products.length !== 0">
            <div
              class="col-3"
              v-for="product in this.products"
              :key="product._id"
            >
              <div class="list__products-item">
                <a :href="`/san-pham/` + product._id">
                  <img :src="product.productimage" alt="" />
                </a>
                <div class="blur-text fs-13">{{ product.category }}</div>
                <a :href="`/san-pham/` + product._id" class="fs-15 bold-text">{{
                  product.productname
                }}</a>
                <div class="price-sale-off blur-text fs-13">
                  {{
                    product.saleoff !== 0
                      ? Math.round(
                          product.price * (100 / (100 - product.saleoff))
                        ).toLocaleString("it-IT", {
                          style: "currency",
                          currency: "VND",
                        })
                      : product.price.toLocaleString("it-IT", {
                          style: "currency",
                          currency: "VND",
                        })
                  }}
                </div>
                <div class="price-real">
                  {{
                    product.price.toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                    })
                  }}
                </div>
                <span class="product__sale">{{ product.saleoff }}%</span>
                <div
                  v-if="product.state == 'OUTOFSTOCKING'"
                  class="out-of-stock"
                >
                  Hết hàng
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    idsPicture: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      linkCategory: "",
      products: [],
    };
  },
  created() {
    if (this.category === "mobile") {
      this.linkCategory = "dien-thoai";
    } else if (this.category === "tablet") {
      this.linkCategory = "tablet";
    } else if (this.category === "watch") {
      this.linkCategory = "dong-ho";
    }

    axios
      .get(
        `https://server-denstore.herokuapp.com/api/products/category/${this.category}`
      )
      .then((res) => {
        this.products = res.data.data;
      })
      .catch((err) => {
        console.log(err);
        return;
      });
  },
};
</script>

<style lang="css" scoped>
.ads > img {
  width: 100%;
  object-fit: contain;
}
.list__products-title {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-border-blur);
  margin-bottom: 2rem;
  text-transform: capitalize;
}

.list__products-title > div {
  font-weight: bold;
  padding: 1rem 0;
  border-bottom: 1px solid black;
  margin-bottom: -1px;
}

.list__products-title > a {
  color: var(--color-text-blur);
  display: flex;
  align-items: center;
}

.list__products-item {
  border: 1px solid var(--color-border-blur);
  border-top: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 1rem;
  margin: 1rem 0;
}
.list__products-item > a > img {
  width: 20rem;
  min-height: 20rem;
  object-fit: cover;
  overflow: hidden;
  padding: 0 1rem;
}

.price-real {
  color: var(--color-black);
  font-weight: 900;
  font-size: 1.5rem;
}

.price-sale-off {
  text-decoration: line-through;
}

.list__products-item:hover {
  box-shadow: 0 0 0.2rem 0.2rem var(--color-border-blur);
}

.product__sale {
  background-color: var(--color-red);
  color: white;
  border-radius: 50%;
  font-size: 1.4rem;
  width: inherit;
  top: 0;
  left: 0;
  box-shadow: 0 0 1rem 0.4rem var(--color-red);
}
</style>
