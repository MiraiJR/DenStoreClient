<template>
  <div class="container">
    <div
      class="cart-no-product"
      v-if="!this.productsInCart || this.productsInCart.length == 0"
    >
      <div>Chưa có sản phẩm nào trong giỏ hàng.</div>
      <a href="/">Quay trở lại cửa hàng</a>
    </div>
    <div
      class="row"
      v-if="this.productsInCart && this.productsInCart.length != 0"
    >
      <div class="col-8">
        <table class="table">
          <thead class="table__prop">
            <tr>
              <th scope="col">Sản phẩm</th>
              <th scope="col">Giá</th>
              <th scope="col">Số lượng</th>
              <th scope="col">Tạm tính</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in this.productsInCart" :key="product._id">
              <th>
                <div class="product-in-cart">
                  <a
                    :href="`/san-pham/` + product._id"
                    class="product-in-cart-image"
                  >
                    <img :src="product.productimage" alt="" srcset="" />
                  </a>
                  <div class="product-in-cart-detail">
                    <a :href="`/san-pham/` + product._id">{{
                      product.productname
                    }}</a>
                    <div>DUNG LƯỢNG: {{ product.memory }}</div>
                    <div>MÀU SẮC: {{ product.color }}</div>
                  </div>
                </div>
              </th>
              <td>
                {{
                  product.price.toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })
                }}
              </td>
              <td>{{ product.amount }}</td>
              <td>
                {{
                  (product.amount * product.price).toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })
                }}
              </td>
            </tr>
          </tbody>
        </table>
        <a href="/" class="btn-return-ch">← Tiếp tục xem sản phẩm</a>
      </div>
      <div class="col-4">
        <div class="in-cart-title">CỘNG GIỎ HÀNG</div>
        <div class="in-cart-item">
          <span>Tạm tính</span>
          <span>{{
            this.totalMoney.toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })
          }}</span>
        </div>
        <div class="in-cart-item">
          <span>Giao hàng</span>
          <span>COD</span>
        </div>
        <div class="in-cart-item">
          <span>Tổng</span>
          <span>{{
            this.totalMoney.toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })
          }}</span>
        </div>
        <a href="/thanh-toan" class="in-cart-item-link in-cart-item">
          TIẾN HÀNH THANH TOÁN
        </a>
        <div class="promo__code">
          <div class="promo__code-label">
            <i class="fa-solid fa-tag"></i>
            <span>Phiếu ưu đãi</span>
          </div>
          <input
            class="promo__code-input"
            type="text"
            v-model="this.maUuDai"
            placeholder="Mã ưu đãi"
          />
        </div>

        <button class="apply-promo-code">Áp dụng</button>
      </div>
    </div>
  </div>
</template>

<script>
import mitter from "../../services/emiiter.js";
import VueCookies from "vue-cookies";
export default {
  data() {
    return {
      totalMoney: 0,
      productsInCart: [],
      maUuDai: "",
    };
  },
  methods: {},
  created() {
    this.productsInCart = JSON.parse(VueCookies.get("product"));
    if (this.productsInCart !== null) {
      for (let product of this.productsInCart) {
        this.totalMoney += parseInt(product.price) * parseInt(product.amount);
      }
    }

    mitter.on("addProductToCart", (e) => {
      let isDuplicate = false;

      // Kiểm tra sản phầm thêm vào trung với sản phầm có trước đó thì cộng dồn số lượng
      for (let product of this.productsInCart) {
        if (
          product._id == e._id &&
          product.memory == e.memory &&
          product.color == e.color
        ) {
          product.amount = (
            parseInt(e.amount) + parseInt(product.amount)
          ).toString();
          isDuplicate = true;
          break;
        }
      }

      // nếu trùng => không push vào cookie
      if (!isDuplicate) {
        this.productsInCart.push(e);
      }

      // tính tổng tiền lại
      this.totalMoney += e.price * e.amount;

      //set cookies
      VueCookies.set("product", JSON.stringify(this.productsInCart));
    });
  },
  mounted() {
    mitter.on("updateProductsInCart", () => {
      this.productsInCart = JSON.parse(VueCookies.get("product"));
    });
  },
};
</script>

<style lang="css" scoped>
.cart-no-product {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.cart-no-product > div {
  font-size: 1.5rem;
  color: var(--color-text-blur);
  margin-bottom: 2rem;
}

.cart-no-product > a {
  padding: 0.5rem 2rem;
  background-color: var(--color-black);
  color: var(--color-white);
  font-size: 2rem;
}
.table__prop {
  background-color: var(--color-black);
  color: var(--color-white);
}

.table__prop > tr > th {
  font-size: 2rem;
  text-align: center;
}

.table__prop > tr > th:first-child {
  text-align: left;
}

tbody > tr:nth-child(odd) {
  background-color: var(--color-row-table);
}

tbody > tr > td {
  transform: translateY(-25%);
  font-size: 1.5rem;
  text-align: center;
}

.product-in-cart {
  border-bottom: none;
}

.product-in-cart-image > img {
  max-width: 10rem;
  object-fit: cover;
}

.in-cart-title {
  width: 100%;
  border: 2px solid var(--color-black);
  font-size: 1.5rem;
  font-weight: 800;
  padding: 1rem;
  text-align: center;
}

.in-cart-item {
  border-bottom: 1px solid var(--color-border-blur);
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
}

.in-cart-item > span {
  font-size: 1.5rem;
  font-weight: 800;
}

.in-cart-item > span:first-child {
  text-decoration: underline;
}

.in-cart-item > span:last-child {
  color: red;
}

.in-cart-item-link {
  font-size: 1.5rem;
  background-color: var(--color-red);
  display: flex;
  justify-content: center;
  color: var(--color-white);
  margin-top: 2rem;
}

.in-cart-item-link:hover {
  box-shadow: 0 0 0.3rem 0.3rem var(--color-border-blur);
}

.btn-return-ch {
  width: fit-content;
  border: 2px solid var(--color-black);
  padding: 0.5rem 1rem;
  color: var(--color-black);
  font-size: 1.8rem;
  font-weight: 800;
}

.promo__code-label {
  padding: 1rem 0;
  border-bottom: 1px solid var(--color-border-blur);
}

.promo__code-label * {
  font-size: 1.5rem;
  font-weight: 800;
}

.promo__code-label > i {
  margin-right: 1rem;
}

.promo__code-input {
  border-radius: 0;
  margin: 1rem 0;
  box-shadow: none;
  font-size: 1.6rem;
  border: 1px solid var(--color-border-blur);
}

.promo__code-input:focus {
  border: none;
  box-shadow: 0 0 0.3rem 0.3rem var(--color-border-blur);
}

.apply-promo-code {
  border: 1px solid var(--color-border-blur);
  background-color: #f9f9f9;
  width: 100%;
  padding: 1rem 0;
  font-size: 1.6rem;
  font-weight: 800;
  transition: 0.3s linear;
}

.apply-promo-code:hover {
  background-color: #c7c7c7;
}
</style>
